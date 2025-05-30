// Smooth Scroll to Top on 'Back to top' click
const backToTopBtn = document.querySelector('.foot-panel1');
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Language Selector Change Handler
const languageSelector = document.querySelector('.foot-panel3 select');
languageSelector.addEventListener('change', (event) => {
    const selectedLang = event.target.value;
    alert(`Language switched to: ${selectedLang}`);
});

// Adding interactive behavior for all "See more" buttons
const seeMoreButtons = document.querySelectorAll('.box-content p');
seeMoreButtons.forEach(button => {
    button.style.cursor = 'pointer';  // Change cursor to pointer on hover

    // Click event with a subtle animation effect
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => button.style.transform = 'scale(1)', 150);

        alert('Redirecting you to the full category page...');
        // TODO: Replace alert with actual page redirection if needed
        // window.location.href = 'category.html';
    });
});

// Search Box functionality with validation and smooth feedback
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-icon');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();

    if (query === '') {
        alert('Oops! Please enter something to search.');
        searchInput.focus();
        return;
    }

    // Animate search icon click
    searchBtn.style.transform = 'scale(1.1)';
    setTimeout(() => searchBtn.style.transform = 'scale(1)', 200);

    alert(`Searching for: "${query}"`);
    // TODO: Replace alert with real search action
    // window.location.href = `search.html?query=${encodeURIComponent(query)}`;
});
