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
    footer: {
      rights: "All rights reserved.",
      tagline: "Transforming businesses through intelligent technology",
    },
  },
} as const;
