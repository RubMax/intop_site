// duvidas-frequentes_traduction.js
// Personal translation script for Intop Dúvidas Frequentes page
// Supports: Portuguese (pt), Spanish (es), Kreyol (ht)

(function() {
    'use strict';

    // ---- Translation dictionary ----
    const translations = {
        pt: {
            // Navigation
            "nav.home": "Início",
            "nav.how": "Como Funciona",
            "nav.benefits": "Vantagens",
            "nav.faq": "FAQ",

            // Banner
            "banner.title": "Dúvidas <span>Frequentes</span>",
            "banner.subtitle": "Encontre respostas rápidas para as principais perguntas sobre a utilização do aplicativo.",

            // FAQ - 16 questions
            "faq.1.question": "Quanto tempo demora para a recarga cair no celular de destino?",
            "faq.1.answer": "O processo é praticamente instantâneo! Graças à nossa integração automatizada com as maiores distribuidoras de telefonia do mundo, a recarga costuma ser creditada em até 2 minutos após a confirmação do pagamento via Pix.",
            "faq.2.question": "Quais são os limites de valor por transação?",
            "faq.2.answer": "Por questões de conformidade e segurança, o valor de recarga permitido por operação é configurado no intervalo de R$ 10,00 a R$ 100,00.",
            "faq.3.question": "Quais países e operadoras são aceitos?",
            "faq.3.answer": "Apoiamos o envio de saldo para os principais países das Américas Latina e do Norte, Europa e vários outros continentes. Operadoras populares como MEO, AT&T, Claro, T-Mobile e Viva são suportadas.",
            "faq.4.question": "O que acontece se eu digitar o número do celular errado?",
            "faq.4.answer": "Sugerimos atenção redobrada no momento da digitação. Se o número informado for válido e receber a recarga, não temos como reverter o processo. Caso o número seja inválido ou o envio falhe, nossa plataforma cancelará a transação automaticamente para garantir que você não seja prejudicado.",
            "faq.5.question": "Como entro em contato com o suporte da Intop?",
            "faq.5.answer": "Você pode acessar a seção de suporte no menu do próprio aplicativo ou enviar um e-mail com as informações de sua transação diretamente para o endereço suporte@intop.com.br.",
            "faq.6.question": "Como funciona o pagamento da recarga?",
            "faq.6.answer": "Após escolher o país, a operadora, o número de celular e o valor da recarga, o aplicativo gera as informações para pagamento via Pix.",
            "faq.7.question": "Preciso criar uma conta para fazer uma recarga?",
            "faq.7.answer": "Sim. É necessário criar uma conta na Intop para realizar recargas, acompanhar suas transações e consultar o histórico de recargas realizadas.",
            "faq.8.question": "Como posso acompanhar o status da minha recarga?",
            "faq.8.answer": "Você pode acompanhar o status da sua recarga diretamente na seção de histórico do aplicativo. Após a confirmação, a transação será atualizada e você poderá consultar os detalhes da operação.",
            "faq.9.question": "Receberei um comprovante da recarga?",
            "faq.9.answer": "Sim. Após a conclusão da recarga, você poderá consultar o comprovante diretamente no aplicativo e compartilhar as informações da transação pelo WhatsApp.",
            "faq.10.question": "O que acontece se o pagamento não for confirmado?",
            "faq.10.answer": "Se o pagamento não for identificado ou confirmado, a recarga não será processada e o valor será automaticamente devolvido à sua conta, sem a necessidade de entrar em contato com o suporte. Caso o pagamento já tenha sido realizado, aguarde a confirmação do sistema.",
            "faq.11.question": "Posso cancelar uma recarga depois de realizar o pagamento?",
            "faq.11.answer": "Depois que a recarga for processada e enviada para o número informado, não é possível cancelá-la ou revertê-la. Por isso, confira cuidadosamente o número do celular e o valor antes de confirmar a operação.",
            "faq.12.question": "É seguro realizar pagamentos pela Intop?",
            "faq.12.answer": "Sim. A Intop utiliza processos de pagamento e sistemas de segurança para proteger as informações dos usuários e suas transações. Recomendamos sempre verificar os dados da recarga antes de realizar o pagamento.",
            "faq.13.question": "Posso fazer uma nova recarga para o mesmo número?",
            "faq.13.answer": "Sim. Você pode realizar novas recargas para o mesmo número. Pelo histórico de transações, também é possível selecionar uma recarga anterior e facilitar o preenchimento dos dados para uma nova operação.",
            "faq.14.question": "A Intop cobra alguma taxa adicional?",
            "faq.14.answer": "O valor total da operação é apresentado antes da confirmação do pagamento. Dessa forma, você poderá verificar o valor da recarga e o valor final a pagar antes de realizar o Pix.",
            "faq.15.question": "Posso fazer recargas para celulares de outros países?",
            "faq.15.answer": "Sim. A Intop permite realizar recargas internacionais para números de celular de diferentes países e operadoras disponíveis em nossa plataforma.",
            "faq.16.question": "Como posso salvar o nome do beneficiário para não esquecer o número dele?",
            "faq.16.answer": "1. Acesse o Histórico e selecione o número do beneficiário.\n2. Clique no ícone de lápis ao lado do nome da operadora.\n3. Na janela que será aberta, digite o nome do beneficiário e clique em Salvar.",

            // CTA
            "cta.title": "Pronto para recarregar?",
            "cta.subtitle": "Instale o aplicativo oficial do Intop no seu Android e tenha acesso a recargas automáticas na palma da sua mão.",
            "cta.download_direct": "Download Direto",

            // Footer
            "footer.about": "A forma mais rápida, segura e econômica de enviar recargas de celular para seus amigos e familiares no exterior. Pagamento instantâneo via Pix.",
            "footer.navigation": "Navegação",
            "footer.support": "Suporte e Termos",
            "footer.privacy": "Política de Privacidade",
            "footer.copyright": "© 2026 Intop. Todos os direitos reservados. Conectando pessoas através de recargas seguras e automatizadas em nuvem.",
            "footer.terms": "Termos"
        },
        es: {
            // Navigation
            "nav.home": "Inicio",
            "nav.how": "Cómo Funciona",
            "nav.benefits": "Ventajas",
            "nav.faq": "FAQ",
            "nav.download": "Descargar App",

            // Banner
            "banner.title": "Preguntas <span>Frecuentes</span>",
            "banner.subtitle": "Encuentra respuestas rápidas para las principales preguntas sobre el uso de la aplicación.",

            // FAQ - 16 questions
            "faq.1.question": "¿Cuánto tiempo tarda en llegar la recarga al celular de destino?",
            "faq.1.answer": "¡El proceso es prácticamente instantáneo! Gracias a nuestra integración automatizada con las mayores distribuidoras de telefonía del mundo, la recarga suele acreditarse en hasta 2 minutos después de la confirmación del pago vía Pix.",
            "faq.2.question": "¿Cuáles son los límites de valor por transacción?",
            "faq.2.answer": "Por cuestiones de cumplimiento y seguridad, el valor de recarga permitido por operación se configura en el rango de R$ 10,00 a R$ 100,00.",
            "faq.3.question": "¿Qué países y operadoras son aceptados?",
            "faq.3.answer": "Apoyamos el envío de saldo para los principales países de América Latina y del Norte, Europa y varios otros continentes. Operadoras populares como MEO, AT&T, Claro, T-Mobile y Viva son soportadas.",
            "faq.4.question": "¿Qué pasa si escribo mal el número de celular?",
            "faq.4.answer": "Sugerimos prestar mucha atención al momento de escribir. Si el número ingresado es válido y recibe la recarga, no podemos revertir el proceso. Si el número es inválido o el envío falla, nuestra plataforma cancelará automáticamente la transacción para garantizar que no te veas afectado.",
            "faq.5.question": "¿Cómo contacto al soporte de Intop?",
            "faq.5.answer": "Puedes acceder a la sección de soporte en el menú de la aplicación o enviar un correo electrónico con la información de tu transacción directamente a suporte@intop.com.br.",
            "faq.6.question": "¿Cómo funciona el pago de la recarga?",
            "faq.6.answer": "Después de elegir el país, la operadora, el número de celular y el valor de la recarga, la aplicación genera la información para el pago vía Pix.",
            "faq.7.question": "¿Necesito crear una cuenta para hacer una recarga?",
            "faq.7.answer": "Sí. Es necesario crear una cuenta en Intop para realizar recargas, seguir tus transacciones y consultar el historial de recargas realizadas.",
            "faq.8.question": "¿Cómo puedo seguir el estado de mi recarga?",
            "faq.8.answer": "Puedes seguir el estado de tu recarga directamente en la sección de historial de la aplicación. Después de la confirmación, la transacción se actualizará y podrás consultar los detalles de la operación.",
            "faq.9.question": "¿Recibiré un comprobante de la recarga?",
            "faq.9.answer": "Sí. Después de completar la recarga, podrás consultar el comprobante directamente en la aplicación y compartir la información de la transacción por WhatsApp.",
            "faq.10.question": "¿Qué pasa si el pago no se confirma?",
            "faq.10.answer": "Si el pago no se identifica o confirma, la recarga no se procesará y el valor se devolverá automáticamente a tu cuenta, sin necesidad de contactar al soporte. Si el pago ya se realizó, espera la confirmación del sistema.",
            "faq.11.question": "¿Puedo cancelar una recarga después de realizar el pago?",
            "faq.11.answer": "Después de que la recarga se procese y envíe al número indicado, no es posible cancelarla o revertirla. Por eso, verifica cuidadosamente el número de celular y el valor antes de confirmar la operación.",
            "faq.12.question": "¿Es seguro realizar pagos a través de Intop?",
            "faq.12.answer": "Sí. Intop utiliza procesos de pago y sistemas de seguridad para proteger la información de los usuarios y sus transacciones. Recomendamos siempre verificar los datos de la recarga antes de realizar el pago.",
            "faq.13.question": "¿Puedo hacer una nueva recarga para el mismo número?",
            "faq.13.answer": "Sí. Puedes realizar nuevas recargas para el mismo número. A través del historial de transacciones, también es posible seleccionar una recarga anterior y facilitar el llenado de los datos para una nueva operación.",
            "faq.14.question": "¿Intop cobra alguna tarifa adicional?",
            "faq.14.answer": "El valor total de la operación se presenta antes de la confirmación del pago. De esta forma, podrás verificar el valor de la recarga y el valor final a pagar antes de realizar el Pix.",
            "faq.15.question": "¿Puedo hacer recargas para celulares de otros países?",
            "faq.15.answer": "Sí. Intop permite realizar recargas internacionales para números de celular de diferentes países y operadoras disponibles en nuestra plataforma.",
            "faq.16.question": "¿Cómo puedo guardar el nombre del beneficiario para no olvidar su número?",
            "faq.16.answer": "1. Accede al Historial y selecciona el número del beneficiario.\n2. Haz clic en el ícono de lápiz al lado del nombre de la operadora.\n3. En la ventana que se abrirá, escribe el nombre del beneficiario y haz clic en Guardar.",

            // CTA
            "cta.title": "¿Listo para recargar?",
            "cta.subtitle": "Instala la aplicación oficial de Intop en tu Android y ten acceso a recargas automáticas en la palma de tu mano.",
            "cta.download_direct": "Descarga Directa",

            // Footer
            "footer.about": "La forma más rápida, segura y económica de enviar recargas de celular a tus amigos y familiares en el extranjero. Pago instantáneo vía Pix.",
            "footer.navigation": "Navegación",
            "footer.support": "Soporte y Términos",
            "footer.privacy": "Política de Privacidad",
            "footer.delete": "Eliminación de Cuenta",
            "footer.copyright": "© 2026 Intop. Todos los derechos reservados. Conectando personas a través de recargas seguras y automatizadas en la nube.",
            "footer.terms": "Términos"
        },
        ht: {
            // Navigation
            "nav.home": "Akèy",
            "nav.how": "Kijan li Fonksyone",
            "nav.benefits": "Avantaj",
            "nav.faq": "FAQ",
            "nav.download": "Telechaje App",

            // Banner
            "banner.title": "Kesyon yo <span>poze souvan</span>",
            "banner.subtitle": "Jwenn repons vit sou tout kesyon ou ta vle poze sou aplikasyon an.",

            // FAQ - 16 questions
            "faq.1.question": "Konbyen tan li pran pou rechaj la rive sou telefòn destinasyon an?",
            "faq.1.answer": "Pwosesis la fet nan 2 ak 3 segond! Gras a entegrasyon otomatik nou an ak pi gwo distribitè telefoni nan mond lan, rechaj la souvan kredite nan 2 minit apre konfimasyon peman an atravè Pix.",
            "faq.2.question": "Konbyen kob rechaj mwen ka voye?",
            "faq.2.answer": "Pou rezon sekirite, valè rechaj ki pèmèt pa operasyon an se ant R$ 10,00 ak R$ 100,00.",
            "faq.3.question": "Ki peyi ak operatè ki aksepte?",
            "faq.3.answer": "Nou voye rechaj pou peyi prensipal nan Amerik Latin ak Nò, Ewòp ak plizyè lòt kontinan. Operatè popilè tankou MEO, AT&T, Claro, T-Mobile ak Viva yo sipòte.",
            "faq.4.question": "Kisa k ap pase si m tape yon move nimewo telefòn?",
            "faq.4.answer": "Nou sijere atansyon double lè w ap tape. Si nimewo a valab epi li resevwa rechaj la, nou pa ka ranvèse pwosesis la. Si nimewo a pa valab oswa voye a echwe, platfòm nou an pral anile transaksyon an otomatikman pou asire w pa gen pwoblèm.",
            "faq.5.question": "Kijan m ka kontakte sipò Intop?",
            "faq.5.answer": "Ou ka ale nan seksyon sipò nan meni aplikasyon an oswa voye yon imèl ak enfòmasyon transaksyon ou a dirèkteman nan adrès suporte@intop.com.br.",
            "faq.6.question": "Kijan peman rechaj la travay?",
            "faq.6.answer": "Apre w fin chwazi peyi a, operatè a, nimewo telefòn nan ak valè rechaj la, aplikasyon an jenere enfòmasyon pou peman atravè Pix.",
            "faq.7.question": "Èske m bezwen kreye yon kont pou fè yon rechaj?",
            "faq.7.answer": "Wi. Li nesesè pou kreye yon kont sou Intop pou fè rechaj, swiv transaksyon ou yo epi konsilte istorik rechaj yo.",
            "faq.8.question": "Kijan m ka swiv estati rechaj mwen an?",
            "faq.8.answer": "Ou ka swiv estati rechaj ou a dirèkteman nan seksyon istorik aplikasyon an. Apre konfimasyon an, transaksyon an pral mete ajou epi w ka konsilte detay operasyon an.",
            "faq.9.question": "Èske m pral resevwa yon resi rechaj la?",
            "faq.9.answer": "Wi. Apre fini rechaj la, ou ka konsilte resi a dirèkteman nan aplikasyon an epi pataje enfòmasyon transaksyon an atravè WhatsApp.",
            "faq.10.question": "Kisa k ap pase si peman an pa konfime?",
            "faq.10.answer": "Si peman an pa idantifye oswa konfime, rechaj la pa pral trete epi valè a pral retounen otomatikman nan kont ou, san bezwen kontakte sipò. Si peman an te deja fèt, tann konfimasyon sistèm nan.",
            "faq.11.question": "Èske m ka anile yon rechaj apre m te fè peman an?",
            "faq.11.answer": "Apre rechaj la trete epi voye bay nimewo a, li pa posib anile l oswa ranvèse l. Se poutèt sa, tcheke ak anpil atansyon nimewo telefòn nan ak valè a anvan w konfime operasyon an.",
            "faq.12.question": "Èske li an sekirite pou fè peman atravè Intop?",
            "faq.12.answer": "Wi. Intop itilize pwosesis peman ak sistèm sekirite pou pwoteje enfòmasyon itilizatè yo ak transaksyon yo. Nou rekòmande toujou verifye done rechaj la anvan w fè peman an.",
            "faq.13.question": "Èske m ka fè yon nouvo rechaj pou menm nimewo a?",
            "faq.13.answer": "Wi. Ou ka fè nouvo rechaj pou menm nimewo a. Atravè istorik transaksyon yo, ou ka chwazi yon rechaj anvan epi fasilite ranpli done yo pou yon nouvo operasyon.",
            "faq.14.question": "Èske Intop chaje kèk frè adisyonèl?",
            "faq.14.answer": "Valè total operasyon an prezante anvan konfimasyon peman an. Konsa, ou ka verifye valè rechaj la ak valè final la anvan w fè Pix la.",
            "faq.15.question": "Èske m ka fè rechaj pou telefòn nan lòt peyi?",
            "faq.15.answer": "Wi. Intop pèmèt fè rechaj entènasyonal pou nimewo telefòn nan diferan peyi ak operatè ki disponib sou platfòm nou an.",
            "faq.16.question": "Kijan m ka sove non benefisyè a pou pa bliye nimewo li?",
            "faq.16.answer": "1. Ale nan Istorik epi chwazi nimewo benefisyè a.\n2. Klike sou ikon kreyon an bò kote non operatè a.\n3. Nan fenèt ki pral louvri, tape non benefisyè a epi klike sou Sove.",

            // CTA
            "cta.title": "Èske w pare pou rechaje?",
            "cta.subtitle": "Enstale aplikasyon ofisyèl Intop sou Android ou epi w ap gen aksè a rechaj otomatik nan men ou.",
            "cta.download_direct": "Telechajman Dirèk",

            // Footer
            "footer.about": "Fason ki pi vit, pi an sekirite ak pi ekonomik pou voye rechaj telefòn bay zanmi ak fanmi ou aletranje. Peman enstantane atravè Pix.",
            "footer.navigation": "Navigasyon",
            "footer.support": "Sipò ak Kondisyon",
            "footer.privacy": "Politik Konfidansyalite",
            "footer.copyright": "© 2026 Intop. Tout dwa rezève. Konekte moun atravè rechaj ki an sekirite ak otomatik nan nwaj.",
            "footer.terms": "Kondisyon"
        }
    };

    // ---- DOM elements ----
    const langButtons = document.querySelectorAll('.lang-btn');

    // ---- Helper functions ----
    function setLang(lang) {
        document.documentElement.lang = lang;
        // Update active button state
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        // Translate all elements
        translatePage(lang);
        // Store preference
        try {
            localStorage.setItem('intop-lang', lang);
        } catch(e) { /* ignore */ }
    }

    function translatePage(lang) {
    const dict = translations[lang];

    if (!dict) return;

    // Rechercher les éléments à traduire à chaque changement de langue
    const translatableElements = document.querySelectorAll('[data-i18n]');

    translatableElements.forEach(el => {
        const key = el.dataset.i18n;

        if (dict[key] !== undefined) {

            if (key === 'banner.title') {
                el.innerHTML = dict[key];

            } else if (key === 'faq.16.answer') {
                el.innerHTML = dict[key].replace(/\n/g, '<br>');

            } else {
                el.textContent = dict[key];
            }
        }
    });
}

    // ---- FAQ Toggle ----
    function initFaqToggle() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(function(item, index) {
            const header = item.querySelector('.faq-header');
            if (header) {
                // Remove any existing event listeners by cloning
                const newHeader = header.cloneNode(true);
                header.parentNode.replaceChild(newHeader, header);
                
                newHeader.addEventListener('click', function(e) {
                    e.stopPropagation();
                    // Toggle the clicked item
                    item.classList.toggle('active');
                });
            }
        });
        
        // Open first FAQ by default
        if (faqItems.length > 0) {
            faqItems[0].classList.add('active');
        }
    }

    // ---- Event listeners ----
    langButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const lang = this.dataset.lang;
            setLang(lang);
        });
    });

    // ---- Init ----
    function init() {
        // Try to load stored language
        let storedLang = null;
        try {
            storedLang = localStorage.getItem('intop-lang');
        } catch(e) { /* ignore */ }

        // Detect browser language (simple: pt, es, ht)
        let browserLang = navigator.language.slice(0, 2).toLowerCase();
        if (!['pt', 'es', 'ht'].includes(browserLang)) {
            browserLang = 'pt';
        }

        const initialLang = storedLang || browserLang || 'pt';
        setLang(initialLang);

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const mobileNav = document.querySelector('.mobile-nav');
        if (hamburger && mobileNav) {
            hamburger.addEventListener('click', function() {
                mobileNav.classList.toggle('open');
            });
        }

        // FAQ toggle - initialize after DOM is ready
        initFaqToggle();
    }

    // Wait for DOM fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
