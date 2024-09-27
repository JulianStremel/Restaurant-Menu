const menuData = {
    en: {
        categories: {
            "Salads": {
                description: "Fresh, vibrant salads made with seasonal ingredients and bold flavors.",
                items: [
                    { name: "Crunchy Salad (Goat Cheese)", price: "€14", description: "Crispy salad with goat cheese", vegan: "no", image: "Salads-goat-cheese.jpeg" },
                    { name: "Caesar Salad (Chicken)", price: "€14", description: "Classic Caesar salad with chicken", vegan: "no", image: "Salads-Caesar-salad.jpeg" },
                    { name: "Valencian Salad (Tuna)", price: "€12", description: "Traditional Valencian salad with tuna", vegan: "no", image: "Salads-valenciana.jpeg" },
                    { name: "Vegetarian Salad without tuna", price: "€12", description: "Fresh mixed salad with vegetables, no tuna", vegan: "yes", image: "Salads-valenciana.jpeg" },
                    { name: "Zucchini Carpaccio", price: "€12", description: "Zucchini slices with olive oil and seasoning", vegan: "yes", image: "Salads-zucchini-carpaccio.jpeg" }
                ]
            },
            "Starters and Tapas": {
                description: "A selection of generous small plates, ideal for sharing or as a starter. Some portions are hearty enough to enjoy as a light meal if you're not too hungry.",
                items: [
                    { name: "Tomato & Garlic Bread", price: "€4.80", description: "Toasted bread with tomato and garlic butter", vegan: "no", image: "Starters-bread-tomato-aioli.jpeg" },
                    { name: "Fried Eggplant with Honey", price: "€9.80", description: "Eggplant fries drizzled with honey", vegan: "no", image: "Starters-fried-eggplant-with-honey.jpeg" },
                    { name: "Fried Calamari", price: "€9.90", description: "Crispy calamari with a side of lemon", vegan: "no", image: "Starters-calamari.jpeg" },
                    { name: "Broken Eggs with Ham", price: "€9.90", description: "Eggs, Ham and fries", vegan: "no", image: "Starters-broken-eggs-with-ham.jpeg" },
                    { name: "Croquettes", price: "€9.60", description: "Iberian ham croquettes, mushroom or cod fish, crispy and delicious", vegan: "no", image: "Starters-mushroom-croquettes.jpeg" },
                    { name: "Fries with Cheese and Bacon", price: "€9.90", description: "Fries topped with gouda cheese and bacon", vegan: "no", image: "Starters-fries-gouda-cheese.jpeg" },
                    { name: "Cuttlefish", price: "€9.90", description: "Cuttlefish", vegan: "no", image: "Starters-cuttlefish.jpeg" },
                    { name: "Patatas Bravas (Wedges)", price: "€9.90", description: "Patatas Bravas Wedges", vegan: "yes", image: "Starters-bravas-wedges.jpeg" },
                    { name: "Sweet fried Potatos with Roquefort", price: "€9.90", description: "A nice portion of sweet fried potatoes with melted Roquefort cheese", vegan: "no", image: "Starters-sweet-fries-roquefort.jpeg" },
                    {name: "Patatas Twister", price: "€10.00", description: "Twisted fries with special sauce", vegan: "yes", image: "Starters-twister-fries.jpeg"}
                ]
            },
            "Combo meals": {
                description: "Delicious combinations of our finest ingredients to satisfy your hunger. Most of them come with fried egg and fries.",
                items: [
                    { name: "Montanejos Cold Cuts", price: "€11", description: "Selection of cold cuts from Montanejos: Chorizo, blood sausage and longaniza", vegan: "no", image: "Combination-sausages.jpeg" },
                    { name: "Grilled Loin", price: "€11", description: "Grilled pork loin served with an egg and fries", vegan: "no", image: "Combination-pork-loin.jpeg" },
                    { name: "Breaded Chicken", price: "€11", description: "Breaded chicken fillet served with fries and a fried egg", vegan: "no", image: "Combination-chicken.jpeg" },
                    { name: "Grilled Cuttlefish", price: "€16", description: "Grilled cuttlefish served with garlic sauce", vegan: "no", image: "Starters-cuttlefish.jpeg" },
                    { name: "Fried Calamari", price: "€13", description: "Fried calamari with fries and salad", vegan: "no", image: "Combination-calamary.jpeg" }
                ]
            },
            "House Specialties": {
                description: "Signature dishes that showcase the culinary excellence of our restaurant.",
                items: [
                    { name: "Soria Torrezno", price: "€5.50", description: "Crispy pork belly from Soria", vegan: "no", image: "Specialties-pork-skin.jpeg" },
                    { name: "Pork Cheeks", price: "€15.50", description: "Pork cheeks with fried potatoes", vegan: "no", image: "Specialties-pork-cheeks.jpeg" },
                    { name: "Octopus", price: "€18", description: "Octopus, special recipe of the village", vegan: "no", image: "Specialties-octopus.jpeg" },
                    { name: "Galiana Jumbo Prawns", price: "€22", description: "Galiana Jumbo Prawns", vegan: "no", image: "Specialties-galiana-jumbo-prawns.jpeg" },
                    { name: "Slow-Braised Oxtail", price: "€18", description: "Slow-Braised Oxtail in a Rich Red Wine Reduction, Served with Elegant Seasonal Accompaniments", vegan: "no", image: "Specialties-oxtail.jpeg" },
                    { name: "600g Ribeye Steak", price: "€28", description: "Grilled ribeye steak, perfectly cooked", vegan: "no", image: "Specialties-ribeye.jpeg" },
                    { name: "Northern Eels with Clams", price: "€12.00", description: "Northern eels served with fresh clams", vegan: "no", image: "Specialties-gulas.jpeg" }
                ]
            },
            "Burgers": {
                description: "For €3 extra, add fries to your burger for the perfect meal.",
                items: [
                    { name: "House Special Burger", price: "€12", description: "Beef burger with fried egg, bacon, and caramelized onions", vegan: "no", image: "Burgers-house-burger.jpeg" },
                    { name: "Goat Cheese Burger", price: "€12", description: "Beef burger with goat cheese and mustard sauce", vegan: "no", image: "Burgers-goat-cheese-burger.jpeg" },
                    { name: "Montanejos Adventure chicken Burger", price: "€12", description: "Chicken burger with bacon, egg, and special sauce", vegan: "no", image: "Burgers-chicken-burger.jpeg" },
                    { name: "Vegetarian Burger", price: "€12", description: "Falafel burger with caramelized onions and cheese.  **if you want fries please mention it when you order", vegan: "no", image: "Burgers-falafel-burger.jpeg" },
                    { name: "Vegan Burger", price: "€12", description: "Quinoa burger with roasted vegetables and tomato.  **if you want fries please mention it when you order", vegan: "yes", image: "Burgers-falafel-burger.jpeg" }
                ]
            },
            "Baguette Sandwiches": {
                description: "Classic baguette sandwiches packed with flavorful ingredients.",
                items: [
                    { name: "Chivito Especial", price: "€11", description: "Lettuce, tomato, cheese, bacon, fried egg, and ham", vegan: "no", image: "default-image.jpeg" },
                    { name: "Polvorilla", price: "€11", description: "Tomato, ham, cheese, and bacon on a toasted bun", vegan: "no", image: "default-image.jpeg" },
                    { name: "Alex Sub", price: "€10", description: "Gouda cheese, bacon, lomo, and fries", vegan: "no", image: "default-image.jpeg" },
                    { name: "Héctor Sub", price: "€10", description: "Caramelized onions, bacon, and melted cheese", vegan: "no", image: "default-image.jpeg" }
                ]
            },
            "Sandwiches": {
                description: "Delicious sandwiches for a quick and satisfying meal.",
                items: [
                    { name: "Andrea", price: "€8", description: "Ham, lettuce, tomato, and pickles", vegan: "no", image: "default-image.jpeg" },
                    { name: "Tuna Sandwich", price: "€7", description: "Tuna, lettuce, and olives in a toasted sandwich", vegan: "no", image: "default-image.jpeg" },
                    { name: "Mixed Sandwich", price: "€4", description: "Simple ham and cheese sandwich", vegan: "no", image: "default-image.jpeg" }
                ]
            },
            "Burritos": {
                description: "Hearty and flavorful burritos for a filling meal.",
                items: [
                    { name: "D-Lux Burrito", price: "€8.50", description: "Chicken, lettuce, tomato, and bacon wrapped in a burrito", vegan: "no", image: "Burritos-d-lux.jpeg" },
                    { name: "Texan Burrito", price: "€8.50", description: "Eggplant, zucchini, tomato, and chicken strips", vegan: "no", image: "default-image.jpeg" }
                ]
            },
            "Drinks": {
                description: "A refreshing selection of beverages to accompany your meal.",
                items: [
                    { name: "Tinto de Verano", price: "€2.50", description: "Refreshing red wine with soda", vegan: "yes", image: "Bebidas-tinto-de-verano.jpeg" },
                    { name: "Draft Beer (Caña)", price: "€1.70", description: "Draft beer - small", vegan: "yes", image: "Bebidas-cerveza-cana.jpeg" },
                    { name: "Draft Beer (Doble)", price: "€2.50", description: "Draft beer - medium", vegan: "yes", image: "Bebidas-cerveza-doble.jpeg" },
                    { name: "Draft Beer (Pint)", price: "€4", description: "Draft beer - large", vegan: "yes", image: "Bebidas-cerveza-tanque.jpeg" },
                    { name: "Bottled Beer", price: "€2.50", description: "Bottled beer - (non-alcoholic, toasted, lager, or radler)", vegan: "yes", image: "Bebidas-cerveza-tercio-estrella-galicia.jpeg" },
                    { name: "Coca Cola", price: "€2.50", description: "Coca Cola classic or Zero", vegan: "yes", image: "Bebidas-coca-cola.jpeg" },
                    { name: "Fanta Lemon-Orange", price: "€2.50", description: "Lemon or orange Fanta", vegan: "yes", image: "Bebidas-fanta.jpeg" },
                    { name: "Nestea, Aquarius", price: "€2.50", description: "Cold lemon tea", vegan: "yes", image: "Bebidas-nestea.jpeg" },
                    { name: "Bottled Juices", price: "€2", description: "Bottled juice: Pineapple, Peach, Orange and mix (orange-carrot)", vegan: "yes", image: "Bebidas-zumos.jpeg" },
                    { name: "Small Water", price: "€2", description: "Bottled water 50cl", vegan: "yes", image: "Bebidas-agua-pequena.jpeg" },
                    { name: "Large Water 1.5l", price: "€2.50", description: "Bottled water 1.5L", vegan: "yes", image: "Bebidas-agua-grande.jpeg" },
                    { name: "Sparkling Water", price: "€2", description: "Sparkling water", vegan: "yes", image: "Bebidas-agua-con-gas.jpeg" },
                    { name: "Tonic", price: "€2", description: "Tonic water", vegan: "yes", image: "Bebidas-tonica.jpeg" },
                    { name: "Espresso", price: "€1.20", description: "Espresso coffee", vegan: "yes", image: "Bebidas-cafe-solo.jpeg" },
                    { name: "Macchiato", price: "€1.40", description: "Macchiato coffee", vegan: "no", image: "Bebidas-cafe-cortado.jpeg" },
                    { name: "Café con leche", price: "€1.60", description: "Coffee with milk", vegan: "no", image: "Bebidas-cafe-con-leche.jpeg" },
                    { name: "Café Americano", price: "€2", description: "American coffee", vegan: "yes", image: "Bebidas-cafe-americano.jpeg" },
                    { name: "Hot Chocolate", price: "€1.50", description: "Hot Chocolate", vegan: "no", image: "Bebidas-batido.jpeg" },
                    { name: "Tea and Infusions", price: "€1.50", description: "Tea and infusions", vegan: "yes", image: "Bebidas-infusiones.jpeg" },
                    { name: "Red Wine Glass", price: "€2.50", description: "Glass of red wine", vegan: "yes", image: "Bebidas-copa-tinto.jpeg" },
                    { name: "White Wine Glass", price: "€2.50", description: "Glass of white wine", vegan: "yes", image: "Bebidas-copa-blanco.jpeg" },
                    { name: "Rhum & Coke", price: "€6", description: "Rhum and Coca-Cola", vegan: "yes", image: "Bebidas-cubata.jpeg" }
                ]
            },
            "Wines": {
                description: "Carefully selected wines to complement any meal.",
                items: [
                    { name: "Rosé, Finca del Mar", price: "€16", description: "1 bottle Finca del Mar Rosé", vegan: "no", image: "Vinos-botella-rosado-finca-del-mar.jpeg" },
                    { name: "White wine Chardonnay, Finca del Mar", price: "€16", description: "Finca del Mar Blanco", vegan: "no", image: "Vinos-botella-blanco-finca-del-mar.jpeg" },
                    { name: "Red wine Rioja, Altos Ibericos", price: "€20", description: "1 bottle red wine Altos Ibericos, Rioja", vegan: "no", image: "Vinos-botella-tinto-altos-ibericos.jpeg" }
                ]
            },
            "Desserts": {
                description: "Finish your meal with a sweet touch.",
                items: [
                        { name: "Cheesecake", price: "€5.50", description: "A classic creamy cheesecake.", vegan: "no", image: "Desserts-cheesecake.jpeg" },
                        { name: "Lotus Biscuit Cake", price: "€5.90", description: "A delicious cake made with Lotus biscuits.", vegan: "no", image: "Desserts-lotus-biscuit-cake.jpeg" },
                        { name: "Death by Chocolate", price: "€6.40", description: "Rich and indulgent chocolate dessert.", vegan: "no", image: "Desserts-death-by-chocolate.jpeg" },
                        { name: "Grandma's Cake", price: "€5.50", description: "Traditional cake made with a family recipe.", vegan: "no", image: "Desserts-grandmas-cake.jpeg" },
                        { name: "Velvet Cake", price: "€5.50", description: "Soft and moist velvet cake.", vegan: "no", image: "Desserts-velvet-cake.jpeg" },
                        { name: "Chocolate Fondant", price: "€5.20", description: "Warm chocolate fondant with a molten center.", vegan: "no", image: "Desserts-chocolate-fondant.jpeg" },
                        { name: "Bailey's Fondant", price: "€5.20", description: "Fondant infused with Bailey's liqueur.", vegan: "no", image: "Desserts-baileys-fondant.jpeg" },
                        { name: "White Chocolate Fondant (Gluten-Free)", price: "€5.20", description: "Gluten-free white chocolate fondant.", vegan: "no", image: "Desserts-white-chocolate-fondant.jpeg" },
                        { name: "Brownie with Cookie Crumble", price: "€6.00", description: "A brownie topped with cookie crumble.", vegan: "no", image: "Desserts-brownie-cookie-crumble.jpeg" },
                        { name: "Cream Tart (Gluten-Free)", price: "€4.90", description: "Gluten-free cream tart.", vegan: "no", image: "Desserts-cream-tart.jpeg" },
                        { name: "Whisky Cake", price: "€5.20", description: "A moist cake infused with whisky.", vegan: "no", image: "Desserts-whisky-cake.jpeg" },
                        { name: "Chocolate Truffles", price: "€5.20", description: "Decadent chocolate truffles.", vegan: "no", image: "Desserts-chocolate-truffles.jpeg" },
                        { name: "Nougat Ice Cream Cup (Gluten-Free)", price: "€3.00", description: "A gluten-free nougat ice cream cup.", vegan: "no", image: "Desserts-nougat-ice-cream.jpeg" },
                        { name: "Orange with Cinnamon (Gluten-Free)", price: "€3.80", description: "Fresh orange slices with cinnamon.", vegan: "yes", image: "Desserts-orange-cinnamon.jpeg" }
                ]
            }         

        }
    },
    fr: {
        categories: {
            "Salades": {
                description: "Des salades fraîches et vibrantes, préparées avec des ingrédients de saison et des saveurs audacieuses.",
                items: [
                    { name: "Salade Croquante (Fromage de chèvre)", price: "€14", description: "Salade croquante avec du fromage de chèvre", vegan: "no", image: "Salads-goat-cheese.jpeg" },
                    { name: "Salade César (Poulet)", price: "€14", description: "Salade César classique avec poulet", vegan: "no", image: "Salads-Caesar-salad.jpeg" },
                    { name: "Salade Valencienne (Thon)", price: "€12", description: "Salade valencienne traditionnelle avec du thon", vegan: "no", image: "Salads-valenciana.jpeg" },
                    { name: "Salade Végétarienne sans thon", price: "€12", description: "Salade mixte sans thon", vegan: "yes", image: "Salads-valenciana.jpeg" },
                    { name: "Carpaccio de Courgette", price: "€12", description: "Tranches de courgette avec de l'huile d'olive", vegan: "yes", image: "Salads-zucchini-carpaccio.jpeg" }
                ]
            },
            "Entrées et Tapas": {
                description: "Une sélection de petites assiettes généreuses, idéales à partager ou en entrée. Certaines portions sont suffisamment copieuses pour constituer un repas léger si vous n'avez pas très faim.",
                items: [
                    { name: "Pain Tomate et Ajoaceite", price: "€4.80", description: "Pain grillé avec tomate et ajoaceite", vegan: "no", image: "Starters-bread-tomato-aioli.jpeg" },
                    { name: "Aubergines Frites au Miel", price: "€9.80", description: "Aubergines frites avec miel", vegan: "no", image: "Starters-fried-eggplant-with-honey.jpeg" },
                    { name: "Calamars Frits à l'Andalouse", price: "€9.90", description: "Calamars frits à la façon andalouse", vegan: "no", image: "Starters-calamari.jpeg" },
                    { name: "Œufs Brouillés avec Jambon", price: "€9.60", description: "Œufs frits avec jambon sur des frites", vegan: "no", image: "Starters-broken-eggs-with-ham.jpeg" },
                    { name: "Croquettes croustillantes", price: "€9.00", description: "Croquettes croustillantes de jambon ibérique, champignons ou morue", vegan: "no", image: "Starters-mushroom-croquettes.jpeg" },
                    { name: "Pommes de Terre au Gouda et Bacon", price: "€9.90", description: "Pommes de terre frites couvertes de gouda et bacon", vegan: "no", image: "Starters-fries-gouda-cheese.jpeg" },
                    { name: "Frites de Patate Douce au Roquefort", price: "€9.00", description: "Frites de patate douce avec sauce roquefort", vegan: "no", image: "Starters-sweet-fries-roquefort.jpeg" },
                    { name: "Plateau de Jambon Serrano Bodega", price: "€13.00", description: "Jambon serrano bodega servi sur une planche", vegan: "no", image: "starter10.jpg" },
                    { name: "Seiche Entière à la Plancha", price: "€14.00", description: "Seiche entière grillée avec ail et persil", vegan: "no", image: "Starters-cuttlefish.jpeg" },
                    { name: "Patatas Bravas", price: "€9.50", description: "Pommes de terre frites avec sauce brava", vegan: "yes", image: "Starters-bravas-wedges.jpeg" },
                    { name: "Frites Twister", price: "€10.00", description: "Pommes de terre en spirale avec diverses sauces", vegan: "yes", image: "Starters-twister-fries.jpeg" }
                ]
            },
            "Assièttes Combinées": {
                description: "Délicieuses combinaisons de nos meilleurs ingrédients pour satisfaire votre faim. Ils sont en règle générale servi avec un oeuf frit et des frites",
                items: [
                    { name: "Charcuterie de Montanejos", price: "€11", description: "Sélection de charcuteries de Montanejos: Chorizo, boudin et longaniza", vegan: "no", image: "Combination-sausages.jpeg" },
                    { name: "Longe de Porc Grillée", price: "€11", description: "Longe de porc grillée servie avec un oeuf et des frites", vegan: "no", image: "Combination-pork-loin.jpeg" },
                    { name: "Poulet Pané", price: "€11", description: "Escalope de poulet panée avec frites et un oeuf frit", vegan: "no", image: "Combination-chicken.jpeg" },
                    { name: "Seiche Grillée", price: "€16", description: "Seiche grillée avec sauce à l'ail", vegan: "no", image: "Starters-cuttlefish.jpeg" },
                    { name: "Calamars Frits", price: "€13", description: "Calamars frits avec salade et frites", vegan: "no", image: "Combination-calamary.jpeg" },
                    { name: "Espadon Sauce Verte", price: "€15.00", description: "Filet d'espadon accompagné de sauce verte, salade et frites", vegan: "no", image: "Combination-swordfish.jpeg" }
                ]
            },
            "Spécialités de la maison": {
                description: "Plats signatures qui montrent l'excellence culinaire de notre restaurant.",
                items: [
                    { name: "Lard de Soria", price: "€5.50", description: "Lard croustillants de la région de Soria", vegan: "no", image: "Specialties-pork-skin.jpeg" },
                    { name: "Queue de Taureau au Vin Rouge", price: "€16.90", description: "Queue de taureau mijotée au vin rouge", vegan: "no", image: "Specialties-oxtail.jpeg" },
                    { name: "Joue de Porc Mijares", price: "€15.50", description: "Joue de porc mijotée avec des frites", vegan: "no", image: "Specialties-pork-cheeks.jpeg" },
                    { name: "Entrecote de Boeuf 600g", price: "€28.00", description: "Entrecote de boeuf de 600g, grillée à point", vegan: "no", image: "Specialties-ribeye.jpeg" },
                    { name: "Poulpe Vidigonero", price: "€18.00", description: "Poulpe grillé à la façon Vidigonero (recette du chef)", vegan: "no", image: "Specialties-octopus.jpeg" },
                    { name: "Gambas Galiana", price: "€22.00", description: "Gambas géantes style Galiana", vegan: "no", image: "Specialties-galiana-jumbo-prawns.jpeg" },
                    { name: "Gulas du Nord avec Palourdes", price: "€12.00", description: "Gulas du nord accompagnées de palourdes fraîches", vegan: "no", image: "Specialties-gulas.jpeg" }

                ]
            },
            "Hamburgers": {
                description: "Pour 3€ supplémentaires, ajoutez des frites à votre hamburger pour un repas parfait.",
                items: [
                    { name: "Spécial de la Maison", price: "€12.00", description: "Hamburger de bœuf avec laitue, tomate, oignon caramélisé, fromage, bacon et œuf frit", vegan: "no", image: "Burgers-house-burger.jpeg" },
                    { name: "Fromage de Chèvre", price: "€12.00", description: "Hamburger de bœuf avec fromage de chèvre et sauce à la moutarde", vegan: "no", image: "Burgers-goat-cheese-burger.jpeg" },
                    { name: "Montanejos Adventure au Poulet", price: "€12.00", description: "Hamburger de poulet avec bacon, mayonnaise, laitue, tomate, et fromage", vegan: "no", image: "Burgers-chicken-burger.jpeg" },
                    { name: "Végétarien", price: "€12.00", description: "Hamburger de falafel avec oignon caramélisé et fromage. **les frites doivent être commandées à part", vegan: "no", image: "Burgers-falafel-burger.jpeg" },
                    { name: "Vegan", price: "€12.00", description: "Hamburger végan de quinoa avec légumes grillés.  **les frites doivent être commandées à part", vegan: "yes", image: "Burgers-falafel-burger.jpeg" }
                ]
            },
            "Burritos": {
                description: "Des burritos copieux et savoureux pour un repas complet.",
                items: [
                    { name: "Burrito D-Lux", price: "€8.50", description: "Poulet, laitue, tomate et bacon enveloppés dans un burrito", vegan: "no", image: "Burritos-d-lux.jpeg" },
                    { name: "Burrito Texan", price: "€8.50", description: "Aubergine, courgette, tomate et morceaux de poulet", vegan: "no", image: "burrito2.jpg" }
                ]
            },
            "Boissons": {
                description: "Une sélection de boissons rafraîchissantes pour accompagner votre repas.",
                items: [
                    { name: "Tinto de Verano", price: "€2.50", description: "Vin rouge rafraîchissant avec soda", vegan: "yes", image: "Bebidas-tinto-de-verano.jpeg" },
                    { name: "Bière pression (Petit)", price: "€1.70", description: "Bière pression - petite", vegan: "yes", image: "Bebidas-cerveza-cana.jpeg" },
                    { name: "Bière pression (Moyen)", price: "€2.50", description: "Bière pression - moyenne", vegan: "yes", image: "Bebidas-cerveza-doble.jpeg" },
                    { name: "Bière pression (Grand)", price: "€4", description: "Bière pression - grande", vegan: "yes", image: "Bebidas-cerveza-tanque.jpeg" },
                    { name: "Bière bouteille 300ml", price: "€2.50", description: "Bière en bouteille (sans alcool, brune, blonde ou radler)", vegan: "yes", image: "Bebidas-cerveza-tercio-estrella-galicia.jpeg" },
                    { name: "Coca", price: "€2.50", description: "Coca classique ou Zéro", vegan: "yes", image: "Bebidas-coca-cola.jpeg" },
                    { name: "Fanta Citron-Orange", price: "€2.50", description: "Fanta citron ou orange", vegan: "yes", image: "Bebidas-fanta.jpeg" },
                    { name: "Nestea, Aquarius", price: "€2.50", description: "Thé froid au citron", vegan: "yes", image: "Bebidas-nestea.jpeg" },
                    { name: "Jus en bouteille", price: "€2", description: "Jus en bouteille : Ananas, Pêche, Orange et mixte (orange-carotte)", vegan: "yes", image: "Bebidas-zumos.jpeg" },
                    { name: "Petite bouteille d'Eau", price: "€2", description: "Bouteille d'eau 50cl", vegan: "yes", image: "Bebidas-agua-pequena.jpeg" },
                    { name: "Grande bouteille d'Eau 1.5l", price: "€2.50", description: "Bouteille d'eau 1.5L", vegan: "yes", image: "Bebidas-agua-grande.jpeg" },
                    { name: "Eau Pétillante", price: "€2", description: "Eau gazeuse", vegan: "yes", image: "Bebidas-agua-con-gas.jpeg" },
                    { name: "Tonic", price: "€2", description: "Eau tonique", vegan: "yes", image: "Bebidas-tonica.jpeg" },
                    { name: "Verre de Vin Rouge", price: "€2.50", description: "Verre de vin rouge", vegan: "yes", image: "Bebidas-copa-tinto.jpeg" },
                    { name: "Verre de Vin Blanc", price: "€2.50", description: "Verre de vin blanc", vegan: "yes", image: "Bebidas-copa-blanco.jpeg" },
                    { name: "Expresso", price: "€1.20", description: "Café expresso", vegan: "yes", image: "Bebidas-cafe-solo.jpeg" },
                    { name: "Café Macchiato", price: "€1.40", description: "Café macchiato", vegan: "no", image: "Bebidas-cafe-cortado.jpeg" },
                    { name: "Café au Lait", price: "€1.60", description: "Café au lait", vegan: "no", image: "Bebidas-cafe-con-leche.jpeg" },
                    { name: "Café Americano", price: "€2", description: "Café allongé", vegan: "yes", image: "Bebidas-cafe-americano.jpeg" },
                    { name: "Chocolat chaud", price: "€1.50", description: "Boisson au chocolat", vegan: "no", image: "Bebidas-batido.jpeg" },
                    { name: "Thé et Infusions", price: "€1.50", description: "Thé et infusions", vegan: "yes", image: "Bebidas-infusiones.jpeg" },
                    { name: "Rhum & Coca", price: "€6", description: "Rhum et Coca Cola", vegan: "yes", image: "Bebidas-cubata.jpeg" }
                ]
            },
            "Vins": {
                description: "Des vins soigneusement sélectionnés pour accompagner tout repas.",
                items: [
                    { name: "Rosé, Finca del Mar", price: "16€", description: "1 bouteille de Finca del Mar Rosé", vegan: "yes", image: "Vinos-botella-rosado-finca-del-mar.jpeg" },
                    { name: "Vin blanc Chardonnay, Finca del Mar", price: "16€", description: "Finca del Mar Blanc", vegan: "yes", image: "Vinos-botella-blanco-finca-del-mar.jpeg" },
                    { name: "Vin rouge Rioja, Altos Ibericos", price: "20€", description: "1 bouteille de vin rouge Altos Ibericos, Rioja", vegan: "yes", image: "Vinos-botella-tinto-altos-ibericos.jpeg" }
                    
                ]
            },
            "Desserts": {
                description: "Terminez votre repas avec une touche sucrée.",
                items: [
                    { name: "Cheesecake", price: "5,50 €", description: "Un cheesecake crémeux classique.", vegan: "no", image: "Desserts-cheesecake.jpeg" },
                    { name: "Gâteau Biscuit Lotus", price: "5,90 €", description: "Un délicieux gâteau fait avec des biscuits Lotus.", vegan: "no", image: "Desserts-lotus-biscuit-cake.jpeg" },
                    { name: "Mort par Chocolat", price: "6,40 €", description: "Un dessert riche et indulgent au chocolat.", vegan: "no", image: "Desserts-death-by-chocolate.jpeg" },
                    { name: "Gâteau de Grand-mère", price: "5,50 €", description: "Un gâteau traditionnel préparé avec une recette familiale.", vegan: "no", image: "Desserts-grandmas-cake.jpeg" },
                    { name: "Gâteau Velours", price: "5,50 €", description: "Un gâteau velouté, doux et moelleux.", vegan: "no", image: "Desserts-velvet-cake.jpeg" },
                    { name: "Fondant au Chocolat", price: "5,20 €", description: "Fondant au chocolat chaud avec un centre coulant.", vegan: "no", image: "Desserts-chocolate-fondant.jpeg" },
                    { name: "Fondant au Bailey's", price: "5,20 €", description: "Fondant infusé au Bailey's.", vegan: "no", image: "Desserts-baileys-fondant.jpeg" },
                    { name: "Fondant au Chocolat Blanc (Sans Gluten)", price: "5,20 €", description: "Fondant au chocolat blanc sans gluten.", vegan: "no", image: "Desserts-white-chocolate-fondant.jpeg" },
                    { name: "Brownie avec Émietté de Cookies", price: "6,00 €", description: "Un brownie garni d'émietté de cookies.", vegan: "no", image: "Desserts-brownie-cookie-crumble.jpeg" },
                    { name: "Tarte à la Crème (Sans Gluten)", price: "4,90 €", description: "Tarte à la crème sans gluten.", vegan: "no", image: "Desserts-cream-tart.jpeg" },
                    { name: "Gâteau au Whisky", price: "5,20 €", description: "Un gâteau moelleux infusé au whisky.", vegan: "no", image: "Desserts-whisky-cake.jpeg" },
                    { name: "Truffes au Chocolat", price: "5,20 €", description: "Des truffes au chocolat décadentes.", vegan: "no", image:"Desserts-chocolate-truffles.jpeg" },
                    { name: "Tasse de Glace au Nougat (Sans Gluten)", price: "3,00 €", description: "Une tasse de glace au nougat sans gluten.", vegan: "no", image: "Desserts-nougat-ice-cream.jpeg" },
                    { name: "Orange à la Cannelle (Sans Gluten)", price: "3,80 €", description: "Des tranches d'orange fraîches à la cannelle.", vegan: "no", image: "Desserts-orange-cinnamon.jpeg" }
                ]
            }
            
        }
    },
    es: {
        categories: {
            "Ensaladas": {
                description: "Frescas y vibrantes ensaladas elaboradas con ingredientes de temporada y sabores intensos.",
                items: [
                    { name: "Ensalada Crujiente (Queso de cabra)", price: "€14", description: "Ensalada crujiente con queso de cabra", vegan: "no", image: "Salads-goat-cheese.jpeg" },
                    { name: "Ensalada César (Pollo)", price: "€14", description: "Ensalada César clásica con pollo", vegan: "no", image: "Salads-Caesar-salad.jpeg" },
                    { name: "Ensalada Valenciana (Atún)", price: "€12", description: "Ensalada valenciana con atún", vegan: "no", image: "Salads-valenciana.jpeg" },
                    { name: "Ensalada Vegetariana sin atún", price: "€12", description: "Ensalada mixta con verduras frescas sin atún", vegan: "yes", image: "Salads-valenciana.jpeg" },
                    { name: "Carpaccio de Calabacín", price: "€12", description: "Rodajas de calabacín con aceite de oliva", vegan: "yes", image: "Salads-zucchini-carpaccio.jpeg" }
                ]
            },
            "Entrantes y Tapas": {
                description: "Una selección de platos pequeños y generosos, ideales para compartir o como entrante. Algunas porciones son lo suficientemente abundantes como para disfrutar como comida ligera si no hay mucha hambre.",
                items: [
                    { name: "Pan con Tomate y Ajoaceite", price: "€4.80", description: "Pan tostado con tomate y ajoaceite", vegan: "no", image: "Starters-bread-tomato-aioli.jpeg" },
                    { name: "Berenjenas Fritas con Miel", price: "€9.80", description: "Berenjenas fritas con miel", vegan: "no", image: "Starters-fried-eggplant-with-honey.jpeg" },
                    { name: "Calamares a la andaluza", price: "€9.90", description: "Calamares fritos al estilo andaluz", vegan: "no", image: "Starters-calamari.jpeg" },
                    { name: "Huevos Rotos con Jamón", price: "€9.60", description: "Huevos fritos con jamón sobre patatas fritas", vegan: "no", image: "Starters-broken-eggs-with-ham.jpeg" },
                    { name: "Croquetas", price: "€9.00", description: "Croquetas de jamón ibérico, bacalao o setas", vegan: "no", image: "Starters-mushroom-croquettes.jpeg" },
                    { name: "Patatas con Queso Gouda y Bacon", price: "€9.90", description: "Patatas fritas cubiertas con queso gouda y bacon", vegan: "no", image: "Starters-fries-gouda-cheese.jpeg" },
                    { name: "Tirás Boniato con Roquefort", price: "€9.00", description: "Tiras de boniato frito con salsa roquefort", vegan: "no", image: "Starters-sweet-fries-roquefort.jpeg" },
                    { name: "Tabla Jamón Serrano Bodega", price: "€13.00", description: "Jamón serrano bodega servido en tabla", vegan: "no", image: "starter10.jpg" },
                    { name: "Sepia Enterita a la Plancha", price: "€14.00", description: "Sepia entera a la plancha con ajo y perejil", vegan: "no", image: "Starters-cuttlefish.jpeg" },
                    { name: "Patatas Bravas", price: "€9.50", description: "Patatas fritas con salsa brava", vegan: "yes", image: "Starters-bravas-wedges.jpeg" },
                    { name: "Patatas Twister", price: "€10.00", description: "Patatas en espiral con salsas variadas", vegan: "yes", image: "Starters-twister-fries.jpeg" }
                ]
            },
            
            "Combinados": {
               description: "Disfruta de nuestras combinaciones únicas de platos principales con guarniciones para una comida completa y satisfactoria.",
                    items: [
                        { name: "Embutidos Montanejos", price: "€11.00", description: "Surtido de embutidos variados de Montanejos", vegan: "no", image: "Combination-sausages.jpeg" },
                        { name: "Lomo Caña", price: "€11.00", description: "Lomo de cerdo servido con patatas y huevo frito", vegan: "no", image: "Combination-pork-loin.jpeg" },
                        { name: "Pollo Empanado", price: "€11.00", description: "Pollo empanado con patatas fritas y huevo frito", vegan: "no", image: "Combination-chicken.jpeg" },
                        { name: "Sepia Plancha", price: "€16.00", description: "Sepia a la plancha con ajo y perejil", vegan: "no", image: "Starters-cuttlefish.jpeg" },
                        { name: "Calamares Rebozados", price: "€13.00", description: "Calamares rebozados con patatas fritas y ensalada", vegan: "no", image: "Combination-calamary.jpeg" },
                        { name: "Emperador Salsa Verde", price: "€15.00", description: "Filete de emperador acompañado con salsa verde", vegan: "no", image: "Combination-swordfish.jpeg" }
                ]
            },
            
            
            
            "Especiales Mijares": {
                description: "Platos especiales que muestran la excelencia culinaria de nuestro restaurante.",
                items: [
                    { name: "Torrezno Denominación Soria", price: "€5.50", description: "Torreznos crujientes de la región de Soria", vegan: "no", image: "Specialties-pork-skin.jpeg" },
                    { name: "Rabo de Toro al Vino Tinto", price: "€16.90", description: "Rabo de toro guisado al vino tinto", vegan: "no", image: "Specialties-oxtail.jpeg" },
                    { name: "Carrillada Mijares", price: "€15.50", description: "Carrillada de cerdo guisada con patatas fritas", vegan: "no", image: "Specialties-pork-cheeks.jpeg" },
                    { name: "Chuletón Ternera 600g", price: "€28.00", description: "Chuletón de ternera de 600g, a la parrilla", vegan: "no", image: "Specialties-ribeye.jpeg" },
                    { name: "Pulpo Vidigonero", price: "€18.00", description: "Pulpo a la brasa estilo Vidigonero", vegan: "no", image: "Specialties-octopus.jpeg" },
                    { name: "Gambón Galiana", price: "€22.00", description: "Gambón de gran tamaño estilo Galiana", vegan: "no", image: "Specialties-galiana-jumbo-prawns.jpeg" },
                    { name: "Gulas del Norte con Almejas", price: "€12.00", description: "Gulas del norte acompañadas de almejas frescas", vegan: "no", image: "Specialties-gulas.jpeg" }
                    
                ]
            },
            "Hamburguesas": {
                description: "Por 3€ extra, añade patatas fritas a tu hamburguesa para un menú completo.",
                items: [
                    { name: "Especial de la Casa", price: "€12.00", description: "Hamburguesa de ternera con lechuga, tomate, cebolla caramelizada, queso, bacon y huevo frito", vegan: "no", image: "Burgers-house-burger.jpeg" },
                    { name: "Queso de Cabra", price: "€12.00", description: "Hamburguesa de ternera con queso de cabra y salsa de mostaza", vegan: "no", image: "Burgers-goat-cheese-burger.jpeg" },
                    { name: "Montanejos Adventure con Pollo", price: "€12.00", description: "Hamburguesa de pollo con bacon, mayonesa, lechuga, tomate, y queso", vegan: "no", image: "Burgers-chicken-burger.jpeg" },
                    { name: "Vegetariana", price: "€12.00", description: "Hamburguesa de falafel con cebolla caramelizada y queso **Las patatas se piden a parte", vegan: "no", image: "Burgers-falafel-burger.jpeg" },
                    { name: "Vegana", price: "€12.00", description: "Hamburguesa vegana de quinoa con verduras asadas  **Las patatas se piden a parte", vegan: "yes", image: "Burgers-falafel-burger.jpeg" }
                ]
            },
            "Burritos": {
                description: "Burritos sabrosos y contundentes para una comida completa.",
                items: [
                    { name: "Burrito D-Lux", price: "€8.50", description: "Pollo, lechuga, tomate y bacon envueltos en un burrito", vegan: "no", image: "Burritos-d-lux.jpeg" },
                    { name: "Burrito Texan", price: "€8.50", description: "Berenjena, calabacín, tomate y tiras de pollo", vegan: "no", image: "burrito2.jpg" }
                ]
            },
            "Bebidas": {
                description: "Una selección refrescante de bebidas para acompañar tu comida.",
                items: [
                    { name: "Tinto de Verano", price: "€2.50", description: "Bebida refrescante a base de vino tinto y gaseosa", vegan: "yes", image: "Bebidas-tinto-de-verano.jpeg" },
                    { name: "Cerveza de Tirador (Caña)", price: "€1.70", description: "Cerveza de tirador - caña", vegan: "yes", image: "Bebidas-cerveza-cana.jpeg" },
                    { name: "Cerveza de Tirador (Doble)", price: "€2.50", description: "Cerveza de tirador - doble", vegan: "yes", image: "Bebidas-cerveza-doble.jpeg" },
                    { name: "Cerveza de Tirador (Tanque)", price: "€4", description: "Cerveza de tirador - pinta", vegan: "yes", image: "Bebidas-cerveza-tanque.jpeg" },
                    { name: "Cerveza tercio", price: "€2.50", description: "Cerveza botella de tercio (Sin Alcohol, tostada, lager, o radler)", vegan: "yes", image: "Bebidas-cerveza-tercio-estrella-galicia.jpeg" },
                    { name: "Coca Cola", price: "€2.50", description: "Coca Cola normal o Zero", vegan: "yes", image: "Bebidas-coca-cola.jpeg" },
                    { name: "Fanta Limón-Naranja", price: "€2.50", description: "Refresco de limón o naranja", vegan: "yes", image: "Bebidas-fanta.jpeg" },
                    { name: "Nestea, Aquarius", price: "€2.50", description: "Té frío con limón", vegan: "yes", image: "Bebidas-nestea.jpeg" },
                    { name: "Zumos", price: "€2", description: "Zumos de botellín: Piña, Melocotón, Naranja y mixto (naranja-zanahoria)", vegan: "yes", image: "Bebidas-zumos.jpeg" },
                    { name: "Agua pequeña", price: "€2", description: "Agua embotellada 50 cl", vegan: "yes", image: "Bebidas-agua-pequena.jpeg" },
                    { name: "Agua grande", price: "€2.50", description: "Agua embotellada 1.5 L", vegan: "yes", image: "Bebidas-agua-grande.jpeg" },
                    { name: "Agua con Gas", price: "€2", description: "Agua con gas", vegan: "yes", image: "Bebidas-agua-con-gas.jpeg" },
                    { name: "Tónica", price: "€2", description: "Refresco de tónica", vegan: "yes", image: "Bebidas-tonica.jpeg" },
                    { name: "Café solo", price: "€1.20", description: "Café expreso", vegan: "yes", image: "Bebidas-cafe-solo.jpeg" },
                    { name: "Café cortado", price: "€1.40", description: "Café macchiato", vegan: "no", image: "Bebidas-cafe-cortado.jpeg" },
                    { name: "Café con leche", price: "€1.60", description: "Café con leche", vegan: "no", image: "Bebidas-cafe-con-leche.jpeg" },
                    { name: "Café Americano", price: "€2", description: "Café americano", vegan: "yes", image: "Bebidas-cafe-americano.jpeg" },
                    { name: "Batido", price: "€1.50", description: "Batido estilo colacao", vegan: "no", image: "Bebidas-batido.jpeg" },
                    { name: "Té y infusiones", price: "€1.50", description: "Té e infusiones", vegan: "yes", image: "Bebidas-infusiones.jpeg" },
                    { name: "Copa de vino Tinto", price: "€2.50", description: "Copa de vino tinto", vegan: "yes", image: "Bebidas-copa-tinto.jpeg" },
                    { name: "Copa de vino Blanco", price: "€2.50", description: "Copa de vino blanco", vegan: "yes", image: "Bebidas-copa-blanco.jpeg" },
                    { name: "Cubata", price: "€6", description: "Cubata (ron con Coca Cola)", vegan: "yes", image: "Bebidas-cubata.jpeg" }
                ]
            },
            "Vinos": {
                description: "Vinos cuidadosamente seleccionados para acompañar cualquier comida.",
                items: [
                    { name: "Rosado, Finca del Mar", price: "16€", description: "1 botella de Finca del Mar Rosado", vegan: "yes", image: "Vinos-botella-rosado-finca-del-mar.jpeg" },
                    { name: "Vino blanco Chardonnay, Finca del Mar", price: "16€", description: "Finca del Mar Blanco", vegan: "yes", image: "Vinos-botella-blanco-finca-del-mar.jpeg" },
                    { name: "Vino tinto Rioja, Altos Ibéricos", price: "20€", description: "1 botella de vino tinto Altos Ibéricos, Rioja", vegan: "yes", image: "Vinos-botella-tinto-altos-ibericos.jpeg" }
                    
                ]
            },
            "Postres": {
                description: "Termina tu comida con un toque dulce.",
                items: [
                  { name: "Tarta de queso", price: "5,50 €", "description": "Una clásica tarta de queso cremosa.", vegan: "no", image: "Desserts-cheesecake.jpeg" },
                  { name: "Tarta Galleta 'Lotus'", price: "5,90 €", description: "Deliciosa tarta hecha con galletas Lotus.", vegan: "no", image: "Desserts-lotus-biscuit-cake.jpeg" },
                  { name: "Muerte por chocolate", price: "6,40 €", description: "Un postre de chocolate rico e indulgente.", vegan: "no", image: "Desserts-death-by-chocolate.jpeg" },
                  { name: "Tarta de la abuela", price: "5,50 €", description: "Tarta tradicional hecha con receta familiar.", vegan: "no", image: "Desserts-grandmas-cake.jpeg" },
                  { name: "Tarta velvet", price: "5,50 €", description: "Tarta suave y esponjosa.", vegan: "no", image: "Desserts-velvet-cake.jpeg" },
                  { name: "Coulant de chocolate", price: "5,20 €", description: "Coulant de chocolate caliente con centro fundido.", vegan: "no", image: "Desserts-chocolate-fondant.jpeg" },
                  { name: "Coulant de Bailey's", price: "5,20 €", description: "Coulant infusionado con licor de Bailey's.", vegan: "no", image: "Desserts-baileys-fondant.jpeg" },
                  { name: "Coulant chocolate blanco (S/G)", price: "5,20 €", description: "Coulant de chocolate blanco sin gluten.", vegan: "no", image: "Desserts-white-chocolate-fondant.jpeg" },
                  { name: "Brownie con Galleta cookies", price: "6,00 €", description: "Brownie cubierto con galleta crumble.", vegan: "no", image: "Desserts-brownie-cookie-crumble.jpeg" },
                  { name: "Contesa de nata (S/G)", price: "4,90 €", description: "Tarta de nata sin gluten.", vegan: "no", image: "Desserts-cream-tart.jpeg" },
                  { name: "Tarta al whisky", price: "5,20 €", description: "Tarta esponjosa infusionada con whisky.", vegan: "no", image: "Desserts-whisky-cake.jpeg" },
                  { name: "Trufas de chocolate", price: "5,20 €", description: "Trufas de chocolate decadentes.", vegan: "no", image:"Desserts-chocolate-truffles.jpeg" },
                  { name: "Tarrina helado turrón (S/G)", price: "3,00 €", description: "Tarrina de helado de turrón sin gluten.", vegan: "no", image: "Desserts-nougat-ice-cream.jpeg" },
                  { name: "Naranja con canela (S/G)", price: "3,80 €", description: "Rodajas de naranja fresca con canela.", vegan: "no", image:"Desserts-orange-cinnamon.jpeg" }
                ]
            }
            
        }
    }
};
