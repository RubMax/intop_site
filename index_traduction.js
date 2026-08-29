// index_traduction.js
// Personal translation script for Intop landing page
// Supports: Portuguese (pt), Spanish (es), Kreyol (ht)

(function() {
    'use strict';

    // ---- Translation dictionary ----
    const translations = {
        pt: {
            "nav.home": "Início",
            "nav.how": "Como Funciona",
            "nav.benefits": "Vantagens",
            "nav.faq": "Dúvidas Frequentes",
            "hero.title": "Envie recargas para celulares em mais de 150 países de forma <span>rápida e segura</span>",
            "hero.subtitle": "Com a Intop, você envia recargas para familiares e amigos em outros países de forma simples e prática. Escolha o país, informe o número, selecione o valor e pague via Pix.",
            "hero.country_operator": "PAÍS E OPERADORA",
            "hero.download_google": "Download no",
            "cta.title": "Pronto para recarregar?",
            "cta.subtitle": "Instale o aplicativo oficial do Intop no seu Android e tenha acesso a recargas automáticas na palma da sua mão.",
            "cta.download_direct": "Download Direto",
            "footer.about": "A forma mais rápida, segura e econômica de enviar recargas de celular para seus amigos e familiares no exterior. Pagamento instantâneo via Pix.",
            "footer.navigation": "Navegação",
            "footer.support": "Suporte e Termos",
            "footer.privacy": "Política de Privacidade",
            "footer.delete": "Exclusão de Conta",
            "footer.copyright": "© 2026 Intop. Todos os direitos reservados. Conectando pessoas através de recargas seguras e automatizadas em nuvem.",
            "footer.terms": "Termos"
        },
        es: {
            "nav.home": "Inicio",
            "nav.how": "Cómo Funciona",
            "nav.benefits": "Ventajas",
            "nav.faq": "Preguntas Frecuentes",
            "hero.title": "Envía recargas para celulares en más de 150 países de forma <span>rápida y segura</span>",
            "hero.subtitle": "Con Intop, envías recargas a familiares y amigos en otros países de forma simple y práctica. Elige el país, ingresa el número, selecciona el valor y paga vía Pix.",
            "hero.country_operator": "PAÍS Y OPERADORA",
            "hero.download_google": "Descargar en",
            "cta.title": "¿Listo para recargar?",
            "cta.subtitle": "Instala la aplicación oficial de Intop en tu Android y ten acceso a recargas automáticas en la palma de tu mano.",
            "cta.download_direct": "Descarga Directa",
            "footer.about": "La forma más rápida, segura y económica de enviar recargas de celular a tus amigos y familiares en el extranjero. Pago instantáneo vía Pix.",
            "footer.navigation": "Navegación",
            "footer.support": "Soporte y Términos",
            "footer.privacy": "Política de Privacidad",
            "footer.delete": "Eliminación de Cuenta",
            "footer.copyright": "© 2026 Intop. Todos los derechos reservados. Conectando personas a través de recargas seguras y automatizadas en la nube.",
            "footer.terms": "Términos"
        },
        ht: {
            "nav.home": "Akèy",
            "nav.how": "Kijan li Fonksyone",
            "nav.benefits": "Avantaj",
            "nav.faq": "Kesyon yo poze souvan",
            "hero.title": "Voye rechaj pou telefòn nan plis pase 150 peyi yon fason <span>vit ak an sekirite</span>",
            "hero.subtitle": "Avèk Intop, ou voye rechaj bay fanmi ak zanmi nan lòt peyi yon fason senp ak pratik. Chwazi peyi a, antre nimewo a, chwazi montan an epi peye atravè Pix.",
            "hero.country_operator": "PEYI AK OPERATÈ",
            "hero.download_google": "Telechaje sou",
            "cta.title": "Èske w pare pou rechaje?",
            "cta.subtitle": "Enstale aplikasyon ofisyèl Intop sou Android ou epi w ap gen aksè a rechaj otomatik nan men ou.",
            "cta.download_direct": "Telechajman Dirèk",
            "footer.about": "Fason ki pi vit, pi an sekirite ak pi ekonomik pou voye rechaj telefòn bay zanmi ak fanmi ou aletranje. Peman enstantane atravè Pix.",
            "footer.navigation": "Navigasyon",
            "footer.support": "Sipò ak Kondisyon",
            "footer.privacy": "Politik Konfidansyalite",
            "footer.delete": "Efase Kont",
            "footer.copyright": "© 2026 Intop. Tout dwa rezève. Konekte moun atravè rechaj ki an sekirite ak otomatik nan nwaj.",
            "footer.terms": "Kondisyon"
        }
    };

    // ---- DOM elements ----
    const langButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-i18n]');

    // ---- Helper functions ----
    function getCurrentLang() {
        return document.documentElement.lang || 'pt';
    }

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
                // Check if element contains HTML (like the hero title with <span>)
                if (key === 'hero.title' && el.querySelector('span')) {
                    // Preserve inner span structure: we need to replace only the text nodes.
                    // Simple approach: use innerHTML if the translation contains HTML.
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
    }

    // Wait for DOM fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();