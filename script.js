document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');
    const categorySelect = document.getElementById('categorySelect'); // List box for categories
    console.log(categorySelect); // This should output the <select> element to the console
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
            console.log(`Adding category: ${category}`); // This should log the category names
            const option = document.createElement('option');
            option.value = category;
            option.innerText = category;
            categorySelect.appendChild(option);
        }

        // Load the first category by default
        if (categorySelect.options.length > 0) {
            loadCategoryItems(categorySelect.options[0].value, data);
        }

        // Add change event listener for category selection
        categorySelect.addEventListener('change', (e) => {
            const selectedCategory = e.target.value;
            loadCategoryItems(selectedCategory, data);
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

            categoryDiv.appendChild(itemDiv);
        });

        // Add the category with its items to the menu content
        menuContent.appendChild(categoryDiv);
    }

    function showMealDetail(image, name, description, price) {
        previousScrollPosition = window.scrollY;
        menuContent.classList.add('d-none');
        mealImage.src = image;
        mealName.innerText = name;
        mealDescription.innerText = description;
        mealPrice.innerText = price;
        mealDetail.classList.remove('d-none');
    }

    mealDetail.addEventListener('click', () => {
        mealDetail.classList.add('d-none');
        menuContent.classList.remove('d-none');
        window.scrollTo(0, previousScrollPosition);
    });

    languageSelect.addEventListener('change', (e) => {
        loadMenuData(e.target.value);
    });

    // Load default menu (English)
    loadMenuData('en');
});
