document.addEventListener("DOMContentLoaded", () => {

  const translations = {

    pt: {
      seo: {
        title: "Recarga Digicel Haiti via Pix | Intop",
        description: "Faça recarga Digicel Haiti pelo Brasil usando Pix. Envie crédito para celulares Digicel no Haiti de forma rápida e segura com a Intop.",
        content: {
          title: "Recarga Digicel Haiti com Pix",
          p1: "A Intop permite que pessoas no Brasil enviem recargas para celulares Digicel no Haiti de maneira prática. Você não precisa viajar ou procurar uma loja especializada para ajudar familiares e amigos que estão no Haiti.",
          p2: "Pelo aplicativo Intop, você escolhe Haiti, seleciona Digicel, informa o número do telefone e escolhe o valor que deseja enviar. O pagamento pode ser realizado através do Pix.",
          p3: "A plataforma foi criada para facilitar recargas internacionais e conectar pessoas que vivem em diferentes países."
        }
      },
      nav: {
        home: "Início",
        how: "Como Funciona",
        benefits: "Vantagens",
        faq: "FAQ"
      },
      hero: {
        badge: "Haiti • Digicel • Natcom",
        title: "Recarga Digicel, Natcom Haiti pelo Brasil",
        description: "Envie crédito para um celular Digicel, Natcom no Haiti diretamente pelo aplicativo Intop. Escolha o número, informe o valor e pague facilmente via Pix.",
        button: "Fazer uma recarga",
        learn: "Como funciona?",
        trust1: "Pagamento via Pix",
        trust2: "Processo simples",
        trust3: "Recarga internacional"
      },
      phone: {
        title: "Recarga Internacional",
        country: "País",
        operator: "Operadora",
        amount: "Valor",
        payment: "Pagamento seguro"
      },
      benefits: {
        label: "POR QUE USAR A INTOP?",
        title: "Envie recargas para Digicel, Natcom Haiti sem complicação",
        description: "Uma maneira simples de ajudar familiares e amigos que estão no Haiti.",
        fast: { title: "Rápido", text: "Faça sua recarga sem precisar ir a uma loja física ou enviar dinheiro para o exterior." },
        safe: { title: "Seguro", text: "O pagamento é realizado através do Pix e você acompanha sua transação pelo aplicativo." },
        global: { title: "Internacional", text: "Envie recargas do Brasil para celulares Digicel, Natcom no Haiti." }
      },
      how: {
        label: "PASSO A PASSO",
        title: "Como fazer uma recarga Digicel, Natcom Haiti?",
        description: "Em poucos passos você pode enviar crédito para alguém no Haiti.",
        step1: { title: "Baixe o aplicativo", text: "Instale o aplicativo oficial da Intop no seu Android." },
        step2: { title: "Escolha Haiti", text: "Selecione Haiti como país de destino." },
        step3: { title: "Selecione Digicel/Natcom", text: "Escolha Digicel/Natcom e informe o número de telefone." },
        step4: { title: "Pague via Pix", text: "Escolha o valor da recarga e finalize o pagamento." }
      },
      faq: {
        label: "DÚVIDAS",
        title: "Perguntas frequentes",
        q1: "Posso fazer uma recarga Digicel, Natcom Haiti pelo Brasil?",
        a1: "Sim. A Intop permite enviar recargas internacionais para celulares Digicel, Natcom no Haiti através do aplicativo.",
        q2: "Posso pagar com Pix?",
        a2: "Sim. O pagamento da recarga pode ser realizado através do Pix dentro do aplicativo.",
        q3: "Preciso estar no Haiti para fazer a recarga?",
        a3: "Não. Você pode estar no Brasil e enviar uma recarga para um número Digicel, Natcom no Haiti.",
        q4: "Como começo?",
        a4: "Baixe o aplicativo Intop, crie sua conta e escolha Haiti e Digicel, Natcom para iniciar a recarga."
      },
      cta: {
        title: "Pronto para enviar uma recarga para Haiti?",
        description: "Baixe o aplicativo Intop e envie uma recarga Digicel, Natcom de forma simples pelo seu celular.",
        button: "Baixar Intop"
      },
      footer: {
        description: "Recargas internacionais simples, rápidas e seguras.",
        links: "Links",
        support: "Suporte",
        privacy: "Política de Privacidade",
        rights: "Todos os direitos reservados."
      }
    },

    es: {
      seo: {
        title: "Recarga Digicel, Natcom Haití vía Pix | Intop",
        description: "Realiza recargas Digicel, Natcom Haití desde Brasil utilizando Pix. Envía crédito a celulares Digicel, Natcom en Haití de forma rápida y segura con Intop.",
        content: {
          title: "Recarga Digicel, Natcom Haití con Pix",
          p1: "Intop permite que las personas en Brasil envíen recargas a celulares Digicel, Natcom en Haití de forma práctica. No necesitas viajar ni buscar una tienda especializada para ayudar a familiares y amigos que están en Haití.",
          p2: "Desde la aplicación Intop, elige Haití, selecciona Digicel/Natcom, introduce el número de teléfono y selecciona el monto que deseas enviar. El pago puede realizarse mediante Pix.",
          p3: "La plataforma fue creada para facilitar las recargas internacionales y conectar a personas que viven en diferentes países."
        }
      },
      nav: { home: "Inicio", how: "Cómo Funciona", benefits: "Ventajas", faq: "FAQ" },
      hero: {
        badge: "Haití • Digicel • Natcom",
        title: "Recarga Digicel, Natcom Haití desde Brasil",
        description: "Envía crédito a un celular Digicel, Natcom en Haití directamente desde la aplicación Intop. Elige el número, selecciona el monto y paga fácilmente con Pix.",
        button: "Hacer una recarga",
        learn: "¿Cómo funciona?",
        trust1: "Pago vía Pix",
        trust2: "Proceso sencillo",
        trust3: "Recarga internacional"
      },
      phone: { title: "Recarga Internacional", country: "País", operator: "Operador", amount: "Monto", payment: "Pago seguro" },
      benefits: {
        label: "¿POR QUÉ USAR INTOP?",
        title: "Envía recargas a Digicel, Natcom Haití sin complicaciones",
        description: "Una forma sencilla de ayudar a familiares y amigos que están en Haití.",
        fast: { title: "Rápido", text: "Realiza tu recarga sin necesidad de ir a una tienda física ni enviar dinero al extranjero." },
        safe: { title: "Seguro", text: "El pago se realiza mediante Pix y puedes seguir tu transacción desde la aplicación." },
        global: { title: "Internacional", text: "Envía recargas desde Brasil a celulares Digicel, Natcom en Haití." }
      },
      how: {
        label: "PASO A PASO",
        title: "¿Cómo hacer una recarga Digicel, Natcom Haití?",
        description: "En pocos pasos puedes enviar crédito a alguien en Haití.",
        step1: { title: "Descarga la aplicación", text: "Instala la aplicación oficial de Intop en tu Android." },
        step2: { title: "Elige Haití", text: "Selecciona Haití como país de destino." },
        step3: { title: "Selecciona Digicel?Natcom", text: "Elige Digicel, Natcom e introduce el número de teléfono." },
        step4: { title: "Paga con Pix", text: "Elige el monto de la recarga y completa el pago." }
      },
      faq: {
        label: "PREGUNTAS",
        title: "Preguntas frecuentes",
        q1: "¿Puedo hacer una recarga Digicel, Natcom Haití desde Brasil?",
        a1: "Sí. Intop permite enviar recargas internacionales a celulares Digicel, Natcom en Haití mediante la aplicación.",
        q2: "¿Puedo pagar con Pix?",
        a2: "Sí. El pago de la recarga puede realizarse mediante Pix dentro de la aplicación.",
        q3: "¿Necesito estar en Haití para hacer la recarga?",
        a3: "No. Puedes estar en Brasil y enviar una recarga a un número Digicel, Natcom en Haití.",
        q4: "¿Cómo empiezo?",
        a4: "Descarga la aplicación Intop, crea tu cuenta y selecciona Haití y Digicel, Natcom para comenzar."
      },
      cta: {
        title: "¿Listo para enviar una recarga a Haití?",
        description: "Descarga la aplicación Intop y envía una recarga Digicel, Natcom fácilmente desde tu celular.",
        button: "Descargar Intop"
      },
      footer: {
        description: "Recargas internacionales simples, rápidas y seguras.",
        links: "Enlaces",
        support: "Soporte",
        privacy: "Política de Privacidad",
        rights: "Todos los derechos reservados."
      }
    },

    ht: {
      seo: {
        title: "Rechaj Digicel, Natcom Ayiti ak Pix | Intop",
        description: "Voye rechaj Digicel, Natcom Ayiti depi Brezil ak Pix. Voye kredi sou telefòn Digicel, Natcom ann Ayiti fasil, rapid ak an sekirite ak Intop.",
        content: {
          title: "Rechaj Digicel, Natcom Ayiti ak Pix",
          p1: "Intop pèmèt moun ki Brezil voye rechaj sou telefòn Digicel, Natcom ann Ayiti fasil. Ou pa bezwen vwayaje oswa chèche yon magazen espesyal pou ede fanmi ak zanmi ou ki Ayiti.",
          p2: "Nan aplikasyon Intop la, chwazi Ayiti, chwazi Digicel/Natcom, antre nimewo telefòn lan epi chwazi kantite lajan ou vle voye. Ou ka fè peman an ak Pix.",
          p3: "Platfòm nan fèt pou fasilite rechaj entènasyonal epi konekte moun k ap viv nan diferan peyi."
        }
      },
      nav: { home: "Akèy", how: "Kijan li mache", benefits: "Avantaj", faq: "FAQ" },
      hero: {
        badge: "Ayiti • Digicel • Natcom",
        title: "Rechaj Digicel, Natcom Ayiti depi Brezil",
        description: "Voye kredi sou yon telefòn Digicel, Natcom ann Ayiti dirèkteman ak aplikasyon Intop. Chwazi nimewo a, chwazi kantite lajan an epi peye fasil ak Pix.",
        button: "Fè yon rechaj",
        learn: "Kijan sa mache?",
        trust1: "Peman ak Pix",
        trust2: "Pwosesis fasil",
        trust3: "Rechaj entènasyonal"
      },
      phone: { title: "Rechaj Entènasyonal", country: "Peyi", operator: "Operatè", amount: "Kantite", payment: "Peman an sekirite" },
      benefits: {
        label: "POUKISA ITILIZE INTOP?",
        title: "Voye rechaj sou Digicel, Natcom Ayiti san pwoblèm",
        description: "Yon fason fasil pou ede fanmi ak zanmi ou ki Ayiti.",
        fast: { title: "Rapid", text: "Fè rechaj ou san ou pa bezwen ale nan yon magazen oswa voye lajan aletranje." },
        safe: { title: "An sekirite", text: "Peman an fèt ak Pix epi ou ka swiv tranzaksyon ou nan aplikasyon an." },
        global: { title: "Entènasyonal", text: "Voye rechaj depi Brezil sou telefòn Digicel, Natcom ann Ayiti." }
      },
      how: {
        label: "ETAP PA ETAP",
        title: "Kijan pou fè yon rechaj Digicel, Natcom Ayiti?",
        description: "Nan kèk etap sèlman, ou ka voye kredi bay yon moun ann Ayiti.",
        step1: { title: "Telechaje aplikasyon an", text: "Enstale aplikasyon ofisyèl Intop la sou Android ou." },
        step2: { title: "Chwazi Ayiti", text: "Chwazi Ayiti kòm peyi destinasyon an." },
        step3: { title: "Chwazi Digicel/Natcom", text: "Chwazi Digicel/Natcom epi antre nimewo telefòn lan." },
        step4: { title: "Peye ak Pix", text: "Chwazi kantite rechaj la epi fini peman an." }
      },
      faq: {
        label: "KESYON",
        title: "Kesyon moun poze souvan",
        q1: "Èske mwen ka fè yon rechaj Digicel, Natcom Ayiti depi Brezil?",
        a1: "Wi. Intop pèmèt ou voye rechaj entènasyonal sou telefòn Digicel, Natcom ann Ayiti ak aplikasyon an.",
        q2: "Èske mwen ka peye ak Pix?",
        a2: "Wi. Ou ka peye rechaj la ak Pix nan aplikasyon an.",
        q3: "Èske mwen bezwen Ayiti pou fè rechaj la?",
        a3: "Non. Ou ka Brezil epi voye yon rechaj sou yon nimewo Digicel, Natcom ann Ayiti.",
        q4: "Kijan pou mwen kòmanse?",
        a4: "Telechaje aplikasyon Intop la, kreye kont ou epi chwazi Ayiti ak Digicel, Natcom pou kòmanse."
      },
      cta: {
        title: "Èske ou pare pou voye yon rechaj Ayiti?",
        description: "Telechaje aplikasyon Intop la epi voye yon rechaj Digicel, Natcom fasil depi telefòn ou.",
        button: "Telechaje Intop"
      },
      footer: {
        description: "Rechaj entènasyonal ki senp, rapid ak an sekirite.",
        links: "Lyen",
        support: "Sipò",
        privacy: "Règleman sou enfòmasyon prive",
        rights: "Tout dwa rezève."
      }
    }
  };

  function getNestedValue(object, path) {
    return path.split(".").reduce((current, key) => {
      return current ? current[key] : undefined;
    }, object);
  }

  function updateLanguage(language) {
    if (!translations[language]) language = "pt";
    const dictionary = translations[language];

    document.documentElement.lang =
      language === "pt" ? "pt-BR" :
      language === "es" ? "es" : "ht";

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");
      const value = getNestedValue(dictionary, key);
      if (value !== undefined) element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-content]").forEach(element => {
      const key = element.getAttribute("data-i18n-content");
      const value = getNestedValue(dictionary, key);
      if (value !== undefined) element.setAttribute("content", value);
    });

    const title = getNestedValue(dictionary, "seo.title");
    if (title) document.title = title;

    document.querySelectorAll("[data-language]").forEach(button => {
      button.classList.toggle("active", button.getAttribute("data-language") === language);
    });

    localStorage.setItem("intop_seo_language", language);
  }

  document.querySelectorAll("[data-language]").forEach(button => {
    button.addEventListener("click", () => {
      const language = button.getAttribute("data-language");
      updateLanguage(language);
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu) mobileMenu.classList.remove("open");
    });
  });

  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });
  }

  const savedLanguage = localStorage.getItem("intop_seo_language") || "pt";
  updateLanguage(savedLanguage);
});