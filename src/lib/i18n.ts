export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
    },
    hero: {
      badge: "Tecnología para el futuro",
      title: "Transformamos negocios con",
      titleHighlight: "tecnología inteligente",
      subtitle:
        "Automatización, IA, sistemas a medida y soluciones digitales para empresas que quieren crecer sin límites.",
      cta: "Conoce nuestros servicios",
      ctaSecondary: "Habla con nosotros",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle:
        "Soluciones tecnológicas completas adaptadas a cualquier industria y tamaño de empresa.",
      items: [
        {
          title: "Desarrollo Web",
          description:
            "Sitios y aplicaciones web modernas, rápidas y escalables que convierten visitantes en clientes.",
        },
        {
          title: "Agente WhatsApp IA",
          description:
            "Automatiza la atención al cliente 24/7 con un agente inteligente que responde, vende y gestiona en WhatsApp.",
        },
        {
          title: "Automatización de Procesos",
          description:
            "Eliminamos tareas repetitivas con flujos de trabajo inteligentes que ahorran tiempo y reducen errores.",
        },
        {
          title: "Auditorías Tecnológicas",
          description:
            "Analizamos tu infraestructura actual e identificamos vulnerabilidades, ineficiencias y oportunidades de mejora.",
        },
        {
          title: "Sistemas a Medida",
          description:
            "Desarrollamos software personalizado que se adapta exactamente a los procesos únicos de tu empresa.",
        },
        {
          title: "Aplicaciones Móviles",
          description:
            "Apps nativas y multiplataforma para iOS y Android que llevan tu negocio al bolsillo de tus clientes.",
        },
        {
          title: "Respaldos y Seguridad",
          description:
            "Estrategias de backup, recuperación ante desastres y protección de datos para mantener tu negocio siempre operativo.",
        },
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
        "Soluciones personalizadas, no plantillas genéricas",
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
      tagline: "Transforming businesses through intelligent technology",
    },
  },
  en: {
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    hero: {
      badge: "Technology for the future",
      title: "Transforming businesses with",
      titleHighlight: "intelligent technology",
      subtitle:
        "Automation, AI, custom systems, and digital solutions for companies that want to grow without limits.",
      cta: "Explore our services",
      ctaSecondary: "Talk to us",
    },
    services: {
      title: "Our Services",
      subtitle:
        "Complete technological solutions adapted to any industry and company size.",
      items: [
        {
          title: "Web Development",
          description:
            "Modern, fast, and scalable websites and web applications that turn visitors into customers.",
        },
        {
          title: "WhatsApp AI Agent",
          description:
            "Automate customer support 24/7 with an intelligent agent that responds, sells, and manages on WhatsApp.",
        },
        {
          title: "Process Automation",
          description:
            "We eliminate repetitive tasks with intelligent workflows that save time and reduce errors.",
        },
        {
          title: "Technology Audits",
          description:
            "We analyze your current infrastructure and identify vulnerabilities, inefficiencies, and improvement opportunities.",
        },
        {
          title: "Custom Systems",
          description:
            "We develop custom software that adapts exactly to your company's unique processes.",
        },
        {
          title: "Mobile Applications",
          description:
            "Native and cross-platform apps for iOS and Android that bring your business to your customers' pockets.",
        },
        {
          title: "Backup & Security",
          description:
            "Backup strategies, disaster recovery, and data protection to keep your business always operational.",
        },
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
        "Custom solutions, not generic templates",
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
