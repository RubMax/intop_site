// como-funciona_traduction.js
// Personal translation script for Intop Como Funciona page
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
            "banner.title": "Como <span>Funciona</span>",
            "banner.subtitle": "Entenda o passo a passo simples e prático para realizar recargas rápidas em nosso aplicativo.",

            // Steps
            "steps.title": "Processo de Envio em 4 Passos",
            "step.1.title": "Cadastre-se no aplicativo",
            "step.1.desc": "1. Baixe e instale o aplicativo pela Google Play Store.\n2. Abra o aplicativo e clique em \"Não tem uma conta? Cadastre-se\".\n3. Preencha seus dados e clique no botão \"Cadastrar\" para criar sua conta.",
            "step.2.title": "Faça uma recarga",
            "step.2.desc": "1. Clique no botão \"Iniciar Recarga\".\n2. Selecione o país de destino.\n3. Selecione a operadora de telefonia.\n4. Informe o DDD e o número do telefone.\n5. Informe o valor da recarga.\n6. Confira o valor que será recebido pelo destinatário.",
            "step.3.title": "Pague com Pix",
            "step.3.desc": "Efetue o pagamento de forma rápida utilizando o Pix Copia e Cola ou escaneando o QR Code apresentado na tela.",
            "step.4.title": "Recarga Concluída",
            "step.4.desc": "Assim que o pagamento for confirmado, nosso processamento automático em nuvem envia a recarga instantaneamente ao telefone de destino.",

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
            "banner.title": "Cómo <span>Funciona</span>",
            "banner.subtitle": "Entiende el paso a paso simple y práctico para realizar recargas rápidas en nuestra aplicación.",

            // Steps
            "steps.title": "Proceso de Envío en 4 Pasos",
            "step.1.title": "Regístrate en la aplicación",
            "step.1.desc": "1. Descarga e instala la aplicación desde Google Play Store.\n2. Abre la aplicación y haz clic en \"¿No tienes una cuenta? Regístrate\".\n3. Completa tus datos y haz clic en \"Registrar\" para crear tu cuenta.",
            "step.2.title": "Haz una recarga",
            "step.2.desc": "1. Haz clic en el botón \"Iniciar Recarga\".\n2. Selecciona el país de destino.\n3. Selecciona la operadora de telefonía.\n4. Ingresa el código de área y el número de teléfono.\n5. Ingresa el monto de la recarga.\n6. Confirma el valor que recibirá el destinatario.",
            "step.3.title": "Paga con Pix",
            "step.3.desc": "Realiza el pago de forma rápida utilizando Pix Copia y Pega o escaneando el código QR que se muestra en la pantalla.",
            "step.4.title": "Recarga Completada",
            "step.4.desc": "Tan pronto como se confirme el pago, nuestro procesamiento automático en la nube envía la recarga instantáneamente al teléfono de destino.",

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
            "banner.title": "Kijan li <span>Fonksyone</span>",
            "banner.subtitle": "Konprann etap pa etap senp ak pratik pou fè rechaj vit nan aplikasyon nou an.",

            // Steps
            "steps.title": "Pwosesis Voye an 4 Etap",
            "step.1.title": "Enskri ou nan aplikasyon an",
            "step.1.desc": "1. Telechaje epi enstale aplikasyon an nan Google Play Store.\n2. Louvri aplikasyon an epi klike sou \"Pa gen kont? Enskri ou\".\n3. Ranpli enfòmasyon ou yo epi klike sou bouton \"Enskri\" pou kreye kont ou.",
            "step.2.title": "Fè yon rechaj",
            "step.2.desc": "1. Klike sou bouton \"Kòmanse Rechaj\".\n2. Chwazi peyi destinasyon an.\n3. Chwazi operatè telefoni an.\n4. Antre kòd zòn nan ak nimewo telefòn nan.\n5. Antre montan rechaj la.\n6. Tcheke valè a ki pral resevwa pa moun ki resevwa a.",
            "step.3.title": "Peye ak Pix",
            "step.3.desc": "Fè peman an yon fason vit lè w itilize Pix Kopye ak Kole oswa lè w eskanè QR Kòd ki parèt sou ekran an.",
            "step.4.title": "Rechaj Konplete",
            "step.4.desc": "Le pli vit ke peman an konfime, pwosesis otomatik nou an nan nwaj voye rechaj la enstantane nan telefòn destinasyon an.",

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
                if ((key === 'banner.title' || key === 'step.2.title') && el.querySelector('span, strong')) {
                    el.innerHTML = dict[key];
                } else {
                    // For step descriptions with line breaks, preserve <br> tags
                    if (key === 'step.1.desc' || key === 'step.2.desc') {
                        el.innerHTML = dict[key].replace(/\n/g, '<br>');
                    } else {
                        el.textContent = dict[key];
                    }
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
