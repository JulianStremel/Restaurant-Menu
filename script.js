document.addEventListener('DOMContentLoaded', () => {
    // Get the language selector dropdown and container for menu content
    const languageSelect = document.getElementById('languageSelect');
    const menuContent = document.getElementById('menuContent');

    // Elements for detailed view
    const mealDetail = document.getElementById('mealDetail');
    const mealImage = document.getElementById('mealImage');
    const mealName = document.getElementById('mealName');
    const mealDescription = document.getElementById('mealDescription');
    const mealPrice = document.getElementById('mealPrice');

    // Variable to store the scroll position
    let previousScrollPosition = 0;

    // Function to load the menu data based on the selected language
    function loadMenuData(language) {
        const data = menuData[language].categories;
        menuContent.innerHTML = ''; // Clear previous content

        // Loop through each category in the menu
        for (let category in data) {
            const categoryData = data[category];

            // Create a category div
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('menu-category');

            // Add the category title and description
            const categoryHeader = document.createElement('h2');
            categoryHeader.innerText = category;
            const categoryDescription = document.createElement('p');
            categoryDescription.innerText = categoryData.description; // Insert category description

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
    }

    // Function to show the detailed view of a meal (global scope now)
    function showMealDetail(image, name, description, price) {
        // Save the current scroll position
        previousScrollPosition = window.scrollY;

        // Hide the main menu
        menuContent.classList.add('d-none');

        // Populate the meal detail section
        mealImage.src = image;
        mealName.innerText = name;
        mealDescription.innerText = description;
        mealPrice.innerText = price;

        // Show the meal detail section
        mealDetail.classList.remove('d-none');
    }

    // Make the entire detail view clickable to go back to the menu
    mealDetail.addEventListener('click', () => {
        // Hide the meal detail and show the menu content
        mealDetail.classList.add('d-none');
        menuContent.classList.remove('d-none');

        // Restore the previous scroll position
        window.scrollTo(0, previousScrollPosition);
    });

    // Handle language switch event
    languageSelect.addEventListener('change', (e) => {
        loadMenuData(e.target.value);
    });

    // Load default menu (English)
    loadMenuData('en');
});
