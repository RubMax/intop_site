// =========================================================================
// RECHERCHE DYNAMIQUE DES PAYS
// =========================================================================

let allCountries = [];

// Normalise le texte : Haïti = haiti
function normalizeText(text) {
    return (text || '')
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

// Charge tous les pays depuis l'API
async function loadCountries() {
const searchInput = document.getElementById('country-search');
const countryInput = document.getElementById('country');
const resultsContainer = document.getElementById('country-results');
const countryLoading = document.getElementById('country-loading');

```
if (!searchInput || !countryInput || !resultsContainer) {
    console.error('Éléments de recherche des pays introuvables.');
    return;
}

// Évite d'ajouter plusieurs fois les mêmes événements
if (searchInput.dataset.eventsInitialized !== 'true') {

    // Affiche les pays quand l'utilisateur clique dans le champ
    searchInput.addEventListener('focus', () => {
        displayCountries(searchInput.value.trim());
    });

    // Recherche dynamique pendant la frappe
    searchInput.addEventListener('input', () => {
        const search = searchInput.value.trim();

        // Le pays doit être sélectionné à nouveau
        countryInput.value = '';

        // Réinitialise les opérateurs
        resetOperators();

        // Filtre et affiche les pays
        displayCountries(search);
    });

    searchInput.dataset.eventsInitialized = 'true';
}

if (countryLoading) {
    countryLoading.style.display = 'inline-block';
}

searchInput.disabled = true;
searchInput.placeholder = 'Carregando países...';

try {
    const response = await fetch(
        `${API_BASE_URL}/public-simulator/countries`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    const responseData = await response.json();

    console.log('Réponse brute des pays:', responseData);

    // =========================================================
    // RÉCUPÉRATION DES PAYS SELON LE FORMAT DE LA RÉPONSE API
    // =========================================================
    let countries = [];

    if (Array.isArray(responseData)) {
        countries = responseData;

    } else if (responseData && Array.isArray(responseData.data)) {
        countries = responseData.data;

    } else if (
        responseData &&
        responseData.data &&
        Array.isArray(responseData.data.items)
    ) {
        countries = responseData.data.items;

    } else if (responseData && Array.isArray(responseData.countries)) {
        countries = responseData.countries;

    } else if (responseData && Array.isArray(responseData.result)) {
        countries = responseData.result;

    } else if (
        responseData &&
        responseData.result &&
        Array.isArray(responseData.result.items)
    ) {
        countries = responseData.result.items;
    }

    if (!Array.isArray(countries) || countries.length === 0) {
        throw new Error('Aucun pays trouvé ou format de réponse invalide.');
    }

    // =========================================================
    // NORMALISATION DES DONNÉES
    // =========================================================
    allCountries = countries
        .map(country => ({
            code:
                country.code ||
                country.countryCode ||
                country.isoCode ||
                country.CountryIso ||
                country.id ||
                '',

            name:
                country.name ||
                country.countryName ||
                country.CountryName ||
                country.label ||
                country.nom ||
                ''
        }))
        .filter(country => country.code && country.name)
        .sort((a, b) =>
            a.name.localeCompare(b.name, 'pt-BR')
        );

    if (allCountries.length === 0) {
        throw new Error('Aucun pays valide trouvé.');
    }

    console.log(
        `${allCountries.length} pays chargés avec succès.`,
        allCountries
    );

    searchInput.disabled = false;
    searchInput.placeholder = 'Digite o nome do país...';

} catch (error) {

    console.error(
        'Erreur lors du chargement des pays:',
        error
    );

    // =========================================================
    // FALLBACK : PAYS DE SECOURS
    // =========================================================
    allCountries = fallbackCountries
        .map(country => ({
            code: country.code,
            name: country.name
        }))
        .filter(country => country.code && country.name)
        .sort((a, b) =>
            a.name.localeCompare(b.name, 'pt-BR')
        );

    console.warn(
        'API indisponible. Utilisation des pays de secours.'
    );

    searchInput.disabled = false;
    searchInput.placeholder = 'Digite o nome do país...';

} finally {

    if (countryLoading) {
        countryLoading.style.display = 'none';
    }
}
```

}


// =========================================================================
// AFFICHER LES PAYS FILTRÉS
// =========================================================================

function displayCountries(search = '') {

    const resultsContainer =
        document.getElementById('country-results');

    if (!resultsContainer) return;

    const query = normalizeText(search);

    // Si rien n'est écrit, affiche tous les pays
    const filteredCountries = allCountries.filter(country => {

        const countryName =
            normalizeText(country.name);

        // Recherche dans le nom du pays
        return countryName.includes(query);
    });

    resultsContainer.innerHTML = '';

    // Aucun résultat
    if (filteredCountries.length === 0) {

        const noResult = document.createElement('div');

        noResult.className =
            'country-no-results';

        noResult.textContent =
            'Nenhum país encontrado';

        resultsContainer.appendChild(noResult);

        resultsContainer.style.display = 'block';

        return;
    }

    // Création des résultats
    filteredCountries.forEach(country => {

        const item = document.createElement('div');

        item.className =
            'country-result-item';

        item.textContent =
            country.name;

        item.dataset.code =
            country.code;

        // Quand l'utilisateur choisit un pays
        item.addEventListener('click', () => {

            selectCountry(country);

        });

        resultsContainer.appendChild(item);
    });

    resultsContainer.style.display =
        'block';
}


// =========================================================================
// SÉLECTIONNER UN PAYS
// =========================================================================

function selectCountry(country) {

    const searchInput =
        document.getElementById('country-search');

    const countryInput =
        document.getElementById('country');

    const resultsContainer =
        document.getElementById('country-results');

    if (!searchInput || !countryInput) return;

    // Affiche le nom du pays
    searchInput.value =
        country.name;

    // Sauvegarde le code du pays
    countryInput.value =
        country.code;

    // Ferme la liste
    if (resultsContainer) {
        resultsContainer.style.display =
            'none';
    }

    console.log(
        'Pays sélectionné:',
        country.name,
        country.code
    );

    // Charge les opérateurs du pays
    handleCountryChange();
}


// =========================================================================
// FERMER LA LISTE SI L'UTILISATEUR CLIQUE AILLEURS
// =========================================================================

document.addEventListener('click', event => {

    const container =
        event.target.closest(
            '.country-search-container'
        );

    if (container) return;

    const resultsContainer =
        document.getElementById(
            'country-results'
        );

    if (resultsContainer) {
        resultsContainer.style.display =
            'none';
    }
});


// =========================================================================
// RÉINITIALISER LES OPÉRATEURS
// =========================================================================

function resetOperators() {

    const operatorSelect =
        document.getElementById('operator');

    if (!operatorSelect) return;

    operatorSelect.innerHTML = `
        <option value="">
            Selecione um país primeiro
        </option>
    `;

    operatorSelect.disabled = true;
}
