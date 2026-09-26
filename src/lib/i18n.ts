export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
    },
    hero: {
      badge: "Diseño × Tecnología",
      title: "Diseñamos lo digital. Construimos lo que hay detrás.",
      titleHighlight: "Diseño · Tecnología · Automatización",
      subtitle:
        "Creamos experiencias digitales y sistemas que ayudan a tu negocio a vender, operar y crecer mejor.",
      cta: "Ver lo que hacemos",
      ctaSecondary: "Hablar con Netrix",
    },
    services: {
      title: "Lo que construimos",
      subtitle:
        "Diseño y tecnología trabajando juntos: desde la experiencia que ve tu cliente hasta los sistemas que la hacen funcionar.",
      categories: [
        {
          number: "01",
          title: "Experiencias Digitales",
          description: "Presencia digital que convierte.",
          tags: ["Websites", "E-commerce", "UX / UI"],
        },
        {
          number: "02",
          title: "IA & Automatización",
          description: "Procesos y atención que trabajan solos.",
          tags: ["WhatsApp AI", "Automatización de procesos", "Integraciones"],
        },
        {
          number: "03",
          title: "Sistemas a Medida",
          description: "Software adaptado exactamente a tu negocio.",
          tags: ["Software a medida", "Apps móviles", "Plataformas internas"],
        },
        {
          number: "04",
          title: "Tecnología & Seguridad",
          description: "La base que mantiene todo operativo.",
          tags: ["Infraestructura", "Backups", "Auditorías", "Seguridad"],
        },
      ],
      complementary: "Capacidades complementarias: IA · Integraciones · Cloud · Seguridad · Datos",
    },
    experiences: {
      eyebrow: "Experiencias Netrix",
      title: "Una dirección digital para cada tipo de negocio",
      subtitle: "No todos los negocios necesitan la misma experiencia digital.",
      closing: "Cada negocio necesita una experiencia diferente. Nosotros diseñamos la interfaz y construimos la tecnología que la sostiene.",
      viewDemo: "Ver experiencia",
      items: [
        { name: "Lara", category: "Belleza", url: "https://larahairclub.vercel.app", image: "/images/experiences/lara.png" },
        { name: "Maja", category: "Gastronomía", url: "https://deploy-maja.vercel.app", image: "/images/experiences/maja.png" },
        { name: "Rayo", category: "Servicios técnicos", url: "https://deploy-rayo.vercel.app", image: "/images/experiences/rayo.png" },
        { name: "CALA", category: "Salud", url: "https://deploy-cala.vercel.app", image: "/images/experiences/cala.png" },
        { name: "LUME", category: "Moda & Objetos", url: "https://deploy-lume.vercel.app", image: "/images/experiences/lume.png" },
      ],
    },
    auditBanner: {
      title: "¿Tus correos masivos están llegando a spam?",
      subtitle: "Audita gratis el dominio de tu empresa en segundos — SPF, DKIM y DMARC.",
      cta: "Auditar mi dominio gratis",
    },
    about: {
      title: "¿Por qué Netrix?",
      subtitle:
        "Somos un equipo de ingenieros especializados en transformar la forma en que las empresas operan, usando tecnología de vanguardia.",
      points: [
        "Experiencia en infraestructura y desarrollo de software",
        "Partimos de una dirección diseñada para tu negocio y la adaptamos a lo que necesitas",
        "Soporte continuo y acompañamiento post-implementación",
        "Enfoque en ROI: cada solución genera valor medible",
      ],
    },
    contact: {
      title: "Hablemos de tu proyecto",
      subtitle:
        "Cuéntanos qué necesitas y en 24 horas te respondemos con una propuesta.",
      cta: "Contactar por WhatsApp",
      email: "O escríbenos a",
    },
    auditoria: {
      badge: "Herramienta gratuita",
      title: "¿Tus correos masivos están llegando a spam?",
      subtitle:
        "Escribe tu dominio y revisamos en segundos si tienes SPF, DKIM y DMARC bien configurados — las tres cosas que Gmail y Outlook revisan antes de decidir si tu correo llega a la bandeja de entrada o a spam.",
      inputPlaceholder: "tudominio.cl",
      buttonAudit: "Auditar mi dominio",
      buttonAuditing: "Auditando...",
      errorConnection: "No se pudo conectar con el auditor. Intenta de nuevo.",
      resultFor: "Resultado para",
      nivel: {
        alto: {
          label: "Riesgo alto",
          desc: "Varias piezas clave faltan. Es muy probable que tus correos masivos estén cayendo en spam o directamente rebotando.",
        },
        medio: {
          label: "Riesgo medio",
          desc: "Tienes parte de la configuración, pero falta al menos una pieza importante para asegurar buena entregabilidad.",
        },
        bajo: {
          label: "Riesgo bajo",
          desc: "Tu dominio tiene la base de autenticación de correo bien configurada.",
        },
      },
      spfLabel: "SPF",
      spfOk: "Configurado — autoriza qué servidores pueden enviar correo por tu dominio.",
      spfBad: "No encontrado — cualquiera podría enviar correo haciéndose pasar por tu dominio.",
      dkimLabel: "DKIM",
      dkimOk: "Detectado — tus correos llevan una firma digital que confirma que no fueron alterados.",
      dkimBad: "No detectado en los selectores más comunes — puede que no esté configurado.",
      dmarcLabel: "DMARC",
      dmarcMissing: "No encontrado — no hay política que le diga a Gmail/Outlook qué hacer con correos falsificados de tu dominio.",
      dmarcNoneMode: (policy: string) => `Configurado en modo "${policy}" — solo monitorea, no bloquea nada.`,
      dmarcActive: (policy: string) => `Configurado en modo "${policy}" — protege activamente contra suplantación.`,
      quickOk: "Configurado",
      quickSpfBad: "No encontrado",
      quickDkimBad: "No detectado",
      quickDmarcMissing: "No detectado",
      quickDmarcNoneMode: 'No detectado o en modo "p=none"',
      quickDmarcActive: (policy: string) => `Configurado (p=${policy})`,
      mxHostedIn: "Correo alojado en:",
      ctaFix: "Corregir mi entregabilidad con NETRIX MailEngine",
      whatsappMessage: (dominio: string) =>
        `Hola Netrix! Audité mi dominio ${dominio} en su web y quiero corregir mi entregabilidad con NETRIX MailEngine.`,
      testWidgetText:
        "¿Quieres ver la diferencia? Ingresa tu correo para enviarte una prueba procesada desde AWS SES us-east-1 en 1 segundo.",
      testEmailPlaceholder: "tu@correo.com",
      testButtonSend: "Enviarme la prueba",
      testButtonSending: "Enviando...",
      testSentMessage: "¡Listo! Revisa tu bandeja de entrada — te llegó desde NETRIX MailEngine.",
      testErrorConnection: "No se pudo conectar con el servidor. Intenta de nuevo.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      tagline: "Transformamos negocios con tecnología inteligente.",
    },
  },
  en: {
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "Design × Technology",
      title: "We design the digital. We build what's behind it.",
      titleHighlight: "Design · Technology · Automation",
      subtitle:
        "We create digital experiences and systems that help your business sell, operate, and grow better.",
      cta: "See what we do",
      ctaSecondary: "Talk to Netrix",
    },
    services: {
      title: "What we build",
      subtitle:
        "Design and technology working together: from the experience your customer sees to the systems that run behind it.",
      categories: [
        {
          number: "01",
          title: "Digital Experiences",
          description: "Digital presence that converts.",
          tags: ["Websites", "E-commerce", "UX / UI"],
        },
        {
          number: "02",
          title: "AI & Automation",
          description: "Processes and support that run themselves.",
          tags: ["WhatsApp AI", "Process automation", "Integrations"],
        },
        {
          number: "03",
          title: "Custom Systems",
          description: "Software built exactly for your business.",
          tags: ["Custom software", "Mobile apps", "Internal platforms"],
        },
        {
          number: "04",
          title: "Technology & Security",
          description: "The foundation that keeps everything running.",
          tags: ["Infrastructure", "Backups", "Audits", "Security"],
        },
      ],
      complementary: "Complementary capabilities: AI · Integrations · Cloud · Security · Data",
    },
    experiences: {
      eyebrow: "Netrix Experiences",
      title: "A digital direction for every kind of business",
      subtitle: "Not every business needs the same digital experience.",
      closing: "Every business needs a different experience. We design the interface and build the technology that supports it.",
      viewDemo: "View experience",
      items: [
        { name: "Lara", category: "Beauty", url: "https://larahairclub.vercel.app", image: "/images/experiences/lara.png" },
        { name: "Maja", category: "Food & Hospitality", url: "https://deploy-maja.vercel.app", image: "/images/experiences/maja.png" },
        { name: "Rayo", category: "Technical Services", url: "https://deploy-rayo.vercel.app", image: "/images/experiences/rayo.png" },
        { name: "CALA", category: "Medical", url: "https://deploy-cala.vercel.app", image: "/images/experiences/cala.png" },
        { name: "LUME", category: "Fashion & Objects", url: "https://deploy-lume.vercel.app", image: "/images/experiences/lume.png" },
      ],
    },
    auditBanner: {
      title: "Is your bulk email landing in spam?",
      subtitle: "Audit your company's domain for free in seconds — SPF, DKIM, and DMARC.",
      cta: "Audit my domain for free",
    },
    about: {
      title: "Why Netrix?",
      subtitle:
        "We are a team of engineers specialized in transforming the way businesses operate using cutting-edge technology.",
      points: [
        "Expertise in infrastructure and software development",
        "We start from a direction designed for your business and adapt it to what you need",
        "Ongoing support and post-implementation guidance",
        "ROI-focused: every solution generates measurable value",
      ],
    },
    contact: {
      title: "Let's talk about your project",
      subtitle:
        "Tell us what you need and we'll respond with a proposal within 24 hours.",
      cta: "Contact via WhatsApp",
      email: "Or write to us at",
    },
    auditoria: {
      badge: "Free tool",
      title: "Is your bulk email landing in spam?",
      subtitle:
        "Enter your domain and we'll check in seconds whether SPF, DKIM, and DMARC are set up correctly — the three things Gmail and Outlook check before deciding if your email reaches the inbox or spam.",
      inputPlaceholder: "yourdomain.com",
      buttonAudit: "Audit my domain",
      buttonAuditing: "Auditing...",
      errorConnection: "Could not connect to the auditor. Try again.",
      resultFor: "Result for",
      nivel: {
        alto: {
          label: "High risk",
          desc: "Several key pieces are missing. Your bulk emails are very likely landing in spam or bouncing outright.",
        },
        medio: {
          label: "Medium risk",
          desc: "You have part of the setup, but at least one important piece is missing to ensure good deliverability.",
        },
        bajo: {
          label: "Low risk",
          desc: "Your domain has its email authentication set up correctly.",
        },
      },
      spfLabel: "SPF",
      spfOk: "Configured — authorizes which servers can send email on behalf of your domain.",
      spfBad: "Not found — anyone could send email pretending to be your domain.",
      dkimLabel: "DKIM",
      dkimOk: "Detected — your emails carry a digital signature confirming they weren't altered.",
      dkimBad: "Not detected among the most common selectors — it may not be configured.",
      dmarcLabel: "DMARC",
      dmarcMissing: "Not found — there's no policy telling Gmail/Outlook what to do with spoofed emails from your domain.",
      dmarcNoneMode: (policy: string) => `Set to "${policy}" mode — it only monitors, it doesn't block anything.`,
      dmarcActive: (policy: string) => `Set to "${policy}" mode — actively protects against spoofing.`,
      quickOk: "Configured",
      quickSpfBad: "Not found",
      quickDkimBad: "Not detected",
      quickDmarcMissing: "Not detected",
      quickDmarcNoneMode: 'Not detected or set to "p=none"',
      quickDmarcActive: (policy: string) => `Configured (p=${policy})`,
      mxHostedIn: "Email hosted on:",
      ctaFix: "Fix my deliverability with NETRIX MailEngine",
      whatsappMessage: (dominio: string) =>
        `Hi Netrix! I audited my domain ${dominio} on your site and I want to fix my deliverability with NETRIX MailEngine.`,
      testWidgetText:
        "Want to see the difference? Enter your email and we'll send you a test message processed via AWS SES us-east-1 in 1 second.",
      testEmailPlaceholder: "you@email.com",
      testButtonSend: "Send me the test",
      testButtonSending: "Sending...",
      testSentMessage: "Done! Check your inbox — it arrived from NETRIX MailEngine.",
      testErrorConnection: "Could not connect to the server. Try again.",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Transforming businesses through intelligent technology",
    },
  },
} as const;
