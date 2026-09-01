// ============================================================================
// INTOP - SCRIPT PRINCIPAL DU SITE + SIMULATEUR DYNAMIQUE
// Version : 2026
// API : https://api.intop.com.br
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. CONFIGURATION
    // =========================================================================

    const API_BASE_URL = 'https://api.intop.com.br';

    // =========================================================================
    // 2. MENU MOBILE
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
    // 3. FAQ ACCORDION
    // =========================================================================

    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {

            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // =========================================================================
    // 4. TRADUÇÕES
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

            banner_title: "Por que escolher a <span>Intop</span>?",
            banner_subtitle:
                "Descubra os principais diferenciais que tornam a nossa plataforma a melhor escolha em recargas internacionais.",

            adv1_title: "Velocidade Instantânea",
            adv1_desc:
                "Sem esperas. A confirmação de pagamento via Pix aciona automaticamente o envio da recarga, que é entregue no exterior em segundos.",

            adv2_title: "Segurança Total",
            adv2_desc:
                "Suas transações são totalmente protegidas. Trabalhamos em conformidade com as maiores regulamentações de segurança de pagamentos e Pix.",

            adv3_title: "Sem Taxas Ocultas",
            adv3_desc:
                "Transparência em primeiro lugar. Você visualiza o valor exato que o celular receberá antes de confirmar o pagamento via Pix.",

            adv4_title: "Ampla Cobertura",
            adv4_desc:
                "Enviamos créditos de telefonia para centenas de operadoras localizadas nas Américas, Europa, Ásia e África através da nossa rede digital.",

            adv5_title: "Histórico no App",
            adv5_desc:
                "Acompanhe todos os seus comprovantes de forma simples. O aplicativo possui um histórico completo de transações e beneficiários frequentes.",

            adv6_title: "Suporte Dedicado",
            adv6_desc:
                "Nossa equipe de suporte está sempre pronta para ajudar em caso de dúvidas sobre transações ou configurações.",

            sim_banner_title: "Simulador de <span>Recarga Global</span>",
            sim_banner_subtitle:
                "Calcule em tempo real as tarifas e valores exatos para qualquer país integrado ao sistema DingConnect.",

            sim_card_title: "Simule sua Próxima Recarga",

            lbl_country: "País de Destino",
            lbl_operator: "Selecione a Operadora",
            lbl_amount: "Valor a Enviar em Reais (BRL)",

            sim_limits_info:
                "Os limites por recarga são configurados entre R$ 10,00 e R$ 100,00.",

            sim_approx_receive:
                "O destinatário receberá aproximadamente:",

            sim_download_prompt:
                "Gostou do valor real? Envie essa recarga agora mesmo pelo nosso aplicativo!",

            btn_install_app: "Instalar App Intop",

            sim_disclaimer:
                "*Os valores exibidos são baseados em taxas de câmbio em tempo real consultadas diretamente através do sistema integrado DingConnect.",

            loading_countries:
                "Carregando países disponíveis...",

            loading_operators:
                "Carregando operadoras...",

            select_country_first:
                "-- Selecione um país --",

            select_operator_placeholder:
                "-- Selecione a Operadora --",

            error_loading:
                "Não foi possível carregar os países.",

            error_operators:
                "Não foi possível carregar as operadoras.",

            error_estimate:
                "Não foi possível calcular a estimativa.",

            footer_desc:
                "A forma mais rápida, segura e econômica de enviar recargas de celular para seus amigos e familiares no exterior. Pagamento instantâneo via Pix.",

            footer_nav_header: "Navegação",
            footer_support_header: "Suporte e Termos",
            footer_privacy: "Política de Privacidade",
            footer_delete: "Exclusão de Conta",

            footer_copyright:
                "&copy; 2026 Intop. Todos os direitos reservados. Conectando pessoas através de recargas seguras e automatizadas em nuvem.",

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

            banner_title: "¿Por qué elegir <span>Intop</span>?",
            banner_subtitle:
                "Descubra las principales ventajas que hacen de nuestra plataforma la mejor opción para recargas internacionales.",

            adv1_title: "Velocidad Instantánea",
            adv1_desc:
                "Sin esperas. La confirmación del pago vía Pix activa automáticamente el envío de la recarga, que se entrega en el extranjero en segundos.",

            adv2_title: "Seguridad Total",
            adv2_desc:
                "Sus transacciones están completamente protegidas. Trabajamos de conformidad con las principales normas de seguridad para pagos y Pix.",

            adv3_title: "Sin Cargos Ocultos",
            adv3_desc:
                "Transparencia ante todo. Visualiza el monto exacto que recibirá el teléfono celular antes de confirmar el pago vía Pix.",

            adv4_title: "Amplia Cobertura",
            adv4_desc:
                "Enviamos saldo telefónico a cientos de operadores en las Américas, Europa, Asia y África a través de nuestra red digital.",

            adv5_title: "Historial en la App",
            adv5_desc:
                "Siga todos sus recibos de forma sencilla. La aplicación cuenta con un historial completo de transacciones y beneficiarios frecuentes.",

            adv6_title: "Soporte Dedicado",
            adv6_desc:
                "Nuestro equipo de soporte está siempre listo para ayudar en caso de dudas sobre transacciones o configuraciones.",

            sim_banner_title: "Simulador de <span>Recarga Global</span>",
            sim_banner_subtitle:
                "Calcule en tiempo real las tarifas y montos exactos para cualquier país integrado en el sistema DingConnect.",

            sim_card_title: "Simule su Próxima Recarga",

            lbl_country: "País de Destino",
            lbl_operator: "Seleccione el Operador",
            lbl_amount: "Monto a Enviar en Reales (BRL)",

            sim_limits_info:
                "Los límites de recarga están configurados entre R$ 10,00 y R$ 100,00.",

            sim_approx_receive:
                "El destinatario recibirá aproximadamente:",

            sim_download_prompt:
                "¿Le gustó el valor real? ¡Envíe esta recarga ahora mismo a través de nuestra aplicación!",

            btn_install_app: "Instalar Aplicación Intop",

            sim_disclaimer:
                "*Los montos mostrados están basados en tasas de cambio en tiempo real consultadas directamente a través del sistema integrado DingConnect.",

            loading_countries:
                "Cargando países disponibles...",

            loading_operators:
                "Cargando operadores...",

            select_country_first:
                "-- Seleccione un país --",

            select_operator_placeholder:
                "-- Seleccione el Operador --",

            error_loading:
                "No fue posible cargar los países.",

            error_operators:
                "No fue posible cargar los operadores.",

            error_estimate:
                "No fue posible calcular la estimación.",

            footer_desc:
                "La forma más rápida, segura y económica de enviar recargas de celular a sus amigos y familiares en el extranjero. Pago instantáneo a través de Pix.",

            footer_nav_header: "Navegación",
            footer_support_header: "Soporte y Términos",
            footer_privacy: "Política de Privacidad",
            footer_delete: "Eliminar Cuenta",

            footer_copyright:
                "&copy; 2026 Intop. Todos los derechos reservados. Conectando personas a través de recargas seguras y automatizadas en la nube.",

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

            banner_title: "Poukisa pou w chwazi <span>Intop</span>?",
            banner_subtitle:
                "Dekouvri gwo diferans ki fè platfòm nou an se pi bon chwa pou voye kredi entènasyonal.",

            adv1_title: "Chajman Enstantane",
            adv1_desc:
                "Pa gen tann. Konfimasyon peman ak Pix la deklanche otomatikman voye kredi a, ki rive lòt bò dlo nan kèk segonn sèlman.",

            adv2_title: "Sekirite Total",
            adv2_desc:
                "Tranzaksyon ou yo pwoteje nèt ale. Nou travay ann akò ak pi gwo règleman sekirite peman ak Pix yo.",

            adv3_title: "Pa gen Frè Kache",
            adv3_desc:
                "Transparans an premye. Ou wè egzakteman konbe lajan telefòn lan pral resevwa anvan ou konfime peman an ak Pix.",

            adv4_title: "Gwo Kouvèti",
            adv4_desc:
                "Nou voye kredi telefòn pou plizyè santèn operatè nan tout Amerik, Ewòp, Azi ak Afrik atravè rezo dijital nou an.",

            adv5_title: "Istorik nan App a",
            adv5_desc:
                "Swiv tout resi ou yo fasil. Aplikasyon an gen yon istorik konplè sou tranzaksyon ak moun ou voye kredi souvan yo.",

            adv6_title: "Sipò Devwe",
            adv6_desc:
                "Ekip sipò nou an toujou pare pou ede w si w gen kesyon sou tranzaksyon oswa konfigirasyon yo.",

            sim_banner_title: "Similatè <span>Chajman Global</span>",
            sim_banner_subtitle:
                "Kalkile an tan reyèl tarif yo ak valè egzak pou nenpòt peyi ki entegre nan sistèm DingConnect la.",

            sim_card_title: "Simile Pwochen Chajman Ou",

            lbl_country: "Peyi Destinatè a",
            lbl_operator: "Chwazi Operatè a",
            lbl_amount: "Valè Chajman an an Reais (BRL)",

            sim_limits_info:
                "Limit yo pou chak chajman se ant R$ 10,00 ak R$ 100,00.",

            sim_approx_receive:
                "Moun nan ap resevwa apeprè:",

            sim_download_prompt:
                "Ou renmen valè reyèl la? Voye chajman sa a kounye a fasil ak aplikasyon nou an!",

            btn_install_app: "Enstale App Intop la",

            sim_disclaimer:
                "*Valè ki afiche yo baze sou pousantaj echanj an tan reyèl ki soti dirèkteman nan sistèm entegre DingConnect la.",

            loading_countries:
                "N ap chaje peyi ki disponib yo...",

            loading_operators:
                "N ap chaje operatè yo...",

            select_country_first:
                "-- Chwazi yon peyi --",

            select_operator_placeholder:
                "-- Chwazi Operatè a --",

            error_loading:
                "Nou pa kapab chaje peyi yo.",

            error_operators:
                "Nou pa kapab chaje operatè yo.",

            error_estimate:
                "Nou pa kapab kalkile estimasyon an.",

            footer_desc:
                "Fason ki pi rapid, pi an sekirite ak pi ekonomik pou voye chajman telefòn bay zanmi ak fanmi w lòt bò dlo. Peman enstantane ak Pix.",

            footer_nav_header: "Navigasyon",
            footer_support_header: "Sipò ak Kondisyon yo",
            footer_privacy: "Règleman sou Enfòmasyon Prive",
            footer_delete: "Efase Kont",

            footer_copyright:
                "&copy; 2026 Intop. Tout dwa rezève. Konekte moun atravè chajman ki an sekirite ak otomatik nan nyaj.",

            bottom_privacy: "Enfòmasyon Prive",
            bottom_terms: "Kondisyon yo"
        }
    };

    // =========================================================================
    // 5. SISTEMA DE IDIOMA
    // =========================================================================

    function getCurrentLanguage() {
        return localStorage.getItem('preferredLanguage') || 'pt';
    }

    function updateLanguage(lang) {

        if (!translations[lang]) {
            lang = 'pt';
        }

        document.querySelectorAll('[data-i18n]').forEach(element => {

            const key = element.getAttribute('data-i18n');

            if (!translations[lang][key]) {
                return;
            }

            if (element.tagName === 'TITLE') {
                document.title = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        });

        const desktopSelector =
            document.getElementById('language-selector');

        const mobileSelector =
            document.getElementById('language-selector-mobile');

        if (desktopSelector) {
            desktopSelector.value = lang;
        }

        if (mobileSelector) {
            mobileSelector.value = lang;
        }

        localStorage.setItem('preferredLanguage', lang);

        // Atualizar placeholders do simulador após trocar idioma
        updateSimulatorPlaceholders();
    }

    const selectDesktop =
        document.getElementById('language-selector');

    const selectMobile =
        document.getElementById('language-selector-mobile');

    if (selectDesktop) {
        selectDesktop.addEventListener('change', event => {
            updateLanguage(event.target.value);
        });
    }

    if (selectMobile) {
        selectMobile.addEventListener('change', event => {
            updateLanguage(event.target.value);
        });
    }

    // =========================================================================
    // 6. ELEMENTOS DO SIMULADOR
    // =========================================================================

    const countrySelect =
        document.getElementById('country');

    const operatorSelect =
        document.getElementById('operator');

    const amountSlider =
        document.getElementById('amount-slider');

    const amountVal =
        document.getElementById('amount-val');

    const resultVal =
        document.getElementById('result-val');

    const resultCurrency =
        document.getElementById('result-currency');

    const appDownloadContainer =
        document.getElementById('app-download-container');

    const countryLoading =
        document.getElementById('country-loading');

    const operatorLoading =
        document.getElementById('operator-loading');

    // =========================================================================
    // 7. HELPERS
    // =========================================================================

    function updateSimulatorPlaceholders() {

        const lang = getCurrentLanguage();

        if (!countrySelect || !countrySelect.disabled) {
            // Não alterar opções existentes desnecessariamente
        }

        if (
            operatorSelect &&
            operatorSelect.disabled &&
            operatorSelect.options.length <= 1
        ) {
            operatorSelect.innerHTML = '';

            const option = document.createElement('option');

            option.value = '';
            option.textContent =
                translations[lang].select_country_first;

            operatorSelect.appendChild(option);
        }
    }

    function setLoading(element, visible) {

        if (!element) {
            return;
        }

        element.style.display =
            visible ? 'inline-block' : 'none';
    }

    function clearResult() {

        if (resultVal) {
            resultVal.textContent = '---';
        }

        if (resultCurrency) {
            resultCurrency.textContent = '---';
        }

        if (appDownloadContainer) {
            appDownloadContainer.style.display = 'none';
        }
    }

    // =========================================================================
    // 8. CARREGAR PAÍSES - SOMENTE API
    // =========================================================================

    async function loadCountries() {

        if (!countrySelect) {
            return;
        }

        const lang = getCurrentLanguage();

        countrySelect.disabled = true;

        countrySelect.innerHTML = '';

        const loadingOption =
            document.createElement('option');

        loadingOption.value = '';
        loadingOption.textContent =
            translations[lang].loading_countries;

        countrySelect.appendChild(loadingOption);

        setLoading(countryLoading, true);

        try {

            console.log(
                '[INTOP] Carregando países:',
                `${API_BASE_URL}/public-simulator/countries`
            );

            const response = await fetch(
                `${API_BASE_URL}/public-simulator/countries`,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    },
                    credentials: 'include'
                }
            );

            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status}`
                );
            }

            const data = await response.json();

            console.log(
                '[INTOP] Países recebidos:',
                data
            );

            // Seu backend retorna diretamente:
            // [
            //   { code: "HT", name: "Haiti" },
            //   ...
            // ]

            let countries = [];

            if (Array.isArray(data)) {

                countries = data;

            } else if (
                data &&
                Array.isArray(data.data)
            ) {

                countries = data.data;

            } else if (
                data &&
                Array.isArray(data.countries)
            ) {

                countries = data.countries;

            } else {

                throw new Error(
                    'Formato de resposta inválido'
                );
            }

            if (countries.length === 0) {
                throw new Error(
                    'Nenhum país disponível'
                );
            }

            // Limpa novamente
            countrySelect.innerHTML = '';

            const placeholder =
                document.createElement('option');

            placeholder.value = '';
            placeholder.textContent =
                translations[lang].select_country_first;

            countrySelect.appendChild(placeholder);

            countries.forEach(country => {

                if (!country.code || !country.name) {
                    return;
                }

                const option =
                    document.createElement('option');

                option.value =
                    String(country.code).toUpperCase();

                option.textContent =
                    country.name;

                countrySelect.appendChild(option);
            });

            countrySelect.disabled = false;

            console.log(
                `[INTOP] ${countrySelect.options.length - 1} países carregados.`
            );

        } catch (error) {

            console.error(
                '[INTOP] Erro ao carregar países:',
                error
            );

            countrySelect.innerHTML = '';

            const errorOption =
                document.createElement('option');

            errorOption.value = '';

            errorOption.textContent =
                translations[lang].error_loading;

            countrySelect.appendChild(errorOption);

            countrySelect.disabled = true;

            clearResult();

        } finally {

            setLoading(countryLoading, false);
        }
    }

    // =========================================================================
    // 9. CARREGAR OPERADORAS - SOMENTE API
    // =========================================================================

    async function handleCountryChange() {

        if (!countrySelect || !operatorSelect) {
            return;
        }

        const countryCode =
            countrySelect.value;

        const lang =
            getCurrentLanguage();

        clearResult();

        if (!countryCode) {

            operatorSelect.innerHTML = '';

            const option =
                document.createElement('option');

            option.value = '';

            option.textContent =
                translations[lang].select_country_first;

            operatorSelect.appendChild(option);

            operatorSelect.disabled = true;

            return;
        }

        operatorSelect.disabled = true;

        operatorSelect.innerHTML = '';

        const loadingOption =
            document.createElement('option');

        loadingOption.value = '';

        loadingOption.textContent =
            translations[lang].loading_operators;

        operatorSelect.appendChild(loadingOption);

        setLoading(operatorLoading, true);

        try {

            const url =
                `${API_BASE_URL}/public-simulator/operators?countryCode=${encodeURIComponent(countryCode)}`;

            console.log(
                '[INTOP] Carregando operadores:',
                url
            );

            const response =
                await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    },
                    credentials: 'include'
                });

            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status}`
                );
            }

            const data =
                await response.json();

            console.log(
                '[INTOP] Operadoras recebidas:',
                data
            );

            let operators = [];

            if (Array.isArray(data)) {

                operators = data;

            } else if (
                data &&
                Array.isArray(data.data)
            ) {

                operators = data.data;

            } else if (
                data &&
                Array.isArray(data.operators)
            ) {

                operators = data.operators;

            } else {

                throw new Error(
                    'Formato de resposta inválido'
                );
            }

            if (operators.length === 0) {

                throw new Error(
                    'Nenhuma operadora disponível'
                );
            }

            operatorSelect.innerHTML = '';

            const placeholder =
                document.createElement('option');

            placeholder.value = '';

            placeholder.textContent =
                translations[lang].select_operator_placeholder;

            operatorSelect.appendChild(placeholder);

            operators.forEach(operator => {

                let code;
                let name;

                if (typeof operator === 'string') {

                    code = operator;
                    name = operator;

                } else {

                    code =
                        operator.code ||
                        operator.id ||
                        operator.operatorCode;

                    name =
                        operator.name ||
                        operator.label ||
                        operator.operatorName ||
                        code;
                }

                if (!code) {
                    return;
                }

                const option =
                    document.createElement('option');

                option.value = String(code);

                option.textContent = name;

                operatorSelect.appendChild(option);
            });

            operatorSelect.disabled = false;

            console.log(
                `[INTOP] ${operatorSelect.options.length - 1} operadoras carregadas.`
            );

        } catch (error) {

            console.error(
                '[INTOP] Erro ao carregar operadores:',
                error
            );

            operatorSelect.innerHTML = '';

            const errorOption =
                document.createElement('option');

            errorOption.value = '';

            errorOption.textContent =
                translations[lang].error_operators;

            operatorSelect.appendChild(errorOption);

            operatorSelect.disabled = true;

        } finally {

            setLoading(operatorLoading, false);
        }
    }

    // =========================================================================
    // 10. ESTIMATIVA
    // =========================================================================

    let estimateRequestId = 0;

    async function updateSimulation() {

        if (
            !countrySelect ||
            !amountSlider ||
            !amountVal ||
            !resultVal ||
            !resultCurrency
        ) {
            return;
        }

        const countryCode =
            countrySelect.value;

        const amount =
            Number(amountSlider.value);

        const requestId =
            ++estimateRequestId;

        // Exibir valor em BRL
        amountVal.textContent =
            `R$ ${amount.toFixed(2).replace('.', ',')}`;

        if (!countryCode || !amount || amount <= 0) {

            clearResult();

            return;
        }

        resultVal.textContent = '...';
        resultCurrency.textContent = '...';

        try {

            const url =
                `${API_BASE_URL}/public-simulator/estimate` +
                `?countryCode=${encodeURIComponent(countryCode)}` +
                `&amountBrl=${encodeURIComponent(amount)}`;

            console.log(
                '[INTOP] Calculando estimativa:',
                url
            );

            const response =
                await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    },
                    credentials: 'include'
                });

            if (!response.ok) {

                throw new Error(
                    `HTTP ${response.status}`
                );
            }

            const data =
                await response.json();

            console.log(
                '[INTOP] Estimativa recebida:',
                data
            );

            // Evitar que uma requisição antiga
            // substitua o resultado mais recente.
            if (requestId !== estimateRequestId) {
                return;
            }

            let estimatedValue;
            let currency;

            // Seu backend retorna diretamente:
            //
            // {
            //   success: true,
            //   rate: 24.30,
            //   estimatedValue: 243,
            //   currency: "HTG"
            // }

            if (
                data &&
                data.estimatedValue !== undefined
            ) {

                estimatedValue =
                    data.estimatedValue;

                currency =
                    data.currency;

            } else if (
                data &&
                data.data
            ) {

                estimatedValue =
                    data.data.estimatedValue ??
                    data.data.amount ??
                    data.data.value;

                currency =
                    data.data.currency ??
                    data.data.currencyCode;
            }

            if (
                estimatedValue === undefined ||
                estimatedValue === null ||
                !currency
            ) {

                throw new Error(
                    'Resposta de estimativa inválida'
                );
            }

            const numericValue =
                Number(estimatedValue);

            if (!Number.isFinite(numericValue)) {

                throw new Error(
                    'Valor de estimativa inválido'
                );
            }

            // Formatação por moeda
            let formattedAmount;

            if (
                currency === 'COP' ||
                currency === 'CLP' ||
                currency === 'PYG' ||
                currency === 'ARS'
            ) {

                formattedAmount =
                    Math.round(numericValue)
                        .toLocaleString('pt-BR');

            } else {

                formattedAmount =
                    numericValue
                        .toFixed(2)
                        .replace('.', ',');
            }

            resultVal.textContent =
                formattedAmount;

            resultCurrency.textContent =
                currency;

            if (appDownloadContainer) {
                appDownloadContainer.style.display =
                    'block';
            }

        } catch (error) {

            console.error(
                '[INTOP] Erro na estimativa:',
                error
            );

            if (requestId !== estimateRequestId) {
                return;
            }

            resultVal.textContent = '---';
            resultCurrency.textContent = '---';

            if (appDownloadContainer) {
                appDownloadContainer.style.display =
                    'none';
            }
        }
    }

    // =========================================================================
    // 11. EVENTOS
    // =========================================================================

    if (countrySelect) {

        countrySelect.addEventListener(
            'change',
            handleCountryChange
        );
    }

    if (operatorSelect) {

        operatorSelect.addEventListener(
            'change',
            updateSimulation
        );
    }

    if (amountSlider) {

        amountSlider.addEventListener(
            'input',
            updateSimulation
        );
    }

    // =========================================================================
    // 12. INICIALIZAÇÃO
    // =========================================================================

    updateLanguage(
        localStorage.getItem('preferredLanguage') || 'pt'
    );

    if (countrySelect) {
        loadCountries();
    }

});
