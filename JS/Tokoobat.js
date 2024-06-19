document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');

    const items = [
        { name: 'Vitamin C', category: 'vitamins-supplements' },
        { name: 'Redoxon', category: 'vitamins-supplements' },
        { name: 'Nasal Spray', category: 'nasal-care' },
        { name: 'Heart Health Supplement', category: 'heart-health' },
        // Add more items as needed
    ];

    searchInput.addEventListener('input', performSearch);
    categoryFilter.addEventListener('change', performSearch);

    function performSearch() {
        const query = searchInput.value.toLowerCase();
        const category = categoryFilter.value;

        const filteredItems = items.filter(item => {
            const matchesQuery = item.name.toLowerCase().includes(query);
            const matchesCategory = category === 'all' || item.category === category;
            return matchesQuery && matchesCategory;
        });

        displayResults(filteredItems);
    }

    function displayResults(filteredItems) {
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = ''; // Clear previous results

        filteredItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'result-item';
            itemElement.textContent = item.name;
            resultsContainer.appendChild(itemElement);
        });

        if (filteredItems.length === 0) {
            const noResultsElement = document.createElement('div');
            noResultsElement.className = 'no-results';
            noResultsElement.textContent = 'No results found';
            resultsContainer.appendChild(noResultsElement);
        }
    }

    // Initial display
    performSearch();
});
