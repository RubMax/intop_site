// Main JavaScript for Intop Website (Multi-page)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            const isVisible = mobileNav.style.display === 'block';
            mobileNav.style.display = isVisible ? 'none' : 'block';
        });
    }

    // 2. FAQ Accordion Functionality (for duvidas-frequentes.html)
    const faqHeaders = document.querySelectorAll('.faq-header');
    
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
            });
            
            // Toggle active state for current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 3. Interactive Recharge Simulator (for simulador.html)
    const countrySelect = document.getElementById('country');
    const amountSlider = document.getElementById('amount-slider');
    const amountVal = document.getElementById('amount-val');
    const resultVal = document.getElementById('result-val');
    const resultCurrency = document.getElementById('result-currency');

    // Exchange rates simulator (Fictional for illustration but professional and whitelabeled)
    // Using realistic currency conversions from BRL (Reais)
    const rates = {
        'USA': { symbol: 'USD', rate: 0.16 },       // US Dollar
        'PRT': { symbol: 'EUR', rate: 0.15 },       // Euro (Portugal)
        'BOL': { symbol: 'BOB', rate: 1.12 },       // Boliviano
        'COL': { symbol: 'COP', rate: 642.50 },     // Colombian Peso
        'VEN': { symbol: 'VES', rate: 5.85 }        // Venezuelan Bolívar
    };

    function updateSimulation() {
        if (!countrySelect || !amountSlider || !amountVal || !resultVal || !resultCurrency) return;

        const val = parseInt(amountSlider.value);
        amountVal.textContent = `R$ ${val},00`;

        const selectedCountry = countrySelect.value;
        const currencyInfo = rates[selectedCountry];

        if (currencyInfo) {
            // Calculate simulated credits with realistic estimation
            const resultAmount = val * currencyInfo.rate;
            
            // Format number representation
            let formattedAmount;
            if (currencyInfo.symbol === 'COP') {
                formattedAmount = Math.round(resultAmount).toLocaleString('pt-BR');
            } else {
                formattedAmount = resultAmount.toFixed(2).replace('.', ',');
            }

            resultVal.textContent = formattedAmount;
            resultCurrency.textContent = currencyInfo.symbol;
        }
    }

    if (amountSlider) {
        amountSlider.addEventListener('input', updateSimulation);
    }
    if (countrySelect) {
        countrySelect.addEventListener('change', updateSimulation);
    }

    // Initial run
    updateSimulation();
});



// Main JavaScript for Intop Website (Multi-page with Dynamic Simulator & Translation Support)

document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================================================
    // 1. CONFIGURAÇÃO DA API LIVE
    // =========================================================================
    const API_BASE_URL = 'https://api.intop.com.br'; // API do seu VPS
    const LIVE_MODE = true; // Mude para true quando implantar as novas rotas no NestJS!

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
            adv1_desc: "Sem esperas. A confirmação de pagamento via Pix aciona automaticamente o envio da recarga, que é entregue no exterior em segundos.",
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
            lbl_country: "País de Destino",
            lbl_operator: "Selecione a Operadora",
            lbl_amount: "Valor a Enviar em Reais (BRL)",
            sim_limits_info: "Os limites por recarga são configurados entre R$ 10,00 e R$ 100,00.",
            sim_approx_receive: "O destinatário receberá aproximadamente:",
            sim_download_prompt: "Gostou do valor real? Envie essa recarga agora mesmo pelo nosso aplicativo!",
            btn_install_app: "Instalar App Intop",
            sim_disclaimer: "*Os valores exibidos são baseados em taxas de câmbio em tempo real consultadas diretamente através do sistema integrado DingConnect.",
            
            // Dynamic States
            loading_countries: "Carregando todos os países do sistema...",
            loading_operators: "Carregando operadoras...",
            select_country_first: "Selecione um país primeiro",
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
            lbl_country: "País de Destino",
            lbl_operator: "Seleccione el Operador",
            lbl_amount: "Monto a Enviar en Reales (BRL)",
            sim_limits_info: "Los límites de recarga están configurados entre R$ 10,00 y R$ 100,00.",
            sim_approx_receive: "El destinatario recibirá aproximadamente:",
            sim_download_prompt: "¿Le gustó el valor real? ¡Envíe esta recarga ahora mismo a través de nuestra aplicación!",
            btn_install_app: "Instalar Aplicación Intop",
            sim_disclaimer: "*Los montos mostrados están basados en tasas de cambio en tiempo real consultadas directamente a través del sistema integrado DingConnect.",
            
            // Dynamic States
            loading_countries: "Cargando todos los países del sistema...",
            loading_operators: "Cargando operadores...",
            select_country_first: "Seleccione un país primero",
            select_operator_placeholder: "-- Seleccione el Operador --",
            error_loading: "Error al sincronizar con el servidor",

            // Footer
            footer_desc: "La forma más rápida, segura y económica de enviar recargas de celular a sus amigos y familiares en el extranjero. Pago instantáneo a través de Pix.",
            footer_nav_header: "Navegación",
            footer_support_header: "Soporte y Términos",
            footer_privacy: "Política de Privacidad",
            footer_delete: "Eliminar Cuenta",
            footer_copyright: "&copy; 2026 Intop. Todos los derechos reservados. Conectando personas a través de recargas seguras y automatizadas en la nube.",
            bottom_privacy: "Privacidad",
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
            lbl_country: "Peyi Destinatè a",
            lbl_operator: "Chwazi Operatè a",
            lbl_amount: "Valè Chajman an an Reais (BRL)",
            sim_limits_info: "Limit yo pou chak chajman se ant R$ 10,00 ak R$ 100,00.",
            sim_approx_receive: "Moun nan ap resevwa apeprè:",
            sim_download_prompt: "Ou renmen valè reyèl la? Voye chajman sa a kounye a fasil ak aplikasyon nou an!",
            btn_install_app: "Enstale App Intop la",
            sim_disclaimer: "*Valè ki afiche yo baze sou pousantaj echanj an tan reyèl ki soti dirèkteman nan sistèm entegre DingConnect la.",
            
            // Dynamic States
            loading_countries: "N ap chaje tout peyi nan sistèm nan...",
            loading_operators: "N ap chaje operatè yo...",
            select_country_first: "Chwazi yon peyi an premye",
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

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // Sincronizar dropdowns de idiomas
        const desktopSelector = document.getElementById('language-selector');
        const mobileSelector = document.getElementById('language-selector-mobile');
        if (desktopSelector) desktopSelector.value = lang;
        if (mobileSelector) mobileSelector.value = lang;
        
        localStorage.setItem('preferredLanguage', lang);
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

    const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
    updateLanguage(savedLang);

    // =========================================================================
    // 5. SIMULADOR DINÂMICO DE RECARGAS COM DINGCONNECT
    // =========================================================================
    const countrySelect = document.getElementById('country');
    const operatorSelect = document.getElementById('operator');
    const amountSlider = document.getElementById('amount-slider');
    const amountVal = document.getElementById('amount-val');
    const resultVal = document.getElementById('result-val');
    const resultCurrency = document.getElementById('result-currency');
    const appDownloadContainer = document.getElementById('app-download-container');
    
    const countryLoading = document.getElementById('country-loading');
    const operatorLoading = document.getElementById('operator-loading');

    // Lista de fallback com taxas para garantir funcionamento instantâneo sem API
    const fallbackCountries = [
        { code: "HT", name: "Haiti", currency: "HTG", rate: 24.30, operators: ["Digicel", "Natcom"] },
        { code: "VE", name: "Venezuela", currency: "VES", rate: 5.85, operators: ["Digitel", "Movistar", "Movilnet"] },
        { code: "CO", name: "Colômbia", currency: "COP", rate: 642.50, operators: ["Claro", "Movistar", "Tigo", "Wom"] },
        { code: "US", name: "Estados Unidos", currency: "USD", rate: 0.16, operators: ["AT&T", "T-Mobile", "Verizon"] },
        { code: "BO", name: "Bolívia", currency: "BOB", rate: 1.12, operators: ["Entel", "Tigo", "Viva"] },
        { code: "PT", name: "Portugal", currency: "EUR", rate: 0.15, operators: ["MEO", "NOS", "Vodafone"] },
        { code: "AR", name: "Argentina", currency: "ARS", rate: 154.20, operators: ["Claro", "Personal", "Movistar"] },
        { code: "CL", name: "Chile", currency: "CLP", rate: 148.50, operators: ["Entel", "Movistar", "Claro", "WOM"] },
        { code: "FR", name: "França", currency: "EUR", rate: 0.15, operators: ["Orange", "SFR", "Bouygues", "Free"] },
        { code: "IT", name: "Itália", currency: "EUR", rate: 0.15, operators: ["TIM", "Vodafone", "WindTre"] }
    ];

    // Carregar países dinamicamente
    async function loadCountries() {
        if (countryLoading) countryLoading.style.display = 'inline-block';
        
        if (LIVE_MODE) {
            try {
                const response = await fetch(`${API_BASE_URL}/public-simulator/countries`);
                if (!response.ok) throw new Error('API Error');
                const countries = await response.json(); // Array de { code: "HT", name: "Haiti" }
                
                countrySelect.innerHTML = '';
                const placeholder = document.createElement('option');
                placeholder.value = '';
                placeholder.textContent = translations[localStorage.getItem('preferredLanguage') || 'pt'].select_country_first;
                countrySelect.appendChild(placeholder);

                countries.forEach(c => {
                    const opt = document.createElement('option');
                    opt.value = c.code;
                    opt.textContent = c.name;
                    countrySelect.appendChild(opt);
                });
            } catch (err) {
                console.warn("Falha ao consultar API do servidor. Ativando Modo de Segurança local.", err);
                loadFallbackCountries();
            }
        } else {
            loadFallbackCountries();
        }
        
        if (countryLoading) countryLoading.style.display = 'none';
    }

    function loadFallbackCountries() {
        countrySelect.innerHTML = '';
        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = translations[localStorage.getItem('preferredLanguage') || 'pt'].select_country_first;
        countrySelect.appendChild(placeholder);

        fallbackCountries.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.code;
            opt.textContent = `${c.name} (${c.currency})`;
            countrySelect.appendChild(opt);
        });
    }

    // Carregar operadores ao selecionar o país
    async function handleCountryChange() {
        const countryCode = countrySelect.value;
        if (!countryCode) {
            operatorSelect.innerHTML = `<option value="">${translations[localStorage.getItem('preferredLanguage') || 'pt'].select_country_first}</option>`;
            operatorSelect.disabled = true;
            return;
        }

        operatorSelect.disabled = false;
        if (operatorLoading) operatorLoading.style.display = 'inline-block';

        if (LIVE_MODE) {
            try {
                const response = await fetch(`${API_BASE_URL}/public-simulator/operators?countryCode=${countryCode}`);
                if (!response.ok) throw new Error('API Error');
                const operators = await response.json(); // Array de strings ou objetos { code: "...", name: "..." }
                
                operatorSelect.innerHTML = `<option value="">${translations[localStorage.getItem('preferredLanguage') || 'pt'].select_operator_placeholder}</option>`;
                
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
        const countryData = fallbackCountries.find(c => c.code === countryCode);
        operatorSelect.innerHTML = `<option value="">${translations[localStorage.getItem('preferredLanguage') || 'pt'].select_operator_placeholder}</option>`;
        
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
        const countryCode = countrySelect.value;
        const operatorCode = operatorSelect.value;
        const valBRL = parseInt(amountSlider.value);
        
        amountVal.textContent = `R$ ${valBRL},00`;

        if (!countryCode) {
            resultVal.textContent = '---';
            resultCurrency.textContent = '---';
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

                    resultVal.textContent = formattedAmount;
                    resultCurrency.textContent = data.currency;

                    // Exibir bloco de download
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
        const countryData = fallbackCountries.find(c => c.code === countryCode);
        if (countryData) {
            const calculatedValue = valBRL * countryData.rate;
            let formattedAmount;
            if (countryData.currency === 'COP') {
                formattedAmount = Math.round(calculatedValue).toLocaleString('pt-BR');
            } else {
                formattedAmount = calculatedValue.toFixed(2).replace('.', ',');
            }

            resultVal.textContent = formattedAmount;
            resultCurrency.textContent = countryData.currency;

            if (appDownloadContainer) {
                appDownloadContainer.style.display = 'block';
            }
        }
    }

    // Eventos do Simulador
    if (countrySelect) countrySelect.addEventListener('change', handleCountryChange);
    if (operatorSelect) operatorSelect.addEventListener('change', updateSimulation);
    if (amountSlider) amountSlider.addEventListener('input', updateSimulation);

    // Inicialização
    loadCountries();
});

