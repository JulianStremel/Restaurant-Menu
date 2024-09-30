document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');
    const categorySelect = document.getElementById('categorySelect');
    const jumpToCategoryLabel = document.getElementById('jumpToCategoryLabel');
    const menuContent = document.getElementById('menuContent');
    const mealDetail = document.getElementById('mealDetail');
    const mealImage = document.getElementById('mealImage');
    const mealName = document.getElementById('mealName');
    const mealDescription = document.getElementById('mealDescription');
    const mealPrice = document.getElementById('mealPrice');
    let previousScrollPosition = 0;
    let currentItemIndex = 0;
    let currentCategoryItems = [];

    alert("New script is running!");

    // Function to truncate text
    function truncateText(text, maxLength) {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }

    // Function to load menu data
    function loadMenuData(language) {
        const data = menuData[language].categories;
        categorySelect.innerHTML = '';  

        updateCategoryLabel(language);

        // Populate categories from data
        for (let category in data) {
            const option = document.createElement('option');
            option.value = category;
            option.innerText = category;
            categorySelect.appendChild(option);
        }

        // Add Vegan category
        const veganOption = document.createElement('option');
        veganOption.value = 'vegan';
        veganOption.innerText = getVeganCategoryLabel(language);
        categorySelect.appendChild(veganOption);

        // Add Gluten-Free category
        const glutenFreeOption = document.createElement('option');
        glutenFreeOption.value = 'glutenfree';
        glutenFreeOption.innerText = getGlutenFreeCategoryLabel(language);
        categorySelect.appendChild(glutenFreeOption);

        // Load first category if there are any options
        if (categorySelect.options.length > 0) {
            loadCategoryItems(categorySelect.options[0].value, data);
        }

        // Event listener for category change
        categorySelect.addEventListener('change', (e) => {
            if (!mealDetail.classList.contains('d-none')) {
                closeDetailView();
            }
            const selectedCategory = e.target.value;
            switch(selectedCategory) {
                case 'vegan':
                    loadVeganItems(language, data);
                    break;
                case 'glutenfree':
                    loadGlutenFreeItems(language, data);
                    break;
                default:
                    loadCategoryItems(selectedCategory, data);
                    break;
            }
        });
    }

    // Function to update the "Jump to a category" label based on language
    function updateCategoryLabel(language) {
        switch (language) {
            case 'fr':
                jumpToCategoryLabel.innerText = 'Aller à une catégorie';
                break;
            case 'es':
                jumpToCategoryLabel.innerText = 'Saltar a una categoría';
                break;
            default:
                jumpToCategoryLabel.innerText = 'Jump to a category';
                break;
        }
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

        currentCategoryItems = categoryData.items;  // Store the current category items for swipe functionality

        (currentCategoryItems || []).forEach((item, index) => {
            createMenuItem(item, categoryDiv, index);
        });

        menuContent.appendChild(categoryDiv);
    }

    // Function to create a menu item
    function createMenuItem(item, categoryDiv, index) {
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
            currentItemIndex = index;  // Set the current item index for swipe functionality
            showMealDetail(item.image, item.name, item.description, item.price);
        });

        const itemDescription = document.createElement('div');
        itemDescription.style.cursor = 'pointer';
        const truncatedDescription = truncateText(item.description, 100);
        itemDescription.innerHTML = `<h5>${item.name} - ${item.price}</h5><p>${truncatedDescription}</p>`;
        itemDescription.addEventListener('click', () => {
            currentItemIndex = index;
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
                return 'Options véganes de toutes les catégories';
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
                return 'Gluten-free options from all categories. Please check with server when ordering.';
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
        languageSelect.disabled = true;  // Disable language change in detail view
    }

    // Function to close detail view
    function closeDetailView() {
        mealDetail.classList.add('d-none');
        menuContent.classList.remove('d-none');
        window.scrollTo(0, previousScrollPosition);
        languageSelect.disabled = false; // Enable language change when leaving detail view
    }

    // Swipe detection for navigation between items
    let touchStartY = 0;
    let touchEndY = 0;

    mealDetail.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    });

    mealDetail.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeDistance = touchStartY - touchEndY;
        if (swipeDistance > 50) {
            // Swipe up for next item
            if (currentItemIndex < currentCategoryItems.length - 1) {
                currentItemIndex++;
                const nextItem = currentCategoryItems[currentItemIndex];
                showMealDetail(nextItem.image, nextItem.name, nextItem.description, nextItem.price);
            }
        } else if (swipeDistance < -50) {
            // Swipe down for previous item
            if (currentItemIndex > 0) {
                currentItemIndex--;
                const previousItem = currentCategoryItems[currentItemIndex];
                showMealDetail(previousItem.image, previousItem.name, previousItem.description, previousItem.price);
            }
        }
    }

    // Event listener to return to menu from detail view
    mealDetail.addEventListener('click', (event) => {
        if (event.target === mealDetail || event.target.closest('.meal-detail-content')) {
            closeDetailView();
        }
    });

    // Initial menu load for the default language
    loadMenuData(languageSelect.value);

    // Add change event listener for language selection
    languageSelect.addEventListener('change', (e) => {
        if (mealDetail.classList.contains('d-none')) {
            loadMenuData(e.target.value);
        }
    });
});
