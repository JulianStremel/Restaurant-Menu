document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');
    const categorySelect = document.getElementById('categorySelect');
    const menuContent = document.getElementById('menuContent');
    const mealDetail = document.getElementById('mealDetail');
    const mealImage = document.getElementById('mealImage');
    const mealName = document.getElementById('mealName');
    const mealDescription = document.getElementById('mealDescription');
    const mealPrice = document.getElementById('mealPrice');
    const closeMealDetail = document.getElementById('closeMealDetail');
    let previousScrollPosition = 0;

    // Function to truncate text
    function truncateText(text, maxLength) {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }

    // Function to load menu data
    function loadMenuData(language) {
        const data = menuData[language].categories;
        categorySelect.innerHTML = '';  

        // Populate regular categories
        for (let category in data) {
            const option = document.createElement('option');
            option.value = category;
            option.innerText = category;
            categorySelect.appendChild(option);
        }

        // Add Vegan category dynamically
        const veganOption = document.createElement('option');
        veganOption.value = 'vegan';
        veganOption.innerText = getVeganCategoryLabel(language);
        categorySelect.appendChild(veganOption);

        // Add Gluten-Free category for all languages now
        const glutenFreeOption = document.createElement('option');
        glutenFreeOption.value = 'glutenfree';
        glutenFreeOption.innerText = getGlutenFreeCategoryLabel(language);
        categorySelect.appendChild(glutenFreeOption);

        // Load the first category by default if there are options
        if (categorySelect.options.length > 0) {
            loadCategoryItems(categorySelect.options[0].value, data);
        }

        // Event listener for category change
        categorySelect.addEventListener('change', (e) => {
            const selectedCategory = e.target.value;
            if (selectedCategory === 'vegan') {
                loadVeganItems(language, data);
            } else if (selectedCategory === 'glutenfree') {
                loadGlutenFreeItems(language, data);
            } else {
                loadCategoryItems(selectedCategory, data);
            }
        });
    }

    // Function to load items for a specific category
    function loadCategoryItems(category, data) {
        menuContent.innerHTML = ''; 

        const categoryData = data[category] || {description: '', items: []};
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('menu-category');

        const categoryHeader = document.createElement('h2');
        categoryHeader.innerText = category;
        const categoryDescription = document.createElement('p');
        categoryDescription.innerText = categoryData.description || 'No description available.';

        categoryDiv.appendChild(categoryHeader);
        categoryDiv.appendChild(categoryDescription);

        (categoryData.items || []).forEach(item => {
            createMenuItem(item, categoryDiv);
        });

        menuContent.appendChild(categoryDiv);
    }

    // Function to create a menu item
    function createMenuItem(item, categoryDiv) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item', 'd-flex', 'align-items-center');

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

        const itemDescription = document.createElement('div');
        itemDescription.style.cursor = 'pointer';
        const truncatedDescription = truncateText(item.description, 100);
        itemDescription.innerHTML = `<h5>${item.name} - ${item.price}</h5><p>${truncatedDescription}</p>`;
        itemDescription.addEventListener('click', () => {
            showMealDetail(item.image, item.name, item.description, item.price);
        });

        itemDiv.appendChild(itemImage);
        itemDiv.appendChild(itemDescription);

        categoryDiv.appendChild(itemDiv);
    }

    // Function to load vegan items from all categories
    function loadVeganItems(language, data) {
        menuContent.innerHTML = ''; 

        const veganCategoryDiv = document.createElement('div');
        veganCategoryDiv.classList.add('menu-category');

        const categoryHeader = document.createElement('h2');
        categoryHeader.innerText = getVeganCategoryLabel(language);
        const categoryDescription = document.createElement('p');
        categoryDescription.innerText = getVeganDescription(language);

        veganCategoryDiv.appendChild(categoryHeader);
        veganCategoryDiv.appendChild(categoryDescription);

        for (let category in data) {
            if (data[category].items) {
                data[category].items.forEach(item => {
                    if (item.vegan === 'yes') {
                        createMenuItem(item, veganCategoryDiv);
                    }
                });
            }
        }

        menuContent.appendChild(veganCategoryDiv);
    }

    // Function to load gluten-free items from all categories
    function loadGlutenFreeItems(language, data) {
        menuContent.innerHTML = ''; 

        const glutenFreeCategoryDiv = document.createElement('div');
        glutenFreeCategoryDiv.classList.add('menu-category');

        const categoryHeader = document.createElement('h2');
        categoryHeader.innerText = getGlutenFreeCategoryLabel(language);
        const categoryDescription = document.createElement('p');
        categoryDescription.innerText = getGlutenFreeDescription(language);

        glutenFreeCategoryDiv.appendChild(categoryHeader);
        glutenFreeCategoryDiv.appendChild(categoryDescription);

        for (let category in data) {
            if (data[category].items) {
                data[category].items.forEach(item => {
                    if (item.glutenfree === 'yes') {
                        createMenuItem(item, glutenFreeCategoryDiv);
                    }
                });
            }
        }

        menuContent.appendChild(glutenFreeCategoryDiv);
    }

    // Function to get the localized label for "Vegan" category
    function getVeganCategoryLabel(language) {
        switch(language) {
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
        switch(language) {
            case 'fr':
                return 'Options véganes délicieuses de toutes les catégories';
            case 'es':
                return 'Opciones veganas deliciosas de todas las categorías';
            default:
                return 'Delicious vegan options from all categories';
        }
    }

    // Function to get the localized label for "Gluten-Free" category
    function getGlutenFreeCategoryLabel(language) {
        switch(language) {
            case 'fr':
                return 'Sans Gluten';
            case 'es':
                return 'Sin Gluten';
            default:
                return 'Gluten-Free';
        }
    }

    // Function to get the localized description for "Gluten-Free" category
    function getGlutenFreeDescription(language) {
        switch(language) {
            case 'fr':
                return 'Options sans gluten de toutes les catégories. Veuillez vérifier avec le serveur lors de la commande.';
            case 'es':
                return 'Opciones sin gluten de todas las categorías. Por favor, verifique con el camarero al realizar su pedido.';
            default:
                return 'Delicious gluten-free options from all categories. Please double-check with the server when placing your order.';
        }
    }

    // Function to show the meal detail
    function showMealDetail(image, name, description, price) {
        previousScrollPosition = window.pageYOffset;
        menuContent.classList.add('d-none');
        mealImage.src = image;
        mealName.innerText = name;
        mealDescription.innerText = description;
        mealPrice.innerText = price;
        mealDetail.classList.remove('d-none');
        window.scrollTo(0, 0);
    }

    // Event listener to return to the menu on clicking the detail view
    mealDetail.addEventListener('click', (event) => {
        if (event.target === mealDetail || !event.target.closest('#closeMealDetail')) {
            mealDetail.classList.add('d-none');
            menuContent.classList.remove('d-none');
            window.scrollTo(0, previousScrollPosition);
        }
    });

    // Close button functionality for meal detail
    if (closeMealDetail) {
        closeMealDetail.addEventListener('click', (event) => {
            event.stopPropagation();
            mealDetail.classList.add('d-none');
            menuContent.classList.remove('d-none');
            window.scrollTo(0, previousScrollPosition);
        });
    }

    // Add change event listener for language selection
    languageSelect.addEventListener('change', (e) => {
        loadMenuData(e.target.value);
    });

    // Initial menu load for the default language
    loadMenuData(languageSelect.value);
});