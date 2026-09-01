// simulador_traduction.js
// Personal translation script for Intop Simulador page
// Supports: Portuguese (pt), Spanish (es), Kreyol (ht)

(function() {
    'use strict';

    // ---- Translation dictionary ----
    const translations = {
        pt: {
            // Navigation
            "nav.home": "Início",
            "nav.how": "Como Funciona",
            "nav.simulator": "Simulador",
            "nav.benefits": "Vantagens",
            "nav.faq": "Dúvidas Frequentes",
            "nav.download": "Baixar App",

            // Banner
            "banner.title": "Simulador de <span>Recarga Global</span>",
            "banner.subtitle": "Calcule em tempo real as tarifas e valores exatos para qualquer país integrado ao sistema DingConnect.",

            // Simulator
            "simulator.title": "Simule sua Próxima Recarga",
            "simulator.country": "País de Destino",
            "simulator.loading_countries": "Carregando países...",
            "simulator.loading": "Carregando...",
            "simulator.operator": "Selecione a Operadora",
            "simulator.select_country_first": "Selecione um país primeiro",
            "simulator.amount": "Valor da Recarga",
            "simulator.result_label": "Valor estimado que o destinatário receberá",
            "simulator.error": "Não foi possível calcular o valor no momento. Tente novamente.",
            "simulator.download_prompt": "Gostou do valor real? Envie essa recarga agora mesmo pelo nosso aplicativo!",
            "simulator.install_app": "Instalar App Intop",
            "simulator.disclaimer": "*Os valores exibidos são baseados em taxas de câmbio consultadas através do sistema integrado DingConnect.",

            // Footer
            "footer.about": "A forma mais rápida, segura e econômica de enviar recargas de celular para seus amigos e familiares no exterior. Pagamento instantâneo via Pix.",
            "footer.navigation": "Navegação",
            "footer.support": "Suporte e Termos",
            "footer.privacy": "Política de Privacidade",
            "footer.delete": "Exclusão de Conta",
            "footer.copyright": "© 2026 Intop. Todos os direitos reservados. Conectando pessoas através de recargas seguras e automatizadas em nuvem.",
            "footer.privacy_short": "Privacidade",
            "footer.terms_short": "Termos"
        },
        es: {
            // Navigation
            "nav.home": "Inicio",
            "nav.how": "Cómo Funciona",
            "nav.simulator": "Simulador",
            "nav.benefits": "Ventajas",
            "nav.faq": "Preguntas Frecuentes",
            "nav.download": "Descargar App",

            // Banner
            "banner.title": "Simulador de <span>Recarga Global</span>",
            "banner.subtitle": "Calcula en tiempo real las tarifas y valores exactos para cualquier país integrado al sistema DingConnect.",

            // Simulator
            "simulator.title": "Simula tu Próxima Recarga",
            "simulator.country": "País de Destino",
            "simulator.loading_countries": "Cargando países...",
            "simulator.loading": "Cargando...",
            "simulator.operator": "Selecciona la Operadora",
            "simulator.select_country_first": "Selecciona un país primero",
            "simulator.amount": "Valor de la Recarga",
            "simulator.result_label": "Valor estimado que el destinatario recibirá",
            "simulator.error": "No fue posible calcular el valor en este momento. Inténtalo de nuevo.",
            "simulator.download_prompt": "¿Te gustó el valor real? ¡Envía esta recarga ahora mismo desde nuestra aplicación!",
            "simulator.install_app": "Instalar App Intop",
            "simulator.disclaimer": "*Los valores mostrados se basan en tasas de cambio consultadas a través del sistema integrado DingConnect.",

            // Footer
            "footer.about": "La forma más rápida, segura y económica de enviar recargas de celular a tus amigos y familiares en el extranjero. Pago instantáneo vía Pix.",
            "footer.navigation": "Navegación",
            "footer.support": "Soporte y Términos",
            "footer.privacy": "Política de Privacidad",
            "footer.delete": "Eliminación de Cuenta",
            "footer.copyright": "© 2026 Intop. Todos los derechos reservados. Conectando personas a través de recargas seguras y automatizadas en la nube.",
            "footer.privacy_short": "Privacidad",
            "footer.terms_short": "Términos"
        },
        ht: {
            // Navigation
            "nav.home": "Akèy",
            "nav.how": "Kijan li Fonksyone",
            "nav.simulator": "Similatè",
            "nav.benefits": "Avantaj",
            "nav.faq": "Kesyon yo poze souvan",
            "nav.download": "Telechaje App",

            // Banner
            "banner.title": "Similatè <span>Rechaj Global</span>",
            "banner.subtitle": "Kalkile an tan reyèl tarif yo ak valè egzak pou nenpòt peyi entegre nan sistèm DingConnect.",

            // Simulator
            "simulator.title": "Simile Pwochen Rechaj Ou",
            "simulator.country": "Peyi Destinasyon",
            "simulator.loading_countries": "Chaje peyi yo...",
            "simulator.loading": "Chaje...",
            "simulator.operator": "Chwazi Operatè a",
            "simulator.select_country_first": "Chwazi yon peyi anvan",
            "simulator.amount": "Valè Rechaj la",
            "simulator.result_label": "Valè estime moun k ap resevwa a pral resevwa",
            "simulator.error": "Pa t kapab kalkile valè a kounye a. Eseye ankò.",
            "simulator.download_prompt": "Ou renmen valè reyèl la? Voye rechaj sa a kounye a nan aplikasyon nou an!",
            "simulator.install_app": "Enstale App Intop",
            "simulator.disclaimer": "*Valè yo montre yo baze sou to chanje ki konsilte atravè sistèm DingConnect entegre a.",

            // Footer
            "footer.about": "Fason ki pi vit, pi an sekirite ak pi ekonomik pou voye rechaj telefòn bay zanmi ak fanmi ou aletranje. Peman enstantane atravè Pix.",
            "footer.navigation": "Navigasyon",
            "footer.support": "Sipò ak Kondisyon",
            "footer.privacy": "Politik Konfidansyalite",
            "footer.delete": "Efase Kont",
            "footer.copyright": "© 2026 Intop. Tout dwa rezève. Konekte moun atravè rechaj ki an sekirite ak otomatik nan nwaj.",
            "footer.privacy_short": "Konfidansyalite",
            "footer.terms_short": "Kondisyon"
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
