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

    if (!searchInput || !countryInput || !resultsContainer) {
        console.error('Éléments de recherche des pays introuvables.');
        return;
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
            throw new Error(`HTTP ${response.status}`);
        }

        const responseData = await response.json();

        // Compatible avec différentes structures de réponse
        let countries = [];

        if (Array.isArray(responseData)) {
            countries = responseData;

        } else if (Array.isArray(responseData.data)) {
            countries = responseData.data;

        } else if (Array.isArray(responseData.countries)) {
            countries = responseData.countries;

        } else if (Array.isArray(responseData.result)) {
            countries = responseData.result;
        }

        if (!Array.isArray(countries) || countries.length === 0) {
            throw new Error('Aucun pays trouvé.');
        }

        // Nettoyage et format standard
        allCountries = countries
            .map(country => ({
                code:
                    country.code ||
                    country.isoCode ||
                    country.countryCode ||
                    country.id,

                name:
                    country.name ||
                    country.countryName ||
                    country.label ||
                    country.nom
            }))
            .filter(country => country.code && country.name)
            .sort((a, b) =>
                a.name.localeCompare(b.name)
            );

        console.log(`${allCountries.length} pays chargés.`);

        searchInput.disabled = false;
        searchInput.placeholder = 'Digite o nome do país...';

        // Affiche les pays lorsque l'utilisateur clique
        searchInput.addEventListener('focus', () => {
            displayCountries(searchInput.value);
        });

        // Recherche pendant la frappe
        searchInput.addEventListener('input', () => {

            // Réinitialise le pays sélectionné
            countryInput.value = '';

            // Réinitialise les opérateurs
            resetOperators();

            // Filtre les pays
            displayCountries(searchInput.value);
        });

    } catch (error) {

        console.error(
            'Erreur lors du chargement des pays:',
            error
        );

        // Utilisation des pays de secours
        allCountries = fallbackCountries
            .map(country => ({
                code: country.code,
                name: country.name
            }))
            .sort((a, b) =>
                a.name.localeCompare(b.name)
            );

        searchInput.disabled = false;
        searchInput.placeholder = 'Digite o nome do país...';

    } finally {

        if (countryLoading) {
            countryLoading.style.display = 'none';
        }
    }
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
