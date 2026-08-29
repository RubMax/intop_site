// vantagens_traduction.js
// Personal translation script for Intop Vantagens page
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
            "nav.faq": "Dúvidas Frequentes",
            "nav.download": "Baixar App",

            // Banner
            "banner.title": "Por que escolher a <span>Intop</span>?",
            "banner.subtitle": "Descubra os principais diferenciais que tornam a nossa plataforma a melhor escolha em recargas internacionais.",

            // Advantages
            "advantage.1.title": "Velocidade Instantânea",
            "advantage.1.desc": "Sem esperas. A confirmação de pagamento via Pix aciona automaticamente o envio da recarga, que é entregue no exterior em segundos.",
            "advantage.2.title": "Segurança Total",
            "advantage.2.desc": "Suas transações são totalmente protegidas. Trabalhamos em conformidade com as maiores regulamentações de segurança de pagamentos e Pix.",
            "advantage.3.title": "Sem Taxas Ocultas",
            "advantage.3.desc": "Transparência em primeiro lugar. Você visualiza o valor exato que o celular receberá antes de confirmar o pagamento via Pix.",
            "advantage.4.title": "Ampla Cobertura",
            "advantage.4.desc": "Enviamos créditos de telefonia para centenas de operadoras localizadas nas Américas, Europa, Ásia e África através da nossa rede digital.",
            "advantage.5.title": "Histórico no App",
            "advantage.5.desc": "Acompanhe todos os seus comprovantes de forma simples. O aplicativo possui um histórico completo de transações e beneficiários frequentes.",
            "advantage.6.title": "Suporte Dedicado",
            "advantage.6.desc": "Nossa equipe de suporte está sempre pronta para ajudar em caso de dúvidas sobre transações ou configurações.",

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
            "nav.faq": "Preguntas Frecuentes",
            "nav.download": "Descargar App",

            // Banner
            "banner.title": "¿Por qué elegir <span>Intop</span>?",
            "banner.subtitle": "Descubre los principales diferenciales que hacen de nuestra plataforma la mejor opción en recargas internacionales.",

            // Advantages
            "advantage.1.title": "Velocidad Instantánea",
            "advantage.1.desc": "Sin esperas. La confirmación de pago vía Pix activa automáticamente el envío de la recarga, que se entrega en el exterior en segundos.",
            "advantage.2.title": "Seguridad Total",
            "advantage.2.desc": "Tus transacciones están totalmente protegidas. Trabajamos en cumplimiento con las mayores regulaciones de seguridad de pagos y Pix.",
            "advantage.3.title": "Sin Comisiones Ocultas",
            "advantage.3.desc": "Transparencia ante todo. Visualizas el valor exacto que el celular recibirá antes de confirmar el pago vía Pix.",
            "advantage.4.title": "Amplia Cobertura",
            "advantage.4.desc": "Enviamos créditos de telefonía a cientos de operadoras ubicadas en América, Europa, Asia y África a través de nuestra red digital.",
            "advantage.5.title": "Historial en la App",
            "advantage.5.desc": "Sigue todos tus comprobantes de forma sencilla. La aplicación tiene un historial completo de transacciones y beneficiarios frecuentes.",
            "advantage.6.title": "Soporte Dedicado",
            "advantage.6.desc": "Nuestro equipo de soporte está siempre listo para ayudar en caso de dudas sobre transacciones o configuraciones.",

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
            "nav.faq": "Kesyon yo poze souvan",
            "nav.download": "Telechaje App",

            // Banner
            "banner.title": "Poukisa chwazi <span>Intop</span>?",
            "banner.subtitle": "Dekouvri diferans prensipal yo ki fè platfòm nou an pi bon chwa nan rechaj entènasyonal yo.",

            // Advantages
            "advantage.1.title": "Vitès Enstantane",
            "advantage.1.desc": "Pa gen tann. Konfimasyon peman an atravè Pix aktive otomatikman voye rechaj la, ki delivre aletranje nan segond.",
            "advantage.2.title": "Sekirite Total",
            "advantage.2.desc": "Transaksyon ou yo totalman pwoteje. Nou travay an konfòmite ak pi gwo règleman sekirite peman ak Pix.",
            "advantage.3.title": "Pa gen Frè Kache",
            "advantage.3.desc": "Transparans an premye. Ou wè valè egzak telefòn nan pral resevwa anvan ou konfime peman an atravè Pix.",
            "advantage.4.title": "Kouvèti Laj",
            "advantage.4.desc": "Nou voye kredi telefoni pou plizyè santèn operatè ki nan Amerik, Ewòp, Azi ak Afrik atravè rezo dijital nou an.",
            "advantage.5.title": "Istorik nan App",
            "advantage.5.desc": "Swiv tout resi ou yo yon fason senp. Aplikasyon an gen yon istorik konplè transaksyon ak benefisyè ki souvan.",
            "advantage.6.title": "Sipò Dediye",
            "advantage.6.desc": "Ekip sipò nou an toujou pare pou ede nan ka kesyon sou transaksyon oswa konfigirasyon.",

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
    const translatableElements = document.querySelectorAll('[data-i18n]');

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

        translatableElements.forEach(el => {
            const key = el.dataset.i18n;
            if (dict[key] !== undefined) {
                // Check if element contains HTML (like the banner title with <span>)
                if (key === 'banner.title' && el.querySelector('span')) {
                    el.innerHTML = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });
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
    }

    // Wait for DOM fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();