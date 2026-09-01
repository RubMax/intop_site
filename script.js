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


