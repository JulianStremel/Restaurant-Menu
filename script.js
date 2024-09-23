// Get the language selector dropdown and container for menu content
const languageSelect = document.getElementById('languageSelect');
const menuContent = document.getElementById('menuContent');

// Elements for detailed view
const mealDetail = document.getElementById('mealDetail');
const mealImage = document.getElementById('mealImage');
const mealName = document.getElementById('mealName');
const mealDescription = document.getElementById('mealDescription');
const mealPrice = document.getElementById('mealPrice');
const backToMenu = document.getElementById('backToMenu');

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

            // Add click event to both the image and the description for detailed view
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="me-3" style="width: 100px; height: 100px; cursor: pointer;" onclick="showMealDetail('${item.image}', '${item.name.replace(/'/g, "\\'")}', '${item.description.replace(/'/g, "\\'")}', '${item.price}')">
                <div style="cursor: pointer;" onclick="showMealDetail('${item.image}', '${item.name.replace(/'/g, "\\'")}', '${item.description.replace(/'/g, "\\'")}', '${item.price}')">
                    <h5>${item.name} - ${item.price}</h5>
                    <p>${item.description}</p>
                </div>
            `;

            categoryDiv.appendChild(itemDiv);
        });

        // Add the category with its items to the menu content
        menuContent.appendChild(categoryDiv);
    }
}

// Function to show the detailed view of a meal
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

// Handle language switch event
languageSelect.addEventListener('change', (e) => {
    loadMenuData(e.target.value);
});

// Event to return back to the menu
backToMenu.addEventListener('click', () => {
    // Hide the meal detail and show the menu content
    mealDetail.classList.add('d-none');
    menuContent.classList.remove('d-none');

    // Restore the previous scroll position
    window.scrollTo(0, previousScrollPosition);
});

// Make the entire detail view clickable to go back to the menu
mealDetail.addEventListener('click', () => {
    // Hide the meal detail and show the menu content
    mealDetail.classList.add('d-none');
    menuContent.classList.remove('d-none');

    // Restore the previous scroll position
    window.scrollTo(0, previousScrollPosition);
});

// Load default menu (English)
loadMenuData('en');
