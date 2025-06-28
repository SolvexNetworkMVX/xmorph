// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('open');
});

// Fetch data from MultiversX API
async function fetchTokenData() {
    try {
        const response = await fetch('https://api.multiversx.com/tokens/XMPH-3af949');
        const data = await response.json();

        // Update dashboard with data
        document.getElementById('price').textContent = `$${data.price ? data.price.toFixed(4) : 'N/A'}`;
        document.getElementById('market-cap').textContent = data.marketCap ? `$${data.marketCap.toLocaleString()}` : 'N/A';
        document.getElementById('transactions').textContent = data.transactions ? data.transactions.toLocaleString() : 'N/A';
        document.getElementById('holders').textContent = data.accounts ? data.accounts.toLocaleString() : 'N/A';
    } catch (error) {
        console.error('Error fetching token data:', error);
        document.getElementById('price').textContent = 'Error';
        document.getElementById('market-cap').textContent = 'Error';
        document.getElementById('transactions').textContent = 'Error';
        document.getElementById('holders').textContent = 'Error';
    }
}

// Call the function on page load
fetchTokenData();
