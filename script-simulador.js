// Main JavaScript for Intop Website (Multi-page with Prefix-based Simulator & Translation Support)
// Version 8 - Advanced Phone Prefix auto-detection with Flag display and animated flow control.

document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================================================
    // 1. CONFIGURAÇÃO DA API LIVE
    // =========================================================================
    const API_BASE_URL = 'https://api.intop.com.br'; // API do seu VPS
    const LIVE_MODE = true; // Ativado para usar a API de produção da DingConnect!

    // =========================================================================
    // 2. MOBILE HAMBURGER MENU
    // =========================================================================
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            const isVisible = mobileNav.style.display === 'block';
            mobileNav.style.display = isVisible ? 'none' : 'block';
        });
    }

    // =========================================================================
    // 3. FAQ ACCORDION (duvidas-frequentes.html)
    // =========================================================================
    const faqHeaders = document.querySelectorAll('.faq-header');
    
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            // Fecha todos
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
            });
            
            // Abre o atual se não estava ativo
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // =========================================================================
    // 4. SISTEMA DE TRADUÇÃO MULTILINGUE E DICIONÁRIO
    // =========================================================================
    const translations = {
        pt: {
            title_vantagens: "Intop - Nossas Vantagens",
            title_simulador: "Intop - Simulador de Recargas",
            nav_home: "Início",
            nav_how: "Como Funciona",
            nav_simulator: "Simulador",
            nav_advantages: "Vantagens",
            nav_faq: "Dúvidas Frequentes",
            nav_download: "Baixar App",
            
            // Vantagens
            banner_title: "Por que escolher a <span>Intop</span>?",
            banner_subtitle: "Descubra os principais diferenciais que tornam a nossa plataforma a melhor escolha em recargas internacionais.",
            adv1_title: "Velocidade Instantânea",
            adv1_desc: "Sem esperas. A configuração de pagamento via Pix aciona automaticamente o envio da recarga, que é entregue no exterior em segundos.",
            adv2_title: "Segurança Total",
            adv2_desc: "Suas transações são totalmente protegidas. Trabalhamos em conformidade com as maiores regulamentações de segurança de pagamentos e Pix.",
            adv3_title: "Sem Taxas Ocultas",
            adv3_desc: "Transparência em primeiro lugar. Você visualiza o valor exato que o celular receberá antes de confirmar o pagamento via Pix.",
            adv4_title: "Ampla Cobertura",
            adv4_desc: "Enviamos créditos de telefonia para centenas de operadoras localizadas nas Américas, Europa, Ásia e África através da nossa rede digital.",
            adv5_title: "Histórico no App",
            adv5_desc: "Acompanhe todos os seus comprovantes de forma simples. O aplicativo possui um histórico completo de transações e beneficiários frequentes.",
            adv6_title: "Suporte Dedicado",
            adv6_desc: "Nossa equipe de suporte está sempre pronta para ajudar em caso de dúvidas sobre transações ou configurações.",
            
            // Simulador Dinâmico
            sim_banner_title: "Simulador de <span>Recarga Global</span>",
            sim_banner_subtitle: "Calcule em tempo real as tarifas e valores exatos para qualquer país integrado ao sistema DingConnect.",
            sim_card_title: "Simule sua Próxima Recarga",
            lbl_phone: "Número de Telefone",
            lbl_operator: "Selecione a Operadora",
            lbl_amount: "Valor a Enviar em Reais (BRL)",
            sim_limits_info: "Os limites por recarga são configurados entre R$ 10,00 e R$ 100,00.",
            sim_approx_receive: "O destinatário receberá aproximadamente:",
            sim_download_prompt: "Gostou do valor real? Envie essa recarga agora mesmo pelo nosso aplicativo!",
            btn_install_app: "Instalar App Intop",
            sim_disclaimer: "*Os valores exibidos são baseados em taxas de câmbio em tempo real consultadas diretamente através do sistema integrado DingConnect.",
            
            // Dynamic States
            loading_countries: "Identificando operadoras do país...",
            loading_operators: "Carregando operadoras...",
            select_country_first: "Digite um número de telefone com código de área",
            select_operator_placeholder: "-- Selecione a Operadora --",
            error_loading: "Erro ao sincronizar com o servidor",
            
            // Footer
            footer_desc: "A forma mais rápida, segura e econômica de enviar recargas de celular para seus amigos e familiares no exterior. Pagamento instantâneo via Pix.",
            footer_nav_header: "Navegação",
            footer_support_header: "Suporte e Termos",
            footer_privacy: "Política de Privacidade",
            footer_delete: "Exclusão de Conta",
            footer_copyright: "&copy; 2026 Intop. Todos os direitos reservados. Conectando pessoas através de recargas seguras e automatizadas em nuvem.",
            bottom_privacy: "Privacidade",
            bottom_terms: "Termos"
        },
        es: {
            title_vantagens: "Intop - Nuestras Ventajas",
            title_simulador: "Intop - Simulador de Recargas",
            nav_home: "Inicio",
            nav_how: "Cómo Funciona",
            nav_simulator: "Simulador",
            nav_advantages: "Ventajas",
            nav_faq: "Preguntas Frecuentes",
            nav_download: "Descargar App",
            
            // Ventajas
            banner_title: "¿Por qué elegir <span>Intop</span>?",
            banner_subtitle: "Descubra las principales ventajas que hacen de nuestra plataforma la mejor opción para recargas internacionales.",
            adv1_title: "Velocidad Instantánea",
            adv1_desc: "Sin esperas. La confirmación del pago vía Pix activa automáticamente el envío de la recarga, que se entrega en el extranjero en segundos.",
            adv2_title: "Seguridad Total",
            adv2_desc: "Sus transacciones están completamente protegidas. Trabajamos de conformidad con las principales normas de seguridad para pagos y Pix.",
            adv3_title: "Sin Cargos Ocultos",
            adv3_desc: "Transparencia ante todo. Visualiza el monto exacto que recibirá el teléfono celular antes de confirmar el pago vía Pix.",
            adv4_title: "Amplia Cobertura",
            adv4_desc: "Enviamos saldo telefónico a cientos de operadores en las Américas, Europa, Asia y África a través de nuestra red digital.",
            adv5_title: "Historial en la App",
            adv5_desc: "Siga todos sus recibos de forma sencilla. La aplicación cuenta con un historial completo de transacciones y beneficiarios frecuentes.",
            adv6_title: "Soporte Dedicado",
            adv6_desc: "Nuestro equipo de soporte está siempre listo para ayudar en caso de dudas sobre transacciones o configuraciones.",
            
            // Simulador
            sim_banner_title: "Simulador de <span>Recarga Global</span>",
            sim_banner_subtitle: "Calcule en tiempo real las tarifas y montos exactos para cualquier país integrado en el sistema DingConnect.",
            sim_card_title: "Simule su Próxima Recarga",
            lbl_phone: "Número de Teléfono",
            lbl_operator: "Seleccione el Operador",
            lbl_amount: "Monto a Enviar en Reales (BRL)",
            sim_limits_info: "Los límites de recarga están configurados entre R$ 10,00 y R$ 100,00.",
            sim_approx_receive: "El destinatario recibirá aproximadamente:",
            sim_download_prompt: "¿Le gustó el valor real? ¡Envíe esta recarga ahora mismo a través de nuestra aplicación!",
            btn_install_app: "Instalar Aplicación Intop",
            sim_disclaimer: "*Los montos mostrados están basados en tasas de cambio en tempo real consultadas directamente a través del sistema integrado DingConnect.",
            
            // Dynamic States
            loading_countries: "Identificando operadoras del país...",
            loading_operators: "Cargando operadores...",
            select_country_first: "Ingrese un número de teléfono con código de área",
            select_operator_placeholder: "-- Seleccione el Operador --",
            error_loading: "Error al sincronizar con el servidor",

            // Footer
            footer_desc: "La forma más rápida, segura y económica de enviar recargas de celular a sus amigos y familiares en el extranjero. Pago instantáneo a través de Pix.",
            footer_nav_header: "Navegación",
            footer_support_header: "Soporte y Términos",
            footer_privacy: "Política de Privacidad",
            footer_delete: "Eliminar Cuenta",
            footer_copyright: "&copy; 2026 Intop. Todos os direitos reservados. Conectando pessoas a través de recargas seguras e automatizadas na nuvem.",
            bottom_privacy: "Privacidade",
            bottom_terms: "Términos"
        },
        ht: {
            title_vantagens: "Intop - Avantaj Nou Yo",
            title_simulador: "Intop - Similatè Chajman",
            nav_home: "Akèy",
            nav_how: "Kijan li Fonksyone",
            nav_simulator: "Similatè",
            nav_advantages: "Avantaj",
            nav_faq: "Kesyon moun poze souvan",
            nav_download: "Telechaje App",
            
            // Avantaj
            banner_title: "Poukisa pou w chwazi <span>Intop</span>?",
            banner_subtitle: "Dekouvri gwo diferans ki fè platfòm nou an se pi bon chwa pou voye kredi entènasyonal.",
            adv1_title: "Chajman Enstantane",
            adv1_desc: "Pa gen tann. Konfimasyon peman ak Pix la deklanche otomatikman voye kredi a, ki rive lòt bò dlo nan kèk segonn sèlman.",
            adv2_title: "Sekirite Total",
            adv2_desc: "Tranzaksyon ou yo pwoteje nèt ale. Nou travay ann akò ak pi gwo règleman sekirite peman ak Pix yo.",
            adv3_title: "Pa gen Frè Kache",
            adv3_desc: "Transparans an premye. Ou wè egzakteman konbe lajan telefòn lan pral resevwa anvan ou konfime peman an ak Pix.",
            adv4_title: "Gwo Kouvèti",
            adv4_desc: "Nou voye kredi telefòn pou plizyè santèn operatè nan tout Amerik, Ewòp, Azi ak Afrik atravè rezo dijital nou an.",
            adv5_title: "Istorik nan App a",
            adv5_desc: "Swiv tout resi ou yo fasil. Aplikasyon an gen yon istorik konplè sou tranzaksyon ak moun ou voye kredi souvan yo.",
            adv6_title: "Sipò Devwe",
            adv6_desc: "Ekip sipò nou an toujou pare pou ede w si w gen kesyon sou tranzaksyon oswa konfigirasyon yo.",
            
            // Simulador
            sim_banner_title: "Similatè <span>Chajman Global</span>",
            sim_banner_subtitle: "Kalkile an tan reyèl tarif yo ak valè egzak pou nenpòt peyi ki entegre nan sistèm DingConnect la.",
            sim_card_title: "Simile Pwochen Chajman Ou",
            lbl_phone: "Nimewo Telefòn",
            lbl_operator: "Chwazi Operatè a",
            lbl_amount: "Valè Chajman an an Reais (BRL)",
            sim_limits_info: "Limit yo pou chak chajman se ant R$ 10,00 ak R$ 100,00.",
            sim_approx_receive: "Moun nan ap resevwa apeprè:",
            sim_download_prompt: "Ou renmen valè reyèl la? Voye chajman sa a kounye a fasil ak aplikasyon nou an!",
            btn_install_app: "Enstale App Intop la",
            sim_disclaimer: "*Valè ki afiche yo baze sou pousantaj echanj an tan reyèl ki soti dirèkteman nan sistèm entegre DingConnect la.",
            
            // Dynamic States
            loading_countries: "N ap chèche operatè pou peyi sa...",
            loading_operators: "N ap chaje operatè yo...",
            select_country_first: "Antre yon nimewo telefòn ak tout kòd zòn",
            select_operator_placeholder: "-- Chwazi Operatè a --",
            error_loading: "Erè lè n ap konekte ak sèvè a",

            // Footer
            footer_desc: "Fason ki pi rapid, pi an sekirite ak pi ekonomik pou voye chajman telefòn bay zanmi ak fanmi w lòt bò dlo. Peman enstantane ak Pix.",
            footer_nav_header: "Navigasyon",
            footer_support_header: "Sipò ak Kondisyon yo",
            footer_privacy: "Règleman sou Enfòmasyon Prive",
            footer_delete: "Efase Kont",
            footer_copyright: "&copy; 2026 Intop. Tout dwa rezève. Konekte moun atravè chajman ki an sekirite ak otomatik nan nyaj.",
            bottom_privacy: "Enfòmasyon Prive",
            bottom_terms: "Kondisyon yo"
        }
    };

    // Safe LocalStorage wrapper to prevent crash in secure or file:// environments
    function safeStorageGet(key, fallback) {
        try {
            return localStorage.getItem(key) || fallback;
        } catch (e) {
            return fallback;
        }
    }

    function safeStorageSet(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {
            // Ignore error
        }
    }

    // Safe translation helper that never throws a TypeError
    function t(key) {
        const lang = safeStorageGet('preferredLanguage', 'pt');
        const activeLang = translations[lang] ? lang : 'pt';
        return translations[activeLang][key] || translations['pt'][key] || key;
    }

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translationText = t(key);
            if (element.tagName === 'TITLE') {
                document.title = translationText;
            } else {
                element.innerHTML = translationText;
            }
        });

        // Sincronizar dropdowns de idiomas
        const desktopSelector = document.getElementById('language-selector');
        const mobileSelector = document.getElementById('language-selector-mobile');
        if (desktopSelector) desktopSelector.value = lang;
        if (mobileSelector) mobileSelector.value = lang;
        
        safeStorageSet('preferredLanguage', lang);
    }

    // Eventos de troca de idioma
    const selectDesktop = document.getElementById('language-selector');
    const selectMobile = document.getElementById('language-selector-mobile');

    if (selectDesktop) {
        selectDesktop.addEventListener('change', (e) => updateLanguage(e.target.value));
    }
    if (selectMobile) {
        selectMobile.addEventListener('change', (e) => updateLanguage(e.target.value));
    }

    const savedLang = safeStorageGet('preferredLanguage', 'pt');
    updateLanguage(savedLang);

    // =========================================================================
    // 5. SIMULADOR DINÂMICO DE RECARGAS COM DINGCONNECT
    // =========================================================================
    const phoneInput = document.getElementById('phone-input');
    const countryFlag = document.getElementById('country-flag') || document.getElementById('phone-flag');
    const btnOk = document.getElementById('btn-ok') || document.getElementById('btn-validate-phone');
    const detectedCountryName = document.getElementById('detected-country-name');

    const operatorContainer = document.getElementById('operator-container');
    const operatorSelect = document.getElementById('operator');
    const amountContainer = document.getElementById('amount-container');
    const amountSlider = document.getElementById('amount-slider');
    const amountVal = document.getElementById('amount-val');
    const resultContainer = document.getElementById('result-container');
    const resultVal = document.getElementById('result-val');
    const resultCurrency = document.getElementById('result-currency');
    const appDownloadContainer = document.getElementById('app-download-container');
    
    const countryLoading = document.getElementById('country-loading');
    const operatorLoading = document.getElementById('operator-loading');

    // Se não estivermos na página do simulador, encerra a execução com segurança
    if (!phoneInput) {
        return;
    }

    // Banco de Prefixo de países suportados com bandeiras e dados de fallback
    const countryPrefixes = [
        { prefix: '+55', code: 'BR', name: 'Brasil', currency: 'BRL', rate: 1.0, flag: '🇧🇷', operators: ["Vivo", "Tim", "Claro", "Oi"] },
        { prefix: '+509', code: 'HT', name: 'Haiti', currency: 'HTG', rate: 24.30, flag: '🇭🇹', operators: ["Digicel", "Natcom"] },
        { prefix: '+58', code: 'VE', name: 'Venezuela', currency: 'VES', rate: 5.85, flag: '🇻🇪', operators: ["Digitel", "Movistar", "Movilnet"] },
        { prefix: '+57', code: 'CO', name: 'Colômbia', currency: 'COP', rate: 642.50, flag: '🇨🇴', operators: ["Claro", "Movistar", "Tigo", "Wom"] },
        { prefix: '+1', code: 'US', name: 'Estados Unidos', currency: 'USD', rate: 0.16, flag: '🇺🇸', operators: ["AT&T", "T-Mobile", "Verizon"] },
        { prefix: '+591', code: 'BO', name: 'Bolívia', currency: 'BOB', rate: 1.12, flag: '🇧🇴', operators: ["Entel", "Tigo", "Viva"] },
        { prefix: '+351', code: 'PT', name: 'Portugal', currency: 'EUR', rate: 0.15, flag: '🇵🇹', operators: ["MEO", "NOS", "Vodafone"] },
        { prefix: '+54', code: 'AR', name: 'Argentina', currency: 'ARS', rate: 154.20, flag: '🇦🇷', operators: ["Claro", "Personal", "Movistar"] },
        { prefix: '+56', code: 'CL', name: 'Chile', currency: 'CLP', rate: 148.50, flag: '🇨🇱', operators: ["Entel", "Movistar", "Claro", "WOM"] },
        { prefix: '+33', code: 'FR', name: 'França', currency: 'EUR', rate: 0.15, flag: '🇫🇷', operators: ["Orange", "SFR", "Bouygues", "Free"] },
        { prefix: '+39', code: 'IT', name: 'Itália', currency: 'EUR', rate: 0.15, flag: '🇮🇹', operators: ["TIM", "Vodafone", "WindTre"] },
        { prefix: '+593', code: 'EC', name: 'Equador', currency: 'ECS', rate: 0.16, flag: '🇪🇨', operators: ["Claro", "Movistar", "CNT"] },
        { prefix: '+51', code: 'PE', name: 'Peru', currency: 'PEN', rate: 0.60, flag: '🇵🇪', operators: ["Claro", "Movistar", "Entel", "Bitel"] },
        { prefix: '+52', code: 'MX', name: 'México', currency: 'MXN', rate: 3.12, flag: '🇲🇽', operators: ["Telcel", "Movistar", "AT&T"] }
    ];

    let detectedCountry = null;

    // Formatar e limpar entrada do telefone
    function normalizePhone(val) {
        let clean = val.replace(/[^0-9+]/g, ''); // Remove tudo exceto números e +
        if (clean.startsWith('00')) {
            clean = '+' + clean.substring(2);
        }
        if (clean.length > 0 && !clean.startsWith('+')) {
            clean = '+' + clean;
        }
        return clean;
    }

    // Detectar país com base no prefixo digitado
    function detectCountryFromValue(val) {
        const normalized = normalizePhone(val);
        if (normalized.length < 2) return null;

        // Ordenar os prefixos por tamanho descendente para combinar primeiro o maior (+509 antes de +50)
        const sortedPrefixes = [...countryPrefixes].sort((a, b) => b.prefix.length - a.prefix.length);

        for (const item of sortedPrefixes) {
            if (normalized.startsWith(item.prefix)) {
                return item;
            }
        }
        return null;
    }

    // Escuta a entrada do número de telefone
    phoneInput.addEventListener('input', (e) => {
        // Formata o valor exibido
        const originalVal = phoneInput.value;
        const normalized = normalizePhone(originalVal);
        
        // Se o usuário apagar o '+', mantemos se ele começar a digitar números
        if (originalVal !== normalized && normalized.length > 1) {
            phoneInput.value = normalized;
        }

        const match = detectCountryFromValue(phoneInput.value);

        if (match) {
            detectedCountry = match;
            if (countryFlag) countryFlag.textContent = match.flag;
            if (detectedCountryName) {
                detectedCountryName.textContent = `${match.name} (${match.prefix})`;
                detectedCountryName.style.color = 'var(--accent-green)';
            }
            if (btnOk) btnOk.disabled = false;
        } else {
            detectedCountry = null;
            if (countryFlag) countryFlag.textContent = '🌐';
            if (detectedCountryName) {
                detectedCountryName.textContent = '';
            }
            if (btnOk) btnOk.disabled = true;

            // Oculta blocos seguintes se o país sumir
            if (operatorContainer) operatorContainer.style.display = 'none';
            if (amountContainer) amountContainer.style.display = 'none';
            if (resultContainer) resultContainer.style.display = 'none';
            if (appDownloadContainer) appDownloadContainer.style.display = 'none';
        }
    });

    // Clique no botão OK
    if (btnOk) {
        btnOk.addEventListener('click', async () => {
            if (!detectedCountry) return;

            // Mostrar animação de carregamento circular no campo do país
            if (countryLoading) countryLoading.style.display = 'inline-block';

            // Carrega operadoras
            await loadOperators(detectedCountry.code);

            if (countryLoading) countryLoading.style.display = 'none';

            // Revela os campos subsequentes com animação suave
            if (operatorContainer) {
                operatorContainer.style.display = 'block';
                operatorContainer.style.animation = 'fadeInUp 0.5s ease-out';
            }
            if (amountContainer) {
                amountContainer.style.display = 'block';
                amountContainer.style.animation = 'fadeInUp 0.5s ease-out';
            }
            if (resultContainer) {
                resultContainer.style.display = 'block';
                resultContainer.style.animation = 'fadeInUp 0.5s ease-out';
            }
        });
    }

    // Carregar operadores ao selecionar o país
    async function loadOperators(countryCode) {
        if (!operatorSelect) return;
        operatorSelect.disabled = false;
        if (operatorLoading) operatorLoading.style.display = 'inline-block';

        if (LIVE_MODE) {
            try {
                const response = await fetch(`${API_BASE_URL}/public-simulator/operators?countryCode=${countryCode}`);
                if (!response.ok) throw new Error('API Error');
                const operators = await response.json(); // Array de strings ou objetos
                
                operatorSelect.innerHTML = `<option value="">${t('select_operator_placeholder')}</option>`;
                
                operators.forEach(op => {
                    const opt = document.createElement('option');
                    const opValue = typeof op === 'string' ? op : op.code;
                    const opText = typeof op === 'string' ? op : op.name;
                    opt.value = opValue;
                    opt.textContent = opText;
                    operatorSelect.appendChild(opt);
                });
            } catch (err) {
                console.warn("Erro ao obter operadoras da API, usando dados locais.");
                loadFallbackOperators(countryCode);
            }
        } else {
            loadFallbackOperators(countryCode);
        }

        if (operatorLoading) operatorLoading.style.display = 'none';
        updateSimulation();
    }

    function loadFallbackOperators(countryCode) {
        if (!operatorSelect) return;
        const countryData = countryPrefixes.find(c => c.code === countryCode);
        operatorSelect.innerHTML = `<option value="">${t('select_operator_placeholder')}</option>`;
        
        if (countryData) {
            countryData.operators.forEach(op => {
                const opt = document.createElement('option');
                opt.value = op.toLowerCase();
                opt.textContent = op;
                operatorSelect.appendChild(opt);
            });
        }
    }

    // Atualizar cálculo da simulação em tempo real
    async function updateSimulation() {
        const countryCode = detectedCountry ? detectedCountry.code : null;
        const operatorCode = operatorSelect ? operatorSelect.value : null;
        const valBRL = amountSlider ? parseInt(amountSlider.value) : 50;
        
        if (amountVal) amountVal.textContent = `R$ ${valBRL},00`;

        if (!countryCode) {
            if (resultVal) resultVal.textContent = '---';
            if (resultCurrency) resultCurrency.textContent = '---';
            if (appDownloadContainer) appDownloadContainer.style.display = 'none';
            return;
        }

        if (LIVE_MODE) {
            try {
                const response = await fetch(`${API_BASE_URL}/public-simulator/estimate?countryCode=${countryCode}&amountBrl=${valBRL}&operatorCode=${operatorCode || ''}`);
                if (!response.ok) throw new Error('Estimate API Error');
                const data = await response.json();

                if (data.success) {
                    let formattedAmount;
                    if (data.currency === 'COP') {
                        formattedAmount = Math.round(data.estimatedValue).toLocaleString('pt-BR');
                    } else {
                        formattedAmount = data.estimatedValue.toFixed(2).replace('.', ',');
                    }

                    if (resultVal) resultVal.textContent = formattedAmount;
                    if (resultCurrency) resultCurrency.textContent = data.currency;

                    // Exibir bloco de download do App
                    if (appDownloadContainer) {
                        appDownloadContainer.style.display = 'block';
                    }
                }
            } catch (err) {
                console.warn("Erro na estimativa online. Usando estimativa local.");
                calculateLocalSimulation(countryCode, valBRL);
            }
        } else {
            calculateLocalSimulation(countryCode, valBRL);
        }
    }

    function calculateLocalSimulation(countryCode, valBRL) {
        const countryData = countryPrefixes.find(c => c.code === countryCode);
        if (countryData) {
            const calculatedValue = valBRL * countryData.rate;
            let formattedAmount;
            if (countryData.currency === 'COP') {
                formattedAmount = Math.round(calculatedValue).toLocaleString('pt-BR');
            } else {
                formattedAmount = calculatedValue.toFixed(2).replace('.', ',');
            }

            if (resultVal) resultVal.textContent = formattedAmount;
            if (resultCurrency) resultCurrency.textContent = countryData.currency;

            if (appDownloadContainer) {
                appDownloadContainer.style.display = 'block';
            }
        }
    }

    // Eventos do Simulador
    if (operatorSelect) operatorSelect.addEventListener('change', updateSimulation);
    if (amountSlider) amountSlider.addEventListener('input', updateSimulation);
});