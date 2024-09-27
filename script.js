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

    // Function to truncate text
    function truncateText(text, maxLength) {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }

    // Function to load menu data
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

        // Add Vegan category dynamically
        const veganOption = document.createElement('option');
        veganOption.value = 'vegan';
        veganOption.innerText = getVeganCategoryLabel(language); // Get localized label for "Vegan"
        categorySelect.appendChild(veganOption);

        // Load the first category by default
        if (categorySelect.options.length > 0) {
            loadCategoryItems(categorySelect.options[0].value, data);
        }

        // Add change event listener for category selection
        categorySelect.addEventListener('change', (e) => {
            const selectedCategory = e.target.value;
            if (selectedCategory === 'vegan') {
                loadVeganItems(language, data);  // Load vegan items if vegan category is selected
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
            createMenuItem(item, categoryDiv);
        });

        // Add the category with its items to the menu content
        menuContent.appendChild(categoryDiv);
    }

    // Function to create a menu item
    function createMenuItem(item, categoryDiv) {
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
        const truncatedDescription = truncateText(item.description, 100);
        itemDescription.innerHTML = `<h5>${item.name} - ${item.price}</h5><p>${truncatedDescription}</p>`;
        itemDescription.addEventListener('click', () => {
            showMealDetail(item.image, item.name, item.description, item.price);
        });

        // Append the image and description to the item div
        itemDiv.appendChild(itemImage);
        itemDiv.appendChild(itemDescription);

        categoryDiv.appendChild(itemDiv);
    }

    // Function to load vegan items from all categories
    function loadVeganItems(language, data) {
        menuContent.innerHTML = ''; // Clear previous content

        // Create a vegan category div
        const veganCategoryDiv = document.createElement('div');
        veganCategoryDiv.classList.add('menu-category');

        // Add the vegan category title and description
        const categoryHeader = document.createElement('h2');
        categoryHeader.innerText = getVeganCategoryLabel(language);  // Get localized label for "Vegan"
        const categoryDescription = document.createElement('p');
        categoryDescription.innerText = getVeganDescription(language);

        veganCategoryDiv.appendChild(categoryHeader);
        veganCategoryDiv.appendChild(categoryDescription);

        // Loop through all categories and find vegan items
        for (let category in data) {
            const categoryData = data[category];

            categoryData.items.forEach(item => {
                if (item.vegan === 'yes') {
                    createMenuItem(item, veganCategoryDiv);
                }
            });
        }

        // Add the vegan category with its items to the menu content
        menuContent.appendChild(veganCategoryDiv);
    }

    // Function to get the localized label for "Vegan" category
    function getVeganCategoryLabel(language) {
        switch (language) {
            case 'fr':
                return 'Végan';
            case 'es':
                return 'Vegano';
            default:
                return 'Vegan';
        }
    }

    // Function to get the localized description for "Vegan" category
    function getVeganDescription(language) {
        switch (language) {
            case 'fr':
                return 'Options végan délicieuses de toutes les catégories';
            case 'es':
                return 'Opciones veganas deliciosas de todas las categorías';
            default:
                return 'Delicious vegan options from all categories';
        }
    }

    // Function to show the detailed view of a meal
    function showMealDetail(image, name, description, price) {
        previousScrollPosition = window.scrollY;
        menuContent.classList.add('d-none');
        mealImage.src = image;
        mealName.innerText = name;
        mealDescription.innerText = description;
        mealPrice.innerText = price;
        mealDetail.classList.remove('d-none');
    }

    // Event listener to return to the menu on clicking the detail view
    mealDetail.addEventListener('click', () => {
        mealDetail.classList.add('d-none');
        menuContent.classList.remove('d-none');
        window.scrollTo(0, previousScrollPosition);
    });

    // Handle language switch event
    languageSelect.addEventListener('change', (e) => {
        loadMenuData(e.target.value);
    });

    // Load default menu (English)
    loadMenuData('en');
});
