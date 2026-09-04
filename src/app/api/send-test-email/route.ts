import { NextRequest, NextResponse } from "next/server";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

export const dynamic = "force-dynamic";

const REGION = process.env.AWS_REGION || "us-east-1";
const FROM_EMAIL = process.env.SES_FROM_EMAIL;

const client = new SESv2Client({ region: REGION });

// Limite simple por IP, mejor esfuerzo (no persiste entre cold starts serverless,
// pero evita el abuso mas obvio de un mismo visitante spameando el formulario).
const lastSentByIp = new Map<string, number>();
const COOLDOWN_MS = 60_000;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  if (!FROM_EMAIL) {
    return NextResponse.json(
      { error: "El envio de prueba todavia no esta activo." },
      { status: 503 }
    );
  }

  let body: { email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud invalida." }, { status: 400 });
  }

  const email = (body.email || "").trim();
  if (!EMAIL_REGEX.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Escribe un correo valido." }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const last = lastSentByIp.get(ip) ?? 0;
  if (now - last < COOLDOWN_MS) {
    return NextResponse.json(
      { error: "Ya te enviamos una prueba hace poco. Espera un minuto e intenta de nuevo." },
      { status: 429 }
    );
  }
  lastSentByIp.set(ip, now);

  try {
    await client.send(
      new SendEmailCommand({
        FromEmailAddress: FROM_EMAIL,
        Destination: { ToAddresses: [email] },
        Content: {
          Simple: {
            Subject: { Data: "Tu prueba de NETRIX MailEngine llegó bien" },
            Body: {
              Text: {
                Data:
                  "Este correo fue procesado en tiempo real a través de NETRIX MailEngine sobre AWS SES (us-east-1), con SPF, DKIM y DMARC correctamente configurados.\n\n" +
                  "Así es como deberían llegar todos tus envíos masivos: autenticados, sin caer en spam.\n\n" +
                  "¿Quieres esto para tu dominio? Escríbenos por WhatsApp: +56 9 7629 2908.\n\n— Netrix",
              },
            },
          },
        },
      })
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("SES send error", err);
    return NextResponse.json(
      { error: "No pudimos enviar la prueba en este momento. Intenta de nuevo en un rato." },
      { status: 502 }
    );
  }
}
