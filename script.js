document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');
    const categorySelect = document.getElementById('categorySelect'); // List box for categories
    const menuContent = document.getElementById('menuContent');
    const mealDetail = document.getElementById('mealDetail');
    const mealImage = document.getElementById('mealImage');
    const mealName = document.getElementById('mealName');
    const mealDescription = document.getElementById('mealDescription');
    const mealPrice = document.getElementById('mealPrice');

    let previousScrollPosition = 0;

    function loadMenuData(language) {
        const data = menuData[language].categories;
        categorySelect.innerHTML = '';  // Clear previous category options

        // Populate categories in the list box
        for (let category in data) {
            const option = document.createElement('option');
            option.value = category;
            option.innerText = category;
            categorySelect.appendChild(option);
        }

        // Add Vegan category dynamically based on the selected language
        const veganOption = document.createElement('option');
        veganOption.value = 'Vegan';
        veganOption.innerText = getVeganCategoryLabel(language);
        categorySelect.appendChild(veganOption);

        // Load the first category by default
        if (categorySelect.options.length > 0) {
            loadCategoryItems(categorySelect.options[0].value, data);
        }

        // Add change event listener for category selection
        categorySelect.addEventListener('change', (e) => {
            const selectedCategory = e.target.value;
            if (selectedCategory === 'Vegan') {
                loadVeganItems(language);
            } else {
                loadCategoryItems(selectedCategory, data);
            }
        });
    }

    // Function to load items for a specific category
    function loadCategoryItems(category, data) {
        menuContent.innerHTML = ''; // Clear previous content

        const categoryData = data[category];

        // Create a category div
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('menu-category');

        // Add the category title and description
        const categoryHeader = document.createElement('h2');
        categoryHeader.innerText = category;
        const categoryDescription = document.createElement('p');
        categoryDescription.innerText = categoryData.description;

        // Append the category title and description to the category div
        categoryDiv.appendChild(categoryHeader);
        categoryDiv.appendChild(categoryDescription);

        // Loop through the items within the category
        categoryData.items.forEach(item => {
            const itemDiv = createMenuItemDiv(item);
            categoryDiv.appendChild(itemDiv);
        });

        // Add the category with its items to the menu content
        menuContent.appendChild(categoryDiv);
    }

    // Function to load only vegan items across all categories and show their original categories
    function loadVeganItems(language) {
        menuContent.innerHTML = ''; // Clear previous content

        const data = menuData[language].categories;
        const veganItemsByCategory = {};

        // Loop through all categories and filter vegan items
        for (let category in data) {
            const veganItems = data[category].items.filter(item => item.vegan === 'yes');
            if (veganItems.length > 0) {
                veganItemsByCategory[category] = veganItems; // Store vegan items by their category
            }
        }

        // Create a Vegan category div
        const veganDiv = document.createElement('div');
        veganDiv.classList.add('menu-category');

        const veganHeader = document.createElement('h2');
        veganHeader.innerText = getVeganCategoryLabel(language);
        veganDiv.appendChild(veganHeader);

        // Append each category and its vegan items to the veganDiv
        for (let category in veganItemsByCategory) {
            const categoryHeader = document.createElement('h3');
            categoryHeader.innerText = category; // Show the category name above the items
            veganDiv.appendChild(categoryHeader);

            veganItemsByCategory[category].forEach(item => {
                const itemDiv = createMenuItemDiv(item);
                veganDiv.appendChild(itemDiv);
            });
        }

        // Add the Vegan category with its items to the menu content
        menuContent.appendChild(veganDiv);
    }

    // Function to dynamically create menu item div
    function createMenuItemDiv(item) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item', 'd-flex', 'align-items-center');

        // Create an image and attach event listener
        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.name;
        itemImage.classList.add('me-3');
        itemImage.style.width = '100px';
        itemImage.style.height = '100px';
        itemImage.style.cursor = 'pointer';
        itemImage.addEventListener('click', () => {
            showMealDetail(item.image, item.name, item.description, item.price);
        });

        // Create a description container and attach event listener
        const itemDescription = document.createElement('div');
        itemDescription.style.cursor = 'pointer';
        itemDescription.innerHTML = `<h5>${item.name} - ${item.price}</h5><p>${item.description}</p>`;
        itemDescription.addEventListener('click', () => {
            showMealDetail(item.image, item.name, item.description, item.price);
        });

        // Append the image and description to the item div
        itemDiv.appendChild(itemImage);
        itemDiv.appendChild(itemDescription);

        return itemDiv;
    }

    // Function to show meal details in the detailed view
    function showMealDetail(image, name, description, price) {
        previousScrollPosition = window.scrollY;
        menuContent.classList.add('d-none');
        mealImage.src = image;
        mealName.innerText = name;
        mealDescription.innerText = description;
        mealPrice.innerText = price;
        mealDetail.classList.remove('d-none');
    }

    // Helper function to get the appropriate Vegan category label based on language
    function getVeganCategoryLabel(language) {
        const labels = {
            en: 'Vegan',
            es: 'Vegano',
            fr: 'Vegan'
        };
        return labels[language] || 'Vegan';
    }

    // Add event listener to close meal detail view
    mealDetail.addEventListener('click', () => {
        mealDetail.classList.add('d-none');
        menuContent.classList.remove('d-none');
        window.scrollTo(0, previousScrollPosition);
    });

    // Event listener for language change
    languageSelect.addEventListener('change', (e) => {
        loadMenuData(e.target.value);
    });

    // Load default menu (English)
    loadMenuData('en');
});
