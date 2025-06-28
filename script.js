// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('translate-x-0');
});

// Smooth scrolling for navbar and mobile menu links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed navbar height
                behavior: 'smooth' // Enable smooth scrolling
            });
        }
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('translate-x-0');
        }
    });
});

// Fetch data from MultiversX API
async function fetchTokenData() {
    try {
        const response = await fetch('https://api.multiversx.com/tokens/XMPH-3af949');
        const data = await response.json();

        // Update dashboard with data
        document.getElementById('price').textContent = `$${data.price ? data.price.toFixed(4) : 'N/A'}`;
        document.getElementById('market-cap').textContent = data.marketCap ? `$${data.marketCap.toLocaleString()}` : 'N/A';
        document.getElementById('transfers').textContent = data.transfers ? data.transfers.toLocaleString() : 'N/A';
        document.getElementById('holders').textContent = data.accounts ? data.accounts.toLocaleString() : 'N/A';
    } catch (error) {
        console.error('Error fetching token data:', error);
        document.getElementById('price').textContent = 'Error';
        document.getElementById('market-cap').textContent = 'Error';
        document.getElementById('transfers').textContent = 'Error';
        document.getElementById('holders').textContent = 'Error';
    }
}

// Particle animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animation = `float ${Math.random() * 10 + 5}s infinite`;
        particlesContainer.appendChild(particle);
    }
}

// Call functions on page load
fetchTokenData();
createParticles();
