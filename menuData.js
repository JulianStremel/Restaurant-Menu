const menuData = {
    en: {
        categories: {
            "Salads": {
                description: "Fresh, vibrant salads made with seasonal ingredients and bold flavors.",
                items: [
                    { name: "Crunchy Salad (Goat Cheese)", price: "€14", description: "Crispy salad with goat cheese", image: "Salads-goat-cheese.jpeg" },
                    { name: "Caesar Salad (Chicken)", price: "€14", description: "Classic Caesar salad with chicken", image: "Salads-Caesar-salad.jpeg" },
                    { name: "Valencian Salad (Tuna)", price: "€12", description: "Traditional Valencian salad with tuna", image: "Salads-valenciana.jpeg" },
                    { name: "Vegetarian Salad", price: "€12", description: "Fresh mixed salad with vegetables", image: "salad4.jpg" },
                    { name: "Zucchini Carpaccio", price: "€12", description: "Zucchini slices with olive oil and seasoning", image: "Salads-zucchini-carpaccio.jpeg" }
                ]
            },
            "Starters / Tapas": {
                description: "A variety of small plates to share, perfect to start your meal.",
                items: [
                    { name: "Tomato & Garlic Bread", price: "€4.80", description: "Toasted bread with tomato and garlic butter", image: "Starters-bread-tomato-aioli.jpeg" },
                    { name: "Fried Eggplant with Honey", price: "€9.80", description: "Eggplant fries drizzled with honey", image: "Starters-fried-eggplant-with-honey.jpeg" },
                    { name: "Fried Calamari", price: "€9.90", description: "Crispy calamari with a side of lemon", image: "Starters-calamari.jpeg" },
                    { name: "Broken Eggs with Ham", price: "€9.90", description: "Eggs, Ham and fries", image: "Starters-broken-eggs-with-ham.jpeg" },
                    { name: "Iberian Ham Croquettes", price: "€9.60", description: "Iberian ham croquettes, crispy and delicious", image: "Starters-ham-croquettes.jpeg" },
                    { name: "Fries with Cheese and Bacon", price: "€9.90", description: "Fries topped with gouda cheese and bacon", image: "Starters-fries-gouda-cheese.jpeg" },
                    { name: "Cuttlefish", price: "€9.90", description: "Cuttlefish", image: "Starters-cuttlefish.jpeg" },
                    { name: "Patatas Bravas (Wedges)", price: "€9.90", description: "Patatas Bravas Wedges", image: "Starters-bravas-wedges.jpeg" },
                    { name: "Sweet fried Potatos with Roquefort", price: "€9.90", description: "A nice portion of sweet fried potatoes with melted Roquefort cheese", image: "Starters-sweet-fries-roquefort.jpeg" }
                ]
            },
            "Combo meals": {
                description: "Delicious combinations of our finest ingredients to satisfy your hunger.",
                items: [
                    { name: "Montanejos Cold Cuts", price: "€11", description: "Selection of cold cuts from Montanejos", image: "Combination-sausages.jpeg" },
                    { name: "Grilled Loin", price: "€11", description: "Grilled pork loin served with fries", image: "Combination-pork-loin.jpeg" },
                    { name: "Breaded Chicken", price: "€11", description: "Breaded chicken fillet served with fries and a fried egg", image: "Combination-chicken.jpeg" },
                    { name: "Grilled Cuttlefish", price: "€16", description: "Grilled cuttlefish served with garlic sauce", image: "Starters-cuttlefish.jpeg" },
                    { name: "Fried Calamari", price: "€13", description: "Fried calamari with fries and salad", image: "Combination-calamary.jpeg" }
                ]
            },
            "House Specialties": {
                description: "Signature dishes that showcase the culinary excellence of our restaurant.",
                items: [
                    { name: "Soria Torrezno", price: "€5.50", description: "Crispy pork belly from Soria", image: "Specialties-pork-skin.jpeg" },
                    { name: "Pork Cheeks", price: "€15.50", description: "Pork cheeks with fried potatoes", image: "Specialties-pork-cheeks.jpeg" },
                    { name: "Octopus", price: "€18", description: "Octopus, special recipe of the village", image: "Specialties-octopus.jpeg" },
                    { name: "Galiana Jumbo Prawns", price: "€22", description: "Galiana Jumbo Prawns", image: "Specialties-galiana-jumbo-prawns.jpeg" },
                    { name: "Slow-Braised Oxtail", price: "€18", description: "Slow-Braised Oxtail in a Rich Red Wine Reduction, Served with Elegant Seasonal Accompaniments", image: "Specialties-oxtail.jpeg" },
                    { name: "600g Ribeye Steak", price: "€28", description: "Grilled ribeye steak, perfectly cooked", image: "Specialties-ribeye.jpeg" },
                    { name: "Northern Eels with Clams", price: "€12.00", description: "Northern eels served with fresh clams", image: "Specialties-gulas.jpeg" }
                ]
            },
            "Burgers": {
                description: "For €3 extra, add fries to your burger for the perfect meal.",
                items: [
                    { name: "House Special Burger", price: "€12", description: "Beef burger with fried egg, bacon, and caramelized onions", image: "burger1.jpg" },
                    { name: "Goat Cheese Burger", price: "€12", description: "Beef burger with goat cheese and mustard sauce", image: "Burgers-goat-cheese-burger.jpeg" },
                    { name: "Montanejos Adventure chicken Burger", price: "€12", description: "Chicken burger with bacon, egg, and special sauce", image: "Burgers-chicken-burger.jpeg" },
                    { name: "Vegetarian Burger", price: "€12", description: "Falafel burger with caramelized onions and cheese", image: "Burgers-falafel-burger.jpeg" },
                    { name: "Vegan Burger", price: "€12", description: "Quinoa burger with roasted vegetables and tomato", image: "burger5.jpg" }
                ]
            },
            "Baguette Sandwiches": {
                description: "Classic baguette sandwiches packed with flavorful ingredients.",
                items: [
                    { name: "Chivito Especial", price: "€11", description: "Lettuce, tomato, cheese, bacon, fried egg, and ham", image: "sub1.jpg" },
                    { name: "Polvorilla", price: "€11", description: "Tomato, ham, cheese, and bacon on a toasted bun", image: "sub2.jpg" },
                    { name: "Alex Sub", price: "€10", description: "Gouda cheese, bacon, lomo, and fries", image: "sub3.jpg" },
                    { name: "Héctor Sub", price: "€10", description: "Caramelized onions, bacon, and melted cheese", image: "sub4.jpg" }
                ]
            },
            "Sandwiches": {
                description: "Delicious sandwiches for a quick and satisfying meal.",
                items: [
                    { name: "Andrea", price: "€8", description: "Ham, lettuce, tomato, and pickles", image: "sandwich1.jpg" },
                    { name: "Tuna Sandwich", price: "€7", description: "Tuna, lettuce, and olives in a toasted sandwich", image: "sandwich2.jpg" },
                    { name: "Mixed Sandwich", price: "€4", description: "Simple ham and cheese sandwich", image: "sandwich3.jpg" }
                ]
            },
            "Burritos": {
                description: "Hearty and flavorful burritos for a filling meal.",
                items: [
                    { name: "D-Lux Burrito", price: "€8.50", description: "Chicken, lettuce, tomato, and bacon wrapped in a burrito", image: "Burritos-d-lux.jpeg" },
                    { name: "Texan Burrito", price: "€8.50", description: "Eggplant, zucchini, tomato, and chicken strips", image: "burrito2.jpg" }
                ]
            },
            "Drinks": {
                description: "A refreshing selection of beverages to accompany your meal.",
                items: [
                    { name: "Tinto de Verano", price: "€2.50", description: "Refreshing red wine with soda", image: "Bebidas-tinto-de-verano.jpeg" },
                    { name: "Draft Beer (Caña)", price: "€1.70", description: "Draft beer - small", image: "Bebidas-cerveza-cana.jpeg" },
                    { name: "Draft Beer (Doble)", price: "€2.50", description: "Draft beer - medium", image: "Bebidas-cerveza-doble.jpeg" },
                    { name: "Draft Beer (Pint)", price: "€4", description: "Draft beer - large", image: "Bebidas-cerveza-tanque.jpeg" },
                    { name: "Bottled Beer", price: "€2.50", description: "Bottled beer - (non-alcoholic, toasted, lager, or radler)", image: "Bebidas-cerveza-tercio.jpeg" },
                    { name: "Coca Cola", price: "€2.50", description: "Coca Cola classic or Zero", image: "Bebidas-coca-cola.jpeg" },
                    { name: "Fanta Lemon-Orange", price: "€2.50", description: "Lemon or orange Fanta", image: "Bebidas-fanta.jpeg" },
                    { name: "Nestea, Aquarius", price: "€2.50", description: "Cold lemon tea", image: "Bebidas-nestea.jpeg" },
                    { name: "Bottled Juices", price: "€2", description: "Bottled juice: Pineapple, Peach, Orange", image: "Bebidas-zumo.jpeg" },
                    { name: "Small Water", price: "€2", description: "Bottled water 50cl", image: "Bebidas-agua-pequeña.jpeg" },
                    { name: "Large Water 1.5l", price: "€2.50", description: "Bottled water 1.5L", image: "Bebidas-agua-grande.jpeg" },
                    { name: "Sparkling Water", price: "€2", description: "Sparkling water", image: "Bebidas-agua-con-gas.jpeg" },
                    { name: "Tonic", price: "€2", description: "Tonic water", image: "Bebidas-tonica.jpeg" },
                    { name: "Espresso", price: "€1.20", description: "Espresso coffee", image: "Bebidas-cafe-solo.jpeg" },
                    { name: "Macchiato", price: "€1.40", description: "Macchiato coffee", image: "Bebidas-cafe-cortado.jpeg" },
                    { name: "Café con leche", price: "€1.60", description: "Coffee with milk", image: "Bebidas-cafe-con-leche.jpeg" },
                    { name: "Café Americano", price: "€2", description: "American coffee", image: "Bebidas-cafe-americano.jpeg" },
                    { name: "Hot Chocolate", price: "€1.50", description: "Hot Chocolate", image: "Bebidas-batido.jpeg" },
                    { name: "Tea and Infusions", price: "€1.50", description: "Tea and infusions", image: "Bebidas-infusiones.jpeg" },
                    { name: "Red Wine Glass", price: "€2.50", description: "Glass of red wine", image: "Bebidas-copa-tinto.jpeg" },
                    { name: "White Wine Glass", price: "€2.50", description: "Glass of white wine", image: "Bebidas-copa-blanco.jpeg" },
                    { name: "Rum & Coke", price: "€6", description: "Rum and Coca Cola", image: "Bebidas-cubata.jpeg" }
                ]
            },
            "Wines": {
                description: "Carefully selected wines to complement any meal.",
                items: [
                    { name: "Bobal Rosé", price: "€16", description: "Finca del Mar Rosado", image: "wine1.jpg" },
                    { name: "Bobal Blanco", price: "€16", description: "Finca del Mar Blanco", image: "wine2.jpg" },
                    { name: "Melior Matarromera", price: "€20", description: "Ribera del Duero", image: "wine3.jpg" }
                ]
            }
        }
    },
    fr: {
        categories: {
            "Salades": {
                description: "Des salades fraîches et vibrantes, préparées avec des ingrédients de saison et des saveurs audacieuses.",
                items: [
                    { name: "Salade Croquante (Fromage de chèvre)", price: "€14", description: "Salade croquante avec du fromage de chèvre", image: "Salads-goat-cheese.jpeg" },
                    { name: "Salade César (Poulet)", price: "€14", description: "Salade César classique avec poulet", image: "Salads-Caesar-salad.jpeg" },
                    { name: "Salade Valencienne (Thon)", price: "€12", description: "Salade valencienne traditionnelle avec du thon", image: "Salads-valenciana.jpeg" },
                    { name: "Salade Végétarienne", price: "€12", description: "Salade mixte avec des légumes", image: "salad4.jpg" },
                    { name: "Carpaccio de Courgette", price: "€12", description: "Tranches de courgette avec de l'huile d'olive", image: "Salads-zucchini-carpaccio.jpeg" }
                ]
            },
            "Entrées / Tapas": {
                description: "Une variété de petits plats à partager, parfaits pour commencer votre repas.",
                items: [
                    { name: "Pain Tomate et Ajoaceite", price: "€4.80", description: "Pain grillé avec tomate et ajoaceite", image: "Starters-bread-tomato-aioli.jpeg" },
                    { name: "Aubergines Frites au Miel", price: "€9.80", description: "Aubergines frites avec miel", image: "Starters-fried-eggplant-with-honey.jpeg" },
                    { name: "Calamars Frits à l'Andalouse", price: "€9.90", description: "Calamars frits à la façon andalouse", image: "Starters-calamari.jpeg" },
                    { name: "Œufs Brouillés avec Jambon", price: "€9.60", description: "Œufs frits avec jambon sur des frites", image: "Starters-broken-eggs-with-ham.jpeg" },
                    { name: "Croquettes de Morue", price: "€9.00", description: "Croquettes croustillantes de morue", image: "Starters-ham-croquettes.jpeg" },
                    { name: "Croquettes de Jambon Ibérique", price: "€9.00", description: "Croquettes croustillantes de jambon ibérique", image: "Starters-ham-croquettes.jpeg" },
                    { name: "Pommes de Terre au Gouda et Bacon", price: "€9.90", description: "Pommes de terre frites couvertes de gouda et bacon", image: "Starters-fries-gouda-cheese.jpeg" },
                    { name: "Frites de Patate Douce au Roquefort", price: "€9.00", description: "Frites de patate douce avec sauce roquefort", image: "Starters-sweet-fries-roquefort.jpeg" },
                    { name: "Plateau de Jambon Serrano Bodega", price: "€13.00", description: "Jambon serrano bodega servi sur une planche", image: "starter10.jpg" },
                    { name: "Seiche Entière à la Plancha", price: "€14.00", description: "Seiche entière grillée avec ail et persil", image: "Starters-cuttlefish.jpeg" },
                    { name: "Patatas Bravas", price: "€9.50", description: "Pommes de terre frites avec sauce brava", image: "Starters-bravas-wedges.jpeg" }
                ]
            },
            "Assièttes Combinées": {
                description: "Délicieuses combinaisons de nos meilleurs ingrédients pour satisfaire votre faim.",
                items: [
                    { name: "Charcuterie de Montanejos", price: "€11", description: "Sélection de charcuteries de Montanejos", image: "Combination-sausages.jpeg" },
                    { name: "Longe de Porc Grillée", price: "€11", description: "Longe de porc grillée servie avec des frites", image: "Combination-pork-loin.jpeg" },
                    { name: "Poulet Pané", price: "€11", description: "Escalope de poulet panée avec frites et un oeuf frit", image: "Combination-chicken.jpeg" },
                    { name: "Seiche Grillée", price: "€16", description: "Seiche grillée avec sauce à l'ail", image: "Starters-cuttlefish.jpeg" },
                    { name: "Calamars Frits", price: "€13", description: "Calamars frits avec salade et frites", image: "Combination-calamary.jpeg" },
                    { name: "Espadon Sauce Verte", price: "€15.00", description: "Filet d'espadon accompagné de sauce verte, salade et frites", image: "Combination-swordfish.jpeg" }
                ]
            },
            "Spécialités de la maison": {
                description: "Plats signatures qui montrent l'excellence culinaire de notre restaurant.",
                items: [
                    { name: "Lard de Soria", price: "€5.50", description: "Lard croustillants de la région de Soria", image: "Specialties-pork-skin.jpeg" },
                    { name: "Queue de Taureau au Vin Rouge", price: "€16.90", description: "Queue de taureau mijotée au vin rouge", image: "Specialties-oxtail.jpeg" },
                    { name: "Joue de Porc Mijares", price: "€15.50", description: "Joue de porc mijotée avec des frites", image: "Specialties-pork-cheeks.jpeg" },
                    { name: "Entrecote de Boeuf 600g", price: "€28.00", description: "Entrecote de boeuf de 600g, grillée à point", image: "Specialties-ribeye.jpeg" },
                    { name: "Poulpe Vidigonero", price: "€18.00", description: "Poulpe grillé à la façon Vidigonero (recette du chef)", image: "Specialties-octopus.jpeg" },
                    { name: "Gambas Galiana", price: "€22.00", description: "Gambas géantes style Galiana", image: "Specialties-galiana-jumbo-prawns.jpeg" },
                    { name: "Gulas du Nord avec Palourdes", price: "€12.00", description: "Gulas du nord accompagnées de palourdes fraîches", image: "Specialties-gulas.jpeg" },
                    { name: "Patatas Twister", price: "€9.00", description: "Pommes de terre en spirale avec diverses sauces", image: "special5.jpg" },
                    { name: "Pain Farci aux Charcuteries", price: "€11.00", description: "Pain farci aux charcuteries variées", image: "special6.jpg" }
                ]
            },
            "Hamburgers": {
                description: "Pour 3€ supplémentaires, ajoutez des frites à votre hamburger pour un repas parfait.",
                items: [
                    { name: "Spécial de la Maison", price: "€12.00", description: "Hamburger de bœuf avec laitue, tomate, oignon caramélisé, fromage, bacon et œuf frit", image: "burger1.jpg" },
                    { name: "Fromage de Chèvre", price: "€12.00", description: "Hamburger de bœuf avec fromage de chèvre et sauce à la moutarde", image: "Burgers-goat-cheese-burger.jpeg" },
                    { name: "Montanejos Adventure au Poulet", price: "€12.00", description: "Hamburger de poulet avec bacon, mayonnaise, laitue, tomate, et fromage", image: "Burgers-chicken-burger.jpeg" },
                    { name: "Végétarien", price: "€12.00", description: "Hamburger de falafel avec oignon caramélisé et fromage", image: "Burgers-falafel-burger.jpeg" },
                    { name: "Vegan", price: "€12.00", description: "Hamburger végan de quinoa avec légumes grillés", image: "burger5.jpg" }
                ]
            },
            "Burritos": {
                description: "Des burritos copieux et savoureux pour un repas complet.",
                items: [
                    { name: "Burrito D-Lux", price: "€8.50", description: "Poulet, laitue, tomate et bacon enveloppés dans un burrito", image: "Burritos-d-lux.jpeg" },
                    { name: "Burrito Texan", price: "€8.50", description: "Aubergine, courgette, tomate et morceaux de poulet", image: "burrito2.jpg" }
                ]
            },
            "Boissons": {
                description: "Une sélection de boissons rafraîchissantes pour accompagner votre repas.",
                items: [
                    { name: "Tinto de Verano", price: "€2.50", description: "Vin rouge rafraîchissant avec soda", image: "Bebidas-tinto-de-verano.jpeg" },
                    { name: "Bière pression (Petit)", price: "€1.70", description: "Bière pression - petite", image: "Bebidas-cerveza-cana.jpeg" },
                    { name: "Bière pression (Moyen)", price: "€2.50", description: "Bière pression - moyenne", image: "Bebidas-cerveza-doble.jpeg" },
                    { name: "Bière pression (Grand)", price: "€4", description: "Bière pression - grande", image: "Bebidas-cerveza-tanque.jpeg" },
                    { name: "Bière bouteille 300ml", price: "€2.50", description: "Bière en bouteille (sans alcool, brune, blonde ou radler)", image: "Bebidas-cerveza-tercio.jpeg" },
                    { name: "Coca", price: "€2.50", description: "Coca classique ou Zéro", image: "Bebidas-coca-cola.jpeg" },
                    { name: "Fanta Citron-Orange", price: "€2.50", description: "Fanta citron ou orange", image: "Bebidas-fanta.jpeg" },
                    { name: "Nestea, Aquarius", price: "€2.50", description: "Thé froid au citron", image: "Bebidas-nestea.jpeg" },
                    { name: "Jus en bouteille", price: "€2", description: "Jus en bouteille : Ananas, Pêche, Orange", image: "Bebidas-zumo.jpeg" },
                    { name: "Petite bouteille d'Eau", price: "€2", description: "Bouteille d'eau 50cl", image: "Bebidas-agua-pequeña.jpeg" },
                    { name: "Grande bouteille d'Eau 1.5l", price: "€2.50", description: "Bouteille d'eau 1.5L", image: "Bebidas-agua-grande.jpeg" },
                    { name: "Eau Pétillante", price: "€2", description: "Eau gazeuse", image: "Bebidas-agua-con-gas.jpeg" },
                    { name: "Tonic", price: "€2", description: "Eau tonique", image: "Bebidas-tonica.jpeg" },
                    { name: "Verre de Vin Rouge", price: "€2.50", description: "Verre de vin rouge", image: "Bebidas-copa-tinto.jpeg" },
                    { name: "Verre de Vin Blanc", price: "€2.50", description: "Verre de vin blanc", image: "Bebidas-copa-blanco.jpeg" },
                    { name: "Expresso", price: "€1.20", description: "Café expresso", image: "Bebidas-cafe-solo.jpeg" },
                    { name: "Café Macchiato", price: "€1.40", description: "Café macchiato", image: "Bebidas-cafe-cortado.jpeg" },
                    { name: "Café au Lait", price: "€1.60", description: "Café au lait", image: "Bebidas-cafe-con-leche.jpeg" },
                    { name: "Café Americano", price: "€2", description: "Café allongé", image: "Bebidas-cafe-americano.jpeg" },
                    { name: "Chocolat chaud", price: "€1.50", description: "Milkshake", image: "Bebidas-batido.jpeg" },
                    { name: "Thé et Infusions", price: "€1.50", description: "Thé et infusions", image: "Bebidas-infusiones.jpeg" },
                    { name: "Rhum & Coca", price: "€6", description: "Rhum et Coca Cola", image: "Bebidas-cubata.jpeg" }
                ]
            },
            "Vins": {
                description: "Des vins soigneusement sélectionnés pour accompagner tout repas.",
                items: [
                    { name: "Bobal Rosé", price: "€16", description: "Finca del Mar Rosado", image: "wine1.jpg" },
                    { name: "Bobal Blanco", price: "€16", description: "Finca del Mar Blanco", image: "wine2.jpg" },
                    { name: "Melior Matarromera", price: "€20", description: "Ribera del Duero", image: "wine3.jpg" }
                ]
            }
        }
    },
    es: {
        categories: {
            "Ensaladas": {
                description: "Frescas y vibrantes ensaladas elaboradas con ingredientes de temporada y sabores intensos.",
                items: [
                    { name: "Ensalada Crujiente (Queso de cabra)", price: "€14", description: "Ensalada crujiente con queso de cabra", image: "Salads-goat-cheese.jpeg" },
                    { name: "Ensalada César (Pollo)", price: "€14", description: "Ensalada César clásica con pollo", image: "Salads-Caesar-salad.jpeg" },
                    { name: "Ensalada Valenciana (Atún)", price: "€12", description: "Ensalada valenciana con atún", image: "Salads-valenciana.jpeg" },
                    { name: "Ensalada Vegetariana", price: "€12", description: "Ensalada mixta con verduras frescas", image: "salad4.jpg" },
                    { name: "Carpaccio de Calabacín", price: "€12", description: "Rodajas de calabacín con aceite de oliva", image: "Salads-zucchini-carpaccio.jpeg" }
                ]
            },
            "Entrantes / Tapas": {
                description: "Una variedad de pequeños platos para compartir, perfectos para comenzar tu comida.",
                items: [
                    { name: "Pan con Tomate y Ajoaceite", price: "€4.80", description: "Pan tostado con tomate y ajoaceite", image: "Starters-bread-tomato-aioli.jpeg" },
                    { name: "Berenjenas Fritas con Miel", price: "€9.80", description: "Berenjenas fritas con miel", image: "Starters-fried-eggplant-with-honey.jpeg" },
                    { name: "Calamares a la andaluza", price: "€9.90", description: "Calamares fritos al estilo andaluz", image: "Starters-calamari.jpeg" },
                    { name: "Huevos Rotos con Jamón", price: "€9.60", description: "Huevos fritos con jamón sobre patatas fritas", image: "Starters-broken-eggs-with-ham.jpeg" },
                    { name: "Croquetas de Bacalao", price: "€9.00", description: "Croquetas de bacalao crujientes", image: "Starters-ham-croquettes.jpeg" },
                    { name: "Croquetas de Jamón Ibérico", price: "€9.00", description: "Croquetas de jamón ibérico crujientes", image: "Starters-ham-croquettes.jpeg" },
                    { name: "Patatas con Queso Gouda y Bacon", price: "€9.90", description: "Patatas fritas cubiertas con queso gouda y bacon", image: "Starters-fries-gouda-cheese.jpeg" },
                    { name: "Tirás Boniato con Roquefort", price: "€9.00", description: "Tiras de boniato frito con salsa roquefort", image: "Starters-sweet-fries-roquefort.jpeg" },
                    { name: "Tabla Jamón Serrano Bodega", price: "€13.00", description: "Jamón serrano bodega servido en tabla", image: "starter10.jpg" },
                    { name: "Sepia Enterita a la Plancha", price: "€14.00", description: "Sepia entera a la plancha con ajo y perejil", image: "Starters-cuttlefish.jpeg" },
                    { name: "Patatas Bravas", price: "€9.50", description: "Patatas fritas con salsa brava", image: "Starters-bravas-wedges.jpeg" }
                ]
            },
            
            "Combinados": {
               description: "Disfruta de nuestras combinaciones únicas de platos principales con guarniciones para una comida completa y satisfactoria.",
                    items: [
                        { name: "Embutidos Montanejos", "price": "€11.00", "description": "Surtido de embutidos variados de Montanejos", "image": "Combination-sausages.jpeg" },
                        { name: "Lomo Caña", "price": "€11.00", "description": "Lomo de cerdo servido con patatas fritas", "image": "Combination-pork-loin.jpeg" },
                        { name: "Pollo Empanado", "price": "€11.00", "description": "Pollo empanado con patatas fritas y huevo frito", "image": "Combination-chicken.jpeg" },
                        { name: "Sepia Plancha", "price": "€16.00", "description": "Sepia a la plancha con ajo y perejil", "image": "Starters-cuttlefish.jpeg" },
                        { name: "Calamares Rebozados", "price": "€13.00", "description": "Calamares rebozados con patatas fritas y ensalada", "image": "Combination-calamary.jpeg" },
                        { name: "Emperador Salsa Verde", "price": "€15.00", "description": "Filete de emperador acompañado con salsa verde", "image": "Combination-swordfish.jpeg" }
                ]
            },
            
            
            
            "Especiales Mijares": {
                description: "Platos especiales que muestran la excelencia culinaria de nuestro restaurante.",
                items: [
                    { name: "Torrezno Denominación Soria", price: "€5.50", description: "Torreznos crujientes de la región de Soria", image: "Specialties-pork-skin.jpeg" },
                    { name: "Rabo de Toro al Vino Tinto", price: "€16.90", description: "Rabo de toro guisado al vino tinto", image: "Specialties-oxtail.jpeg" },
                    { name: "Carrillada Mijares", price: "€15.50", description: "Carrillada de cerdo guisada con patatas fritas", image: "Specialties-pork-cheeks.jpeg" },
                    { name: "Chuletón Ternera 600g", price: "€28.00", description: "Chuletón de ternera de 600g, a la parrilla", image: "Specialties-ribeye.jpeg" },
                    { name: "Pulpo Vidigonero", price: "€18.00", description: "Pulpo a la brasa estilo Vidigonero", image: "Specialties-octopus.jpeg" },
                    { name: "Gambón Galiana", price: "€22.00", description: "Gambón de gran tamaño estilo Galiana", image: "Specialties-galiana-jumbo-prawns.jpeg" },
                    { name: "Gulas del Norte con Almejas", price: "€12.00", description: "Gulas del norte acompañadas de almejas frescas", image: "Specialties-gulas.jpeg" },
                    { name: "Patatas Twister", price: "€9.00", description: "Patatas en espiral con salsas variadas", image: "special5.jpg" },
                    { name: "Hogaza Embutido", price: "€11.00", description: "Hogaza de pan rellena con embutidos variados", image: "special6.jpg" }
                ]
            },
            "Hamburguesas": {
                description: "Por 3€ extra, añade patatas fritas a tu hamburguesa para un menú completo.",
                items: [
                    { name: "Especial de la Casa", price: "€12.00", description: "Hamburguesa de ternera con lechuga, tomate, cebolla caramelizada, queso, bacon y huevo frito", image: "burger1.jpg" },
                    { name: "Queso de Cabra", price: "€12.00", description: "Hamburguesa de ternera con queso de cabra y salsa de mostaza", image: "Burgers-goat-cheese-burger.jpeg" },
                    { name: "Montanejos Adventure con Pollo", price: "€12.00", description: "Hamburguesa de pollo con bacon, mayonesa, lechuga, tomate, y queso", image: "Burgers-chicken-burger.jpeg" },
                    { name: "Vegetariana", price: "€12.00", description: "Hamburguesa de falafel con cebolla caramelizada y queso", image: "Burgers-falafel-burger.jpeg" },
                    { name: "Vegana", price: "€12.00", description: "Hamburguesa vegana de quinoa con verduras asadas", image: "burger5.jpg" }
                ]
            },
            "Burritos": {
                description: "Burritos sabrosos y contundentes para una comida completa.",
                items: [
                    { name: "Burrito D-Lux", price: "€8.50", description: "Pollo, lechuga, tomate y bacon envueltos en un burrito", image: "Burritos-d-lux.jpeg" },
                    { name: "Burrito Texan", price: "€8.50", description: "Berenjena, calabacín, tomate y tiras de pollo", image: "burrito2.jpg" }
                ]
            },
            "Bebidas": {
                description: "Una selección refrescante de bebidas para acompañar tu comida.",
                items: [
                    { name: "Tinto de Verano", price: "€2.50", description: "Bebida refrescante a base de vino tinto y gaseosa", image: "Bebidas-tinto-de-verano.jpeg" },
                    { name: "Cerveza de Tirador (Caña)", price: "€1.70", description: "Cerveza de tirador - caña", image: "Bebidas-cerveza-cana.jpeg" },
                    { name: "Cerveza de Tirador (Doble)", price: "€2.50", description: "Cerveza de tirador - doble", image: "Bebidas-cerveza-doble.jpeg" },
                    { name: "Cerveza de Tirador (Tanque)", price: "€4", description: "Cerveza de tirador - pinta", image: "Bebidas-cerveza-tanque.jpeg" },
                    { name: "Cerveza tercio", price: "€2.50", description: "Cerveza botella de tercio (Sin Alcohol, tostada, lager, o radler)", image: "Bebidas-cerveza-tercio.jpeg" },
                    { name: "Coca Cola", price: "€2.50", description: "Coca Cola normal o Zero", image: "Bebidas-coca-cola.jpeg" },
                    { name: "Fanta Limón-Naranja", price: "€2.50", description: "Refresco de limón o naranja", image: "Bebidas-fanta.jpeg" },
                    { name: "Nestea, Aquarius", price: "€2.50", description: "Té frío con limón", image: "Bebidas-nestea.jpeg" },
                    { name: "Zumos", price: "€2", description: "Zumos de botellín: Piña, Melocotón, Naranja", image: "Bebidas-zumo.jpeg" },
                    { name: "Agua pequeña", price: "€2", description: "Agua embotellada 50 cl", image: "Bebidas-agua-pequeña.jpeg" },
                    { name: "Agua grande", price: "€2.50", description: "Agua embotellada 1.5 L", image: "Bebidas-agua-grande.jpeg" },
                    { name: "Agua con Gas", price: "€2", description: "Agua con gas", image: "Bebidas-agua-con-gas.jpeg" },
                    { name: "Tónica", price: "€2", description: "Refresco de tónica", image: "Bebidas-tonica.jpeg" },
                    { name: "Café solo", price: "€1.20", description: "Café expreso", image: "Bebidas-cafe-solo.jpeg" },
                    { name: "Café cortado", price: "€1.40", description: "Café macchiato", image: "Bebidas-cafe-cortado.jpeg" },
                    { name: "Café con leche", price: "€1.60", description: "Café con leche", image: "Bebidas-cafe-con-leche.jpeg" },
                    { name: "Café Americano", price: "€2", description: "Café americano", image: "Bebidas-cafe-americano.jpeg" },
                    { name: "Batido", price: "€1.50", description: "Batido estilo colacao", image: "Bebidas-batido.jpeg" },
                    { name: "Té y infusiones", price: "€1.50", description: "Té e infusiones", image: "Bebidas-infusiones.jpeg" },
                    { name: "Copa de vino Tinto", price: "€2.50", description: "Copa de vino tinto", image: "Bebidas-copa-tinto.jpeg" },
                    { name: "Copa de vino Blanco", price: "€2.50", description: "Copa de vino blanco", image: "Bebidas-copa-blanco.jpeg" },
                    { name: "Cubata", price: "€6", description: "Cubata (ron con Coca Cola)", image: "Bebidas-cubata.jpeg" }
                ]
            },
            "Vinos": {
                description: "Vinos cuidadosamente seleccionados para acompañar cualquier comida.",
                items: [
                    { name: "Bobal Rosé", price: "€16", description: "Finca del Mar Rosado", image: "wine1.jpg" },
                    { name: "Bobal Blanco", price: "€16", description: "Finca del Mar Blanco", image: "wine2.jpg" },
                    { name: "Melior Matarromera", price: "€20", description: "Ribera del Duero", image: "wine3.jpg" }
                ]
            }
        }
    }
};
