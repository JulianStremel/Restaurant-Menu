const menuData = {
    en: {
        categories: {
            "Salads": [
                { name: "Crunchy Salad (Goat Cheese)", price: "€14", description: "Crispy salad with goat cheese", image: "images/Salads-goat-cheese.jpeg" },
                { name: "Caesar Salad (Chicken)", price: "€14", description: "Classic Caesar salad with chicken", image: "images/salad2.jpg" },
                { name: "Valencian Salad (Tuna)", price: "€12", description: "Traditional Valencian salad with tuna", image: "images/Salads-valenciana.jpeg" },
                { name: "Vegetarian Salad", price: "€12", description: "Fresh mixed salad with vegetables", image: "images/salad4.jpg" },
                { name: "Zucchini Carpaccio", price: "€12", description: "Zucchini slices with olive oil and seasoning", image: "images/salad5.jpg" }
            ],
            "Starters": [
                { name: "Tomato & Garlic Bread", price: "€4.80", description: "Toasted bread with tomato and ajoaceite", image: "images/starter1.jpg" },
                { name: "Fried Eggplant with Honey", price: "€9.80", description: "Eggplant fries drizzled with honey", image: "images/starter2.jpg" },
                { name: "Fried Calamari", price: "€9.90", description: "Crispy calamari with a side of lemon", image: "images/starter3.jpg" },
                { name: "Iberian Ham Croquettes", price: "€9.60", description: "Iberian ham croquettes, crispy and delicious", image: "images/starter4.jpg" },
                { name: "Cheese and Bacon Fries", price: "€9.90", description: "Fries topped with gouda cheese and bacon", image: "images/starter5.jpg" }
            ],
            "Combinations": [
                { name: "Montanejos Cold Cuts", price: "€11", description: "Selection of cold cuts from Montanejos", image: "images/comb1.jpg" },
                { name: "Grilled Loin", price: "€11", description: "Grilled pork loin served with fries", image: "images/comb2.jpg" },
                { name: "Breaded Chicken", price: "€11", description: "Breaded chicken fillet served with fries and a fried egg", image: "images/Combination-chicken.jpeg" },
                { name: "Grilled Sepia", price: "€16", description: "Grilled sepia served with garlic sauce", image: "images/comb4.jpg" },
                { name: "Rebosa Fried Calamari", price: "€13", description: "Fried calamari with a lemon wedge", image: "images/Combination-calamary.jpeg" }
            ],
            "House Specialties": [
                { name: "Soria Torrezno", price: "€5.50", description: "Crispy pork belly from Soria", image: "images/Specialties-Pork-skin.jpeg" },
                { name: "Pork Cheeks", price: "€15.50", description: "Pork cheeks with fried potatoes", image: "images/Specialties-pork-cheaks.jpeg" },
                { name: "Octopus", price: "€18", description: "Octopus, special recipe of the village", image: "images/Specialties-octopus.jpeg" },
                { name: "Oxtail Stew", price: "€18", description: "Slow-cooked oxtail in red wine sauce", image: "images/Specialties-oxtail.jpeg" },
                { name: "600g Ribeye Steak", price: "€28", description: "Grilled ribeye steak, perfectly cooked", image: "images/Specialties-ribeye.jpeg" }
            ],
            "Burgers": [
                { name: "House Special Burger", price: "€12", description: "Beef burger with fried egg, bacon, and caramelized onions", image: "images/burger1.jpg" },
                { name: "Goat Cheese Burger", price: "€12", description: "Beef burger with goat cheese and mustard sauce", image: "images/burger2.jpg" },
                { name: "Montanejos Adventure Burger", price: "€12", description: "Beef burger with bacon, egg, and special sauce", image: "images/burger3.jpg" },
                { name: "Vegetarian Burger", price: "€12", description: "Falafel burger with caramelized onions and cheese", image: "images/burger4.jpg" },
                { name: "Vegan Burger", price: "€12", description: "Quinoa burger with roasted vegetables and tomato", image: "images/burger5.jpg" }
            ],
            "Subs": [
                { name: "Chivito Especial", price: "€11", description: "Lettuce, tomato, cheese, bacon, fried egg, and ham", image: "images/sub1.jpg" },
                { name: "Polvorilla", price: "€11", description: "Tomato, ham, cheese, and bacon on a toasted bun", image: "images/sub2.jpg" },
                { name: "Alex Sub", price: "€10", description: "Gouda cheese, bacon, lomo, and fries", image: "images/sub3.jpg" },
                { name: "Héctor Sub", price: "€10", description: "Caramelized onions, bacon, and melted cheese", image: "images/sub4.jpg" }
            ],
            "Sandwiches": [
                { name: "Andrea", price: "€8", description: "Ham, lettuce, tomato, and pickles", image: "images/sandwich1.jpg" },
                { name: "Tuna Sandwich", price: "€7", description: "Tuna, lettuce, and olives in a toasted sandwich", image: "images/sandwich2.jpg" },
                { name: "Mixed Sandwich", price: "€4", description: "Simple ham and cheese sandwich", image: "images/sandwich3.jpg" }
            ],
            "Burritos": [
                { name: "D-Lux Burrito", price: "€8.50", description: "Chicken, lettuce, tomato, and bacon wrapped in a burrito", image: "images/burrito1.jpg" },
                { name: "Tejano Burrito", price: "€8.50", description: "Eggplant, zucchini, tomato, and chicken strips", image: "images/burrito2.jpg" }
            ],
            "Wines": [
                { name: "Bobal Rosé", price: "€16", description: "Finca del Mar Rosado", image: "images/wine1.jpg" },
                { name: "Bobal Blanco", price: "€16", description: "Finca del Mar Blanco", image: "images/wine2.jpg" },
                { name: "Melior Matarromera", price: "€20", description: "Ribera del Duero", image: "images/wine3.jpg" }
            ]
        }
    },
    fr: {
        categories: {
            "Salades": [
                { name: "Salade Croquante (Fromage de chèvre)", price: "€14", description: "Salade croquante avec du fromage de chèvre", image: "images/Salads-goat-cheese.jpeg" },
                { name: "Salade César (Poulet)", price: "€14", description: "Salade César classique avec poulet", image: "images/salad2.jpg" },
                { name: "Salade Valencienne (Thon)", price: "€12", description: "Salade valencienne traditionnelle avec du thon", image: "images/Salads-valenciana.jpeg" },
                { name: "Salade Végétarienne", price: "€12", description: "Salade mixte avec des légumes", image: "images/salad4.jpg" },
                { name: "Carpaccio de Courgette", price: "€12", description: "Tranches de courgette avec de l'huile d'olive", image: "images/salad5.jpg" }
            ],
            "Entrées": [
                { name: "Pain Tomate et Ajoaceite", price: "€4.80", description: "Pain grillé avec tomate et ajoaceite", image: "images/starter1.jpg" },
                { name: "Aubergines Frites au Miel", price: "€9.80", description: "Aubergines frites avec du miel", image: "images/starter2.jpg" },
                { name: "Calamars Frits", price: "€9.90", description: "Calamars frits croustillants", image: "images/starter3.jpg" },
                { name: "Croquettes de Jambon Ibérique", price: "€9.60", description: "Croquettes de jambon ibérique", image: "images/starter4.jpg" },
                { name: "Frites au Fromage et Bacon", price: "€9.90", description: "Frites garnies de fromage gouda et de bacon", image: "images/starter5.jpg" }
            ],
            "Combinaisons": [
                { name: "Charcuterie de Montanejos", price: "€11", description: "Sélection de charcuteries de Montanejos", image: "images/comb1.jpg" },
                { name: "Longe Grillé", price: "€11", description: "Longe de porc grillée servie avec des frites", image: "images/comb2.jpg" },
                { name: "Poulet Pané", price: "€11", description: "Escalope de poulet panée avec frites et un oeuf frit", image: "images/Combination-chicken.jpeg" },
                { name: "Seiche Grillée", price: "€16", description: "Seiche grillée avec sauce à l'ail", image: "images/comb4.jpg" },
                { name: "Calamars Frits Rebosa", price: "€13", description: "Calamars frits avec un quartier de citron", image: "images/comb5.jpg" }
            ],
            "Spécialités de la Maison": [
                { name: "Morceau de Lard de Soria", price: "€5.50", description: "Lard croustillant de Soria", image: "images/Specialties-Pork-skin.jpeg" },
                { name: "Trio de Brioche", price: "€12", description: "Sandwichs briochés avec garnitures assorties", image: "images/special2.jpg" },
                { name: "Poulpe, recette du village", price: "€18", description: "Poulpe recette du village", image: "images/Specialties-octopus.jpeg" },
                { name: "Ragoût de Queue de Boeuf", price: "€18", description: "Queue de boeuf mijotée au vin rouge", image: "images/Specialties-oxtail.jpeg" },
                { name: "Côte de Boeuf 600g", price: "€28", description: "Côte de boeuf grillée, parfaitement cuite", image: "images/Specialties-ribeye.jpeg" }
            ]
            // Add other categories following the same structure as English
        }
    },
    es: {
        categories: {
            "Ensaladas": [
                { name: "Ensalada Crujiente (Queso de cabra)", price: "€14", description: "Ensalada crujiente con queso de cabra", image: "images/Salads-goat-cheese.jpeg" },
                { name: "Ensalada César (Pollo)", price: "€14", description: "Ensalada César clásica con pollo", image: "images/Combination-chicken.jpeg" },
                { name: "Ensalada Valenciana (Atún)", price: "€12", description: "Ensalada valenciana con atún", image: "images/Salads-valenciana.jpeg" },
                { name: "Ensalada Vegetariana", price: "€12", description: "Ensalada mixta con verduras frescas", image: "images/salad4.jpg" },
                { name: "Carpaccio de Calabacín", price: "€12", description: "Rodajas de calabacín con aceite de oliva", image: "images/salad5.jpg" }
            ],
            "Entrantes": [
                { name: "Pan con Tomate y Ajoaceite", price: "€4.80", description: "Pan tostado con tomate y ajoaceite", image: "images/starter1.jpg" },
                { name: "Berenjenas Fritas con Miel", price: "€9.80", description: "Berenjenas fritas con miel", image: "images/starter2.jpg" },
                { name: "Calamares Fritos", price: "€9.90", description: "Calamares fritos crujientes con limón", image: "images/starter3.jpg" },
                { name: "Croquetas de Jamón Ibérico", price: "€9.60", description: "Croquetas de jamón ibérico crujientes", image: "images/starter4.jpg" },
                { name: "Patatas con Queso y Bacon", price: "€9.90", description: "Patatas fritas cubiertas con queso gouda y bacon", image: "images/starter5.jpg" }
            ],
            "Combinados": [
                { name: "Embutidos Montanejos", price: "€11", description: "Embutidos variados con un huevo frito y patatas", image: "images/starter1.jpg" },
                { name: "Pulpo Vidigonero", price: "€18", description: "Pulpo Vidigonero", image: "images/Specialties-octopus.jpeg" },
                { name: "Pollo Empanado", price: "€11", description: "Pollo empanado con patatas y huevo frito", image: "images/Combination-chicken.jpeg" },
                { name: "Sepia Plancha", price: "€16", description: "Sepia a la plancha", image: "images/starter4.jpg" },
                { name: "Calamares Rebozados", price: "€13", description: "Calamares rebozados con patatas fritas", image: "images/Combination-calamary.jpeg" },
                { name: "Emperador Salsa Verde", price: "€15", description: "Pescado emperador con salsa verde", image: "images/Combination-swordfish.jpeg" }
            ]
            // Add other categories following the same structure as English
        }
    }
};
