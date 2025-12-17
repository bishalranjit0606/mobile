document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Mock Search Functionality (for Price Check page)
    const searchInput = document.getElementById('price-search');
    const searchBtn = document.getElementById('search-btn');
    const searchResult = document.getElementById('search-result');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.toLowerCase();
            if (query.trim() === "") {
                searchResult.innerHTML = '<p style="color: red;">Please enter a model name.</p>';
                return;
            }
            
            // Mock Data
            searchResult.innerHTML = `
                <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); margin-top: 20px;">
                    <h3>Search Result for "${searchInput.value}"</h3>
                    <p><strong>Status:</strong> In Stock</p>
                    <p><strong>Retail Price:</strong> $799.00</p>
                    <p style="color: green; font-size: 0.9em;">Available for immediate pickup.</p>
                </div>
            `;
        });
    }
});
