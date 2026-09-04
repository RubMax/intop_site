// =========================================================================
// ELEMENTS DU SIMULATEUR
// =========================================================================

const phoneInput = document.getElementById('phone-number');
const phonePrefix = document.getElementById('phone-prefix');
const countryFlag = document.getElementById('country-flag');
const countryNameDisplay = document.getElementById('country-name-display');
const countryFlagDisplay = document.getElementById('country-flag-display');
const operatorGroup = document.getElementById('operator-group');
const amountGroup = document.getElementById('amount-group');
const resultGroup = document.getElementById('result-group');

let detectedCountryCode = '';
let detectedOperatorCode = '';
let isPhoneValidated = false;

// =========================================================================
// DÉTECTION DU PAYS PAR NUMÉRO
// =========================================================================

async function detectCountryByPhone(phoneNumber) {
    try {
        // Nettoyer le numéro
        const cleanNumber = phoneNumber.replace(/[^0-9+]/g, '');
        
        if (cleanNumber.length < 7) {
            return null;
        }

        const url = `${API_BASE_URL}/public-simulator/detect-country?phone=${encodeURIComponent(cleanNumber)}`;
        
        console.log('[INTOP] Détection du pays:', url);
        
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Accept': 'application/json' },
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        console.log('[INTOP] Pays détecté:', data);

        // Format attendu:
        // { success: true, countryCode: "HT", countryName: "Haiti", flag: "🇭🇹", phonePrefix: "+509" }
        
        if (data && data.countryCode) {
            return {
                countryCode: data.countryCode,
                countryName: data.countryName || data.countryCode,
                flag: data.flag || '',
                phonePrefix: data.phonePrefix || ''
            };
        }
        
        return null;
    } catch (error) {
        console.error('[INTOP] Erreur détection pays:', error);
        return null;
    }
}

// =========================================================================
// VALIDATION DU NUMÉRO & CHARGEMENT DES OPÉRATEURS
// =========================================================================

async function validatePhoneAndLoadOperators() {
    const phone = phoneInput.value.trim();
    
    if (!phone || phone.length < 7) {
        // Réinitialiser
        resetSimulator();
        showNotification('Veuillez entrer un numéro de téléphone valide.', 'warning');
        return;
    }

    // Afficher le chargement
    phoneInput.disabled = true;
    countryNameDisplay.textContent = 'Recherche en cours...';

    try {
        const result = await detectCountryByPhone(phone);
        
        if (!result) {
            showNotification('Pays non trouvé pour ce numéro. Vérifiez le numéro.', 'error');
            resetSimulator();
            return;
        }

        // Mettre à jour les informations du pays
        detectedCountryCode = result.countryCode;
        phonePrefix.textContent = result.phonePrefix || `+${detectedCountryCode}`;
        countryNameDisplay.textContent = `${result.flag || '🌍'} ${result.countryName}`;
        
        if (result.flag) {
            // Si vous avez des drapeaux SVG/PNG
            // countryFlag.src = `/flags/${detectedCountryCode.toLowerCase()}.png`;
            countryFlag.style.display = 'none';
        }

        // Charger les opérateurs
        await loadOperatorsForCountry(detectedCountryCode);
        
        isPhoneValidated = true;
        operatorGroup.style.display = 'block';
        
        showNotification(`Pays détecté: ${result.countryName}`, 'success');

    } catch (error) {
        console.error('[INTOP] Erreur validation:', error);
        showNotification('Erreur lors de la validation du numéro.', 'error');
        resetSimulator();
    } finally {
        phoneInput.disabled = false;
    }
}

// =========================================================================
// CHARGER LES OPÉRATEURS POUR UN PAYS
// =========================================================================

async function loadOperatorsForCountry(countryCode) {
    if (!operatorSelect) return;

    const lang = getCurrentLanguage();
    
    operatorSelect.disabled = true;
    operatorSelect.innerHTML = '';
    
    const loadingOption = document.createElement('option');
    loadingOption.value = '';
    loadingOption.textContent = translations[lang].loading_operators;
    operatorSelect.appendChild(loadingOption);

    setLoading(operatorLoading, true);

    try {
        const url = `${API_BASE_URL}/public-simulator/operators?countryCode=${encodeURIComponent(countryCode)}`;
        
        console.log('[INTOP] Chargement opérateurs:', url);
        
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Accept': 'application/json' },
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        console.log('[INTOP] Opérateurs reçus:', data);

        let operators = [];

        if (Array.isArray(data)) {
            operators = data;
        } else if (data && Array.isArray(data.data)) {
            operators = data.data;
        } else if (data && Array.isArray(data.operators)) {
            operators = data.operators;
        } else {
            throw new Error('Format de réponse invalide');
        }

        if (operators.length === 0) {
            throw new Error('Aucun opérateur disponible');
        }

        operatorSelect.innerHTML = '';

        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = translations[lang].select_operator_placeholder;
        operatorSelect.appendChild(placeholder);

        operators.forEach(operator => {
            let code = operator.code || operator.id || operator.operatorCode;
            let name = operator.name || operator.label || operator.operatorName || code;

            if (!code) return;

            const option = document.createElement('option');
            option.value = String(code);
            option.textContent = name;
            operatorSelect.appendChild(option);
        });

        operatorSelect.disabled = false;
        
        // Afficher les sections suivantes
        amountGroup.style.display = 'block';
        resultGroup.style.display = 'block';

        console.log(`[INTOP] ${operatorSelect.options.length - 1} opérateurs chargés.`);

    } catch (error) {
        console.error('[INTOP] Erreur chargement opérateurs:', error);
        
        operatorSelect.innerHTML = '';
        const errorOption = document.createElement('option');
        errorOption.value = '';
        errorOption.textContent = translations[lang].error_operators;
        operatorSelect.appendChild(errorOption);
        operatorSelect.disabled = true;
    } finally {
        setLoading(operatorLoading, false);
    }
}

// =========================================================================
// RÉINITIALISATION DU SIMULATEUR
// =========================================================================

function resetSimulator() {
    detectedCountryCode = '';
    detectedOperatorCode = '';
    isPhoneValidated = false;
    
    countryNameDisplay.textContent = 'Sélectionnez un pays';
    countryFlag.style.display = 'none';
    
    operatorGroup.style.display = 'none';
    amountGroup.style.display = 'none';
    resultGroup.style.display = 'none';
    
    operatorSelect.innerHTML = '';
    const option = document.createElement('option');
    option.value = '';
    option.textContent = '-- Sélectionnez un pays d\'abord --';
    operatorSelect.appendChild(option);
    operatorSelect.disabled = true;
    
    clearResult();
}

// =========================================================================
// MISE À JOUR DE LA SIMULATION
// =========================================================================

async function updateSimulation() {
    if (!isPhoneValidated) return;
    
    const operatorCode = operatorSelect?.value;
    const amount = Number(amountSlider?.value);
    
    if (!operatorCode || !amount || amount <= 0) {
        clearResult();
        return;
    }

    // ... reste du code existant ...
    // Utilisez detectedCountryCode et operatorCode pour l'API
}
async function loadCountriesFromDing() {
    try {
        const response = await fetch('https://api.dingconnect.com/api/V1/GetCountries', {
            headers: {
                'api_key': 'VOTRE_API_KEY_DING'
            }
        });
        const data = await response.json();
        
        // Structure de la réponse : { ResultCode: 1, Items: [ { CountryIso: "BR", CountryName: "Brazil", InternationalDialingInformation: [ { Prefix: "55", MinimumLength: 10, MaximumLength: 11 } ] } ] }
        return data.Items || [];
    } catch (error) {
        console.error('Erreur chargement pays Ding:', error);
        return [];
    }
}
let countriesData = [];

async function detectCountryByPrefix(phoneNumber) {
    // Nettoyer le numéro
    const cleanNumber = phoneNumber.replace(/[^0-9+]/g, '');
    
    // Charger les pays si pas déjà fait
    if (countriesData.length === 0) {
        countriesData = await loadCountriesFromDing();
    }
    
    // Trier les préfixes par longueur décroissante
    const sortedCountries = countriesData
        .filter(c => c.InternationalDialingInformation && c.InternationalDialingInformation.length > 0)
        .sort((a, b) => {
            const prefixA = a.InternationalDialingInformation[0].Prefix || '';
            const prefixB = b.InternationalDialingInformation[0].Prefix || '';
            return prefixB.length - prefixA.length;
        });
    
    // Tester chaque préfixe
    for (const country of sortedCountries) {
        const prefix = country.InternationalDialingInformation[0].Prefix;
        if (cleanNumber.startsWith(prefix)) {
            return {
                countryCode: country.CountryIso,
                countryName: country.CountryName,
                prefix: prefix,
                flagUrl: `/flags/${country.CountryIso.toLowerCase()}.png` // Si vous avez les drapeaux
            };
        }
    }
    
    return null;
}

// =========================================================================
// ÉVÉNEMENT SUR LE CHAMP DE NUMÉRO
// =========================================================================

phoneInput.addEventListener('input', async function() {
    const phone = this.value.trim();
    
    if (phone.length < 4) {
        document.getElementById('country-flag-icon').style.display = 'none';
        return;
    }
    
    const result = await detectCountryByPrefix(phone);
    
    if (result) {
        // Mettre à jour le drapeau
        const flagIcon = document.getElementById('country-flag-icon');
        flagIcon.src = result.flagUrl || `https://flagcdn.com/w40/${result.countryCode.toLowerCase()}.png`;
        flagIcon.style.display = 'block';
        flagIcon.alt = result.countryName;
        
        // Mettre à jour le préfixe
        document.getElementById('phone-prefix').textContent = `+${result.prefix}`;
    }
});