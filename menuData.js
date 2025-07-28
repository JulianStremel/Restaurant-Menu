const menuData = {
    en: {
        categories: {
            "Salads": {
                description: "Fresh, vibrant salads made with seasonal ingredients and bold flavors.",
                items: [
                    { name: "Crunchy Salad (Goat Cheese) / Ensalada crujiente queso de cabra", price: "€14", description: "Crispy salad with goat cheese", vegan: "no", glutenfree: "no", image: "Salads-goat-cheese.jpeg" },
                    { name: "Crunchy Vegan Salad (Quinoa patty) / Ensalada crujiente hamburguesa quinoa", price: "€14", description: "Crispy salad with quinoa patty", vegan: "yes", glutenfree: "no", image: "Salads-crunchy-vegan.jpeg" },
                    { name: "Caesar Salad (Chicken) / Ensalada Cesar", price: "€14", description: "Classic Caesar salad with chicken", vegan: "no", glutenfree: "no", image: "Salads-Caesar-salad.jpeg" },
                    { name: "Valencian Salad (Tuna) / Ensalada valenciana con atún", price: "€14", description: "Traditional Valencian salad with tuna", vegan: "no", glutenfree: "no", image: "Salads-valenciana.jpeg" },
                    { name: "Vegetarian Salad without tuna / Ensalada vegetariana sin atún", price: "€12", description: "Fresh mixed salad with vegetables, no tuna", vegan: "yes", glutenfree: "no", image: "Salads-valenciana.jpeg" },
                    { name: "Zucchini Carpaccio / Carpaccio de calabacín", price: "€12", description: "Zucchini slices drizzled with olive oil and seasoning. For a vegan option, simply request it without the cheese.", vegan: "yes", glutenfree: "yes", image: "Salads-zucchini-carpaccio.jpeg" }
                ]
            },
            "Starters and Tapas": {
                description: "A selection of generous small plates, ideal for sharing or as a starter. Some portions are hearty enough to enjoy as a light meal if you're not too hungry.",
                items: [
                    { name: "Tomato & Garlic Bread / Pan con tomate y ajoaceite", price: "€5.50", description: "Toasted bread with tomato and garlic butter", vegan: "no", glutenfree: "no", image: "Starters-bread-tomato-aioli.jpeg" },
                    { name: "Fried Eggplant with Honey / Berenjena rebozada con miel", price: "€9.90", description: "Eggplant fries drizzled with honey", vegan: "no", glutenfree: "no", image: "Starters-fried-eggplant-with-honey.jpeg" },
                    { name: "Fried Calamari / Tapa de calamares", price: "€9.90", description: "Crispy calamari with a side of lemon", vegan: "no", glutenfree: "no", image: "Starters-calamari.jpeg" },
                    { name: "Broken Eggs with Ham / Huevos rotos con jamón", price: "€9.60", description: "Eggs, Ham and fries", vegan: "no", glutenfree: "no", image: "Starters-broken-eggs-with-ham.jpeg" },
                    { name: "Croquettes / Croquetas", price: "€9.00", description: "Iberian ham croquettes, mushroom or cod fish, crispy and delicious", vegan: "no", glutenfree: "no", image: "Starters-mushroom-croquettes.jpeg" },
                    { name: "Fries with Cheese and Bacon / Patatas queso gouda y bacon", price: "€9.80", description: "Fries topped with gouda cheese and bacon", vegan: "no", glutenfree: "no", image: "Starters-fries-gouda-cheese.jpeg" },
                    { name: "Cuttlefish / Tapa de sepia", price: "€14.00", description: "Cuttlefish", vegan: "no", glutenfree: "yes", image: "Starters-cuttlefish.jpeg" },
                    { name: "Patatas Bravas (Wedges)", price: "€9.80", description: "Patatas Bravas Wedges", vegan: "yes", glutenfree: "no", image: "Starters-bravas-wedges.jpeg" },
                    { name: "French Fries / Patatas fritas", price: "€6.70", description: "French Fries", vegan: "yes", glutenfree: "yes", image: "Starters-french-fries.jpeg" },
                    { name: "Sweet fried Potatos with Roquefort / Boniato", price: "€9.90", description: "A nice portion of sweet fried potatoes with melted Roquefort cheese", vegan: "no", glutenfree: "no", image: "Starters-sweet-fries-roquefort.jpeg" }
                    
                ]
            },
            "Combo meals": {
                description: "Delicious Combos of our finest ingredients to satisfy your hunger. Most of them come with fried egg and fries.",
                items: [
                    { name: "Montanejos Cold Cuts / Combinado Embutidos Montanejos", price: "€11", description: "Selection of cold cuts from Montanejos: Chorizo, blood sausage and longaniza", vegan: "no", glutenfree: "no", image: "Combo-sausages.jpeg" },
                    { name: "Grilled Loin / Combinado Lomo", price: "€11", description: "Grilled pork loin served with an egg and fries", vegan: "no", glutenfree: "no", image: "Combo-pork-loin.jpeg" },
                    { name: "Breaded Chicken / Combinado pollo", price: "€11", description: "Breaded chicken fillet served with fries and a fried egg", vegan: "no", glutenfree: "no", image: "Combo-chicken.jpeg" },
                    { name: "Grilled Cuttlefish / Combinado sepia", price: "€16", description: "Grilled cuttlefish served with garlic sauce", vegan: "no", glutenfree: "yes", image: "Combo-cuttlefish.jpeg" },
                    { name: "Fried Calamari / Combinado calamares", price: "€13", description: "Fried calamari with fries and salad", vegan: "no", glutenfree: "no", image: "Combo-calamary.jpeg" },
                    { name: "Special Vegan Ana / Combinado Ana (hamburguesa quinoa, patatas y ensalada)", price: "€13", description: "Quinoa patty with salad and patatas bravas", vegan: "yes", glutenfree: "no", image: "Combo-vegan-Ana.jpeg" },
                    { name: "Swordfish and fries/Emperador Salsa Verde", price: "€15.00", description: "Swordfish fillet accompanied with green sauce", vegan: "no", glutenfree: "no", image: "Combo-swordfish.jpeg" }
                ]
            },
            "House Specialties": {
                description: "Signature dishes that showcase the culinary excellence of our restaurant.",
                items: [
                    { name: "Pork belly / Torrezno", price: "€6.00", description: "Crispy pork belly from Soria", vegan: "no", glutenfree: "yes", image: "Specialties-pork-skin.jpeg" },
                    { name: "Pork Cheeks / Carrillada", price: "€15.50", description: "Pork cheeks with fried potatoes", vegan: "no", glutenfree: "no", image: "Specialties-pork-cheeks.jpeg" },
                    { name: "Octopus / Pulpo", price: "€18.00", description: "Octopus, special recipe of the village", vegan: "no", glutenfree: "yes", image: "Specialties-octopus.jpeg" },
                    { name: "Galiana Jumbo Prawns / Gambón Galiana", price: "€22", description: "Galiana Jumbo Prawns", vegan: "no", glutenfree: "yes", image: "Specialties-galiana-jumbo-prawns.jpeg" },
                    { name: "Slow-Braised Oxtail / Rabo de toro", price: "€16.90", description: "Slow-Braised Oxtail in a Rich Red Wine Reduction, Served with Elegant Seasonal Accompaniments", vegan: "no", glutenfree: "no", image: "Specialties-oxtail.jpeg" },
                    { name: "600g Ribeye Steak / Chuletón", price: "€28", description: "Grilled ribeye steak, perfectly cooked", vegan: "no", glutenfree: "no", image: "Specialties-ribeye.jpeg" }
                    
                ]
            },
            "Burgers": {
                description: "For €3 extra, add fries to your burger for the perfect meal.",
                items: [
                    { name: "House Special Burger / Hamburguesa de la casa", price: "€12", description: "Beef burger with fried egg, bacon, and caramelized onions", vegan: "no", glutenfree: "no", image: "Burgers-house-burger.jpeg" },
                    { name: "Goat Cheese Burger / Hamburguesa con queso de cabra", price: "€12", description: "Beef burger with lettuce, tomato, caramelized onion, mustard sauce, and goat cheese", vegan: "no", glutenfree: "no", image: "Burgers-goat-cheese-burger.jpeg" },
                    { name: "Montanejos Adventure chicken Burger / Hamburguesa adventure de pollo", price: "€12", description: "Chicken burger with bacon, egg, and special sauce", vegan: "no", glutenfree: "no", image: "Burgers-chicken-burger.jpeg" },
                    { name: "Vegetarian Burger / Hamburguesa vegetariana", price: "€12", description: "Falafel burger with lettuce, tomato, caramelized onion, bell pepper, honey mustard, and cheese.  **if you want fries please mention it when you order", vegan: "no", glutenfree: "no", image: "Burgers-falafel-burger.jpeg" },
                    { name: "Vegan Burger / Hamburguesa vegana", price: "€12", description: "Vegan quinoa burger with lettuce, tomato, caramelized onion, and bell pepper.  **if you want fries please mention it when you order", vegan: "yes", glutenfree: "no", image: "Burgers-vegan-burger.jpeg" }
                ]
            },
            "Baguette Sandwiches": {
                description: "Classic baguette sandwiches packed with flavorful ingredients.",
                items: [
                    { name: "Chivito Especial / Chivito", price: "€11", description: "Lettuce, tomato, cheese, bacon, fried egg, and ham", vegan: "no", glutenfree: "no", image: "Bocadillos-chivito.jpeg" },
                    { name: "Polvorilla", price: "€11", description: "Tomato, ham, cheese, and bacon on a toasted bun", vegan: "no", glutenfree: "no", image: "Bocadillos-polvorilla.jpeg" },
                    { name: "Alex Sub / Bocadillo Alex", price: "€10", description: "Gouda cheese, bacon, lomo, and fries", vegan: "no", glutenfree: "no", image: "default-image.jpeg" },
                    { name: "Héctor Sub / Bocadillo Hector", price: "€10", description: "Caramelized onions, bacon, and melted cheese", vegan: "no", glutenfree: "no", image: "default-image.jpeg" }
                ]
            },
            "Sandwiches": {
                description: "Delicious sandwiches for a quick and satisfying meal.",
                items: [
                    { name: "Andrea / Sandwich Andrea", price: "€8", description: "Ham, lettuce, tomato, and pickles", vegan: "no", glutenfree: "no", image: "Sandwiches-Andrea.jpeg" },
                    { name: "Tuna Sandwich / Sandwich de atún", price: "€7", description: "Tuna, mayonnaise, tomato, lettuce, and olives in a toasted sandwich", vegan: "no", glutenfree: "no", image: "Sandwiches-tuna.jpeg" },
                    { name: "Mixed Sandwich / Sandwich mixto", price: "€4", description: "Simple ham and cheese sandwich", vegan: "no", glutenfree: "no", image: "Sandwiches-mixto.jpeg" }
                ]
            },
            "Burritos": {
                description: "Hearty and flavorful burritos for a filling meal.",
                items: [
                    { name: "D-Lux Burrito / Burrito D-lux", price: "€8.50", description: "Chicken, lettuce, tomato, and bacon wrapped in a burrito", vegan: "no", glutenfree: "no", image: "Burritos-d-lux.jpeg" },
                    { name: "Texan Burrito / Burrito tejano", price: "€8.50", description: "Eggplant, zucchini, tomato, and chicken strips", vegan: "no", glutenfree: "no", image: "Burritos-tejano.jpeg" }
                ]
            },
            "Drinks": {
                description: "A refreshing selection of beverages to accompany your meal.",
                items: [
                    { name: "Tinto de Verano", price: "€2.50", description: "Refreshing red wine with soda", vegan: "no", glutenfree: "no", image: "Bebidas-tinto-de-verano.jpeg" },
                    { name: "Draft Beer (Caña) / Caña", price: "€1.70", description: "Draft beer - small", vegan: "no", glutenfree: "no", image: "Bebidas-cerveza-cana.jpeg" },
                    { name: "Draft Beer (Doble) / Doble", price: "€2.50", description: "Draft beer - medium", vegan: "no", glutenfree: "no", image: "Bebidas-cerveza-doble.jpeg" },
                    { name: "Draft Beer (Pint) / Tanque", price: "€4", description: "Draft beer - large", vegan: "no", glutenfree: "no", image: "Bebidas-cerveza-tanque.jpeg" },
                    { name: "Bottled Beer / Tercio de cerveza", price: "€2.50", description: "Bottled beer - (non-alcoholic, toasted, lager, or radler)", vegan: "no", glutenfree: "no", image: "Bebidas-cerveza-tercio-estrella-galicia.jpeg" },
                    { name: "Coca Cola", price: "€2.50", description: "Coca Cola classic or Zero", vegan: "no", glutenfree: "no", image: "Bebidas-coca-cola.jpeg" },
                    { name: "Fanta Lemon-Orange", price: "€2.50", description: "Lemon or orange Fanta", vegan: "no", glutenfree: "no", image: "Bebidas-fanta.jpeg" },
                    { name: "Nestea, Aquarius", price: "€2.50", description: "Cold lemon tea", vegan: "no", glutenfree: "no", image: "Bebidas-nestea.jpeg" },
                    { name: "Bottled Juices / zumo", price: "€2", description: "Bottled juice: Pineapple, Peach, Orange and mix (orange-carrot)", vegan: "no", glutenfree: "no", image: "Bebidas-zumos.jpeg" },
                    { name: "Small Water / agua pequeña", price: "€2", description: "Bottled water 50cl", vegan: "no", glutenfree: "no", image: "Bebidas-agua-pequena.jpeg" },
                    { name: "Large Water 1.5l / Agua grande", price: "€2.50", description: "Bottled water 1.5L", vegan: "no", glutenfree: "no", image: "Bebidas-agua-grande.jpeg" },
                    { name: "Sparkling Water / Agua con gas", price: "€2", description: "Sparkling water", vegan: "no", glutenfree: "no", image: "Bebidas-agua-con-gas.jpeg" },
                    { name: "Tonic / Tónica", price: "€2", description: "Tonic water", vegan: "no", glutenfree: "no", image: "Bebidas-tonica.jpeg" },
                    { name: "Espresso", price: "€1.20", description: "Espresso coffee", vegan: "no", glutenfree: "no", image: "Bebidas-cafe-solo.jpeg" },
                    { name: "Macchiato", price: "€1.40", description: "Macchiato coffee", vegan: "no", glutenfree: "no", image: "Bebidas-cafe-cortado.jpeg" },
                    { name: "Café con leche", price: "€1.60", description: "Coffee with milk", vegan: "no", glutenfree: "no", image: "Bebidas-cafe-con-leche.jpeg" },
                    { name: "Café Americano", price: "€2", description: "American coffee", vegan: "no", glutenfree: "no", image: "Bebidas-cafe-americano.jpeg" },
                    { name: "Hot Chocolate / Colacao", price: "€1.50", description: "Hot Chocolate", vegan: "no", glutenfree: "no", image: "Bebidas-batido.jpeg" },
                    { name: "Tea and Infusions / Té y infusiones", price: "€1.50", description: "Tea and infusions", vegan: "no", glutenfree: "no", image: "Bebidas-infusiones.jpeg" },
                    { name: "Red Wine Glass / Copa de vino tinto", price: "€2.50", description: "Glass of red wine", vegan: "no", glutenfree: "no", image: "Bebidas-copa-tinto.jpeg" },
                    { name: "White Wine Glass / Copa de vino blanco", price: "€2.50", description: "Glass of white wine", vegan: "no", glutenfree: "no", image: "Bebidas-copa-blanco.jpeg" },
                    { name: "Rhum & Coke / Cubata", price: "€6", description: "Rhum and Coca-Cola", vegan: "no", glutenfree: "no", image: "Bebidas-cubata.jpeg" }
                ]
            },
            "Wines": {
                description: "Carefully selected wines to complement any meal.",
                items: [
                    { name: "Red Wine Glass / Copa de vino tinto", price: "€2.50", description: "Glass of red wine", vegan: "no", glutenfree: "no", image: "Bebidas-copa-tinto.jpeg" },
                    { name: "White Wine Glass / Copa de vino blanco", price: "€2.50", description: "Glass of white wine", vegan: "no", glutenfree: "no", image: "Bebidas-copa-blanco.jpeg" },
                    { name: "Rosado, Finca del Mar", price: "11€", description: "Finca del Mar Rosado captivates with its delicate pink hue and delivers a bouquet of fresh strawberries and floral notes. This rosé is well-balanced with a refreshing acidity, ideal for sunny afternoons or paired with Mediterranean cuisine.", vegan: "no", image: "Vinos-botella-rosado-finca-del-mar.jpeg" },
                    { name: "Chardonnay White Wine, Finca del Mar", price: "11€", description: "Finca del Mar Blanco is a crisp, refreshing white wine, offering flavors of green apple, citrus, and a hint of minerality. Its light body and vibrant acidity make it a perfect match for seafood and light pasta dishes.", vegan: "no", image: "Vinos-botella-blanco-finca-del-mar.jpeg" },
                    { name: "Tinto, Finca del Mar", price: "11€", description: "Finca del Mar Tinto is a robust red wine with deep flavors of dark berries, hints of spice, and a smooth finish. Its full body and structured tannins make it excellent for pairing with grilled meats and rich stews.", vegan: "no", image: "Vinos-botella-tinto-finca-del-mar.jpeg" },
                    { name: "Red Wine Rioja, Altos Ibéricos", price: "14€", description: "Altos Ibéricos Crianza presents a contemporary take on Rioja with its vibrant Tempranillo character. Expect a wine with aromas of blackberries and dried herbs, complemented by flavors of black currant, cherry, and a hint of black truffle. Its aging in oak imparts a smooth complexity with well-integrated tannins, making it a versatile choice for pairing with a variety of hearty dishes or enjoying on its own.", vegan: "no", image: "Vinos-botella-tinto-altos-ibericos.jpeg" },
                    { name: "Garnacha Tintorera, Uva Pirata", price: "12€", description: "Uva Pirata Garnacha Tintorera by Vicente Gandía is an intense red wine known for its deep, dark color and rich flavors. Expect a bouquet filled with aromas of black fruits, complemented by hints of toast and English toffee from its barrel aging. On the palate, it's full-bodied with a smooth and elegant finish, making it a perfect match for red meats and robust pasta dishes.", vegan: "no", image: "Vinos-botella-garnacha-tintorera-uva-pirata.jpeg" },
                    { name: "Garnacha Blanca, Uva Pirata", price: "12€", description: "Uva Pirata Garnacha Blanca by Vicente Gandia is a white wine that captures the essence of the Mediterranean with its fresh and lively character. Expect a bouquet filled with aromas of green apple, pear, and hints of tropical flowers, leading to a palate that's both refreshing and crisp, with a delightful acidity that ends in a memorable aftertaste reminiscent of apple and jasmine.", vegan: "no", image: "Vinos-botella-garnacha-blanca-uva-pirata.jpeg" },
                    { name: "El Miracle Art", price: "16€", description: "El Miracle Art is a signature red wine from the Alicante D.O., showcasing the artistic spirit of Vicente Gandia's winemakers. This wine blends various red grape varieties to offer a smooth experience with elegant tannins, dominated by flavors of dark fruits, hints of spice, and vanilla from oak aging. Its label features artwork, making each bottle a unique piece of art that reflects the creativity of Valencia's artists.", vegan: "no", image: "Vinos-botella-el-miracle-art.jpeg" },
                    { name: "Bobal Noir", price: "18€", description: "Bobal Negro by Vicente Gandía reflects the rich tradition of the Bobal grape, known for its deep color and robust structure. This wine offers a complex bouquet of dark fruits, with subtle oak influences, providing a full-bodied experience with a balanced acidity, ideal for pairing with red meats and hearty dishes.", vegan: "no", image: "Vinos-botella-bobal-negro.jpeg" },
                    { name: "Bobal Rosé", price: "18€", description: "Bobal Rosa from Vicente Gandía is a refreshing rosé wine, showcasing the unique Bobal grape from the Utiel-Requena region. Expect a delightful blend of rose petals, red fruits, and a hint of grapefruit on the nose, with a smooth, fresh, and very approachable taste that makes it perfect for light meals or as an aperitif.", vegan: "no", image: "Vinos-botella-bobal-rosa.jpeg" },
                    { name: "Bobal Blanc", price: "18€", description: "The Bobal Blanco from Vicente Gandia is an intriguing white wine crafted from red Bobal grapes, showcasing the versatility of this traditional Spanish variety. This wine is noted for its pale yellow color with a slight reddish hue, reflecting its unique production process. On the palate, expect a harmonious acidity with a refreshing finish that hints at forest fruits, offering an elegant and characterful experience. It's a perfect match for those looking to explore beyond conventional white wines, with its serving temperature best at 5-7ºC to enhance its nuanced flavors.", vegan: "no", image: "Vinos-botella-bobal-blanco.jpeg" },
                    { name: "Coto Crianza, Rioja", price: "12€", description: "El Coto Crianza is a red wine from Rioja, Spain, made entirely from Tempranillo grapes. It's aged for 12 months in American oak barrels, offering a balanced blend of fruit flavors like raspberry and cherry, with hints of spice and vanilla for a smooth finish. This wine is known for its approachable taste profile, making it a versatile choice for pairing with a variety of dishes.", vegan: "no", image: "Vinos-botella-coto-crianza.jpeg" },
                    { name: "Beronia Crianza, Rioja", price: "18€", description: "Beronia Crianza is a delightful example of Rioja's winemaking tradition, offering a harmonious blend where Tempranillo grapes play the lead role. This wine is aged for 12 months in mixed barrels of American and French oak, which imparts a complex bouquet of dark fruits, like black cherry, alongside hints of spice, vanilla, and a subtle earthiness. On the palate, it presents a smooth, well-balanced experience with ripe fruit flavors, gentle tannins, and a finish that carries notes of oak, making it versatile for pairing with a wide range of dishes, from roasted meats to hearty stews.", vegan: "no", image: "Vinos-botella-beronia-crianza.jpeg" },
                    { name: "Melior Matarromera, Ribera del Duero", price: "20€", description: "Melior Matarromera from Ribera del Duero is an elegant red wine that embodies the essence of the Tempranillo grape from some of Spain's finest wine regions. This wine blends the freshness and vibrant tannins from Ribera del Duero with the rich, fruity nuances from other top areas, offering a complex profile with hints of dark fruit, spice, and a subtle oak influence due to its aging process. It's versatile enough for social drinking or pairing with a variety of meats, providing a smooth, lingering finish.", vegan: "no", image: "Vinos-botella-melior-matarromera.jpeg" },
                    { name: "Punto Geodésico, Ribera del Duero", price: "37€", description: "Punto Geodésico from the Ribera del Duero region is a premium Spanish red wine made from 100% Tempranillo grapes, cultivated at high altitudes. This wine is known for its deep violet-red color, with complex aromas of blackberry, chocolate-covered espresso beans, and a hint of spices. On the palate, it offers an opulent texture with flavors of cherry, raspberry, mocha, and caramel, leading to a long finish with notes of fresh-ground coffee. Its well-structured tannins and vibrant acidity make it a wine with great aging potential, ideal for pairing with robust dishes like red meats or rich pastas.", vegan: "no", image: "Vinos-botella-punto-geodesico.jpeg" },
                    { name: "Trus Roble, Ribera del Duero", price: "17€", description: "Trus Roble is a wine that encapsulates the essence of the Ribera del Duero region, known for its robust and expressive Tempranillo. This wine offers a bouquet of ripe red and black fruits, complemented by spicy and balsamic notes with a hint of roasted flavors. On the palate, it's smooth and well-balanced, showcasing a harmonious acidity that makes it an excellent companion for a variety of hearty dishes.", vegan: "no", image: "Vinos-botella-trus-roble.jpeg" },
                    { name: "Santa Rosa, Enrique Mendoza", price: "28€", description: "Santa Rosa by Enrique Mendoza is a robust red wine that offers a symphony of dark fruit flavors with hints of spice and vanilla, derived from its aging in oak. Expect a full-bodied experience with a smooth finish, perfect for pairing with red meats or hearty pasta dishes.", vegan: "no", image: "Vinos-botella-santa-rosa.jpeg" }
                ]
            },
            "Desserts": {
                description: "Finish your meal with a sweet touch.",
                items: [
                        { name: "Cheesecake / Tarta de queso", price: "€5.50", description: "A classic creamy cheesecake.", vegan: "no", glutenfree: "no", image: "Desserts-cheesecake.jpeg" },
                        { name: "Lotus Biscuit Cake / Tarta Galleta Lotus", price: "€5.90", description: "A delicious cake made with Lotus biscuits.", vegan: "no", glutenfree: "no", image: "Desserts-lotus-biscuit-cake.jpeg" },
                        { name: "Death by Chocolate / Muerte por Chocolate", price: "€6.40", description: "Rich and indulgent chocolate dessert.", vegan: "no", glutenfree: "no", image: "Desserts-death-by-chocolate.jpeg" },
                        { name: "Grandma's Cake / Tarta de la abuela", price: "€5.50", description: "Traditional cake made with a family recipe.", vegan: "no", glutenfree: "no", image: "Desserts-grandmas-cake.jpeg" },
                        { name: "Velvet Cake / Tarta Velvet", price: "€5.50", description: "Soft and moist velvet cake.", vegan: "no", glutenfree: "no", image: "Desserts-velvet-cake.jpeg" },
                        { name: "Chocolate Fondant / Coulant de chocolate", price: "€5.20", description: "Warm chocolate fondant with a molten center.", vegan: "no", glutenfree: "no", image: "Desserts-chocolate-fondant.jpeg" },
                        { name: "Bailey's Fondant / Coulant de Baileys", price: "€5.20", description: "Fondant infused with Bailey's liqueur.", vegan: "no", glutenfree: "no", image: "Desserts-baileys-fondant.jpeg" },
                        { name: "White Chocolate Fondant (Gluten-Free) / Coulant choco blanco", price: "€5.20", description: "Gluten-free white chocolate fondant.", vegan: "no", glutenfree: "yes", image: "Desserts-white-chocolate-fondant.jpeg" },
                        { name: "Brownie with Cookie Crumble / Brownie", price: "€6.00", description: "A brownie topped with cookie crumble.", vegan: "no", glutenfree: "no", image: "Desserts-brownie-cookie-crumble.jpeg" },
                        { name: "Ice cream Tart (Gluten-Free) / Contesa de Nata", price: "€4.90", description: "Gluten-free ice cream tart with cream", vegan: "no", glutenfree: "yes", image: "Desserts-contesa.jpeg" },
                        { name: "Whisky Cake / Tarta al Whisky", price: "€5.20", description: "A moist cake infused with whisky.", vegan: "no", glutenfree: "no", image: "Desserts-whisky-cake.jpeg" },
                        { name: "Chocolate Truffles / Trufas de chocolate", price: "€5.20", description: "Decadent chocolate truffles.", vegan: "no", glutenfree: "no", image: "Desserts-chocolate-truffles.jpeg" },
                        { name: "Nougat Ice Cream Cup (Gluten-Free) / Tarrina helado Turrón", price: "€3.00", description: "A gluten-free nougat ice cream cup.", vegan: "no", glutenfree: "yes", image: "Desserts-nougat-ice-cream.jpeg" },
                        { name: "Orange with Cinnamon (Gluten-Free) / Naranjas con canela", price: "€3.80", description: "Fresh orange slices with cinnamon.", vegan: "yes", glutenfree: "yes", image: "Desserts-orange-cinnamon.jpeg" }
                ]
            }         

        }
    },
    fr: {
        categories: {
            "Salades": {
                description: "Des salades fraîches et vibrantes, préparées avec des ingrédients de saison et des saveurs audacieuses.",
                items: [
                    { name: "Salade Croquante (Fromage de chèvre) / Ensalada crujiente queso de cabra", price: "€14", description: "Salade croquante avec du fromage de chèvre", vegan: "no", glutenfree: "no", image: "Salads-goat-cheese.jpeg" },
                    { name: "Salade croquante vegan (Galette de quinoa) / Ensalada crujiente hamburguesa quinoa", price: "€14", description: "Salade croquante avec galette de quinoa", vegan: "yes", glutenfree: "no", image: "Salads-crunchy-vegan.jpeg" },
                    { name: "Salade César (Poulet) / Ensalada Cesar", price: "€14", description: "Salade César classique avec poulet", vegan: "no", glutenfree: "no", image: "Salads-Caesar-salad.jpeg" },
                    { name: "Salade Valencienne (Thon) / Ensalada valenciana con atún", price: "€14", description: "Salade valencienne traditionnelle avec du thon", vegan: "no", glutenfree: "yes", image: "Salads-valenciana.jpeg" },
                    { name: "Salade Végétarienne sans thon / Ensalada vegetariana", price: "€12", description: "Salade mixte sans thon", vegan: "yes", glutenfree: "yes", image: "Salads-valenciana.jpeg" },
                    { name: "Carpaccio de Courgette / Carpaccio de calabacín", price: "€12", description: "Tranches de courgette arrosées d'huile d'olive et assaisonnées. Pour une version végan, demandez simplement sans fromage.", vegan: "yes", glutenfree: "yes", image: "Salads-zucchini-carpaccio.jpeg" }
                ]
            },
            "Entrées et Tapas": {
                description: "Une sélection de petites assiettes généreuses, idéales à partager ou en entrée. Certaines portions sont suffisamment copieuses pour constituer un repas léger si vous n'avez pas très faim.",
                items: [
                    { name: "Pain Tomate et Ajoaceite / Pan con tomate y ajoaceite", price: "€5.50", description: "Pain grillé avec tomate et ajoaceite", vegan: "no", glutenfree: "no", image: "Starters-bread-tomato-aioli.jpeg" },
                    { name: "Aubergines Frites au Miel / Berenjenas con miel", price: "€9.90", description: "Aubergines frites avec miel", vegan: "no", glutenfree: "no", image: "Starters-fried-eggplant-with-honey.jpeg" },
                    { name: "Calamars Frits à l'Andalouse / Tapa de calamares", price: "€9.90", description: "Calamars frits à la façon andalouse", vegan: "no", glutenfree: "no", image: "Starters-calamari.jpeg" },
                    { name: "Œufs Brouillés avec Jambon / Huevos revueltos con jamón", price: "€9.60", description: "Œufs frits avec jambon sur des frites", vegan: "no", glutenfree: "no", image: "Starters-broken-eggs-with-ham.jpeg" },
                    { name: "Croquettes croustillantes / Croquetas", price: "€9.00", description: "Croquettes croustillantes de jambon ibérique, champignons ou morue", vegan: "no", glutenfree: "no", image: "Starters-mushroom-croquettes.jpeg" },
                    { name: "Pommes de Terre au Gouda et Bacon / Patatas queso gouda", price: "€9.80", description: "Pommes de terre frites couvertes de gouda et bacon", vegan: "no", glutenfree: "no", image: "Starters-fries-gouda-cheese.jpeg" },
                    { name: "Frites de Patate Douce au Roquefort / Boniato", price: "€9.90", description: "Frites de patate douce avec sauce roquefort", vegan: "no", glutenfree: "no", image: "Starters-sweet-fries-roquefort.jpeg" },
                    { name: "Plateau de Jambon Serrano Bodega / Tabla de jamón", price: "€13.00", description: "Jambon serrano bodega servi sur une planche", vegan: "no", glutenfree: "no", image: "starter10.jpg" },
                    { name: "Seiche Entière à la Plancha / Tapa de sepia", price: "€14.00", description: "Seiche entière grillée avec ail et persil", vegan: "no", glutenfree: "yes", image: "Starters-cuttlefish.jpeg" },
                    { name: "Assiète de frites / Patatas fritas", price: "€6.70", description: "Assiète de frites", vegan: "yes", glutenfree: "yes", image: "Starters-french-fries.jpeg" },
                    { name: "Patatas Bravas", price: "€9.80", description: "Pommes de terre frites avec sauce brava", vegan: "yes", glutenfree: "no", image: "Starters-bravas-wedges.jpeg" }
                    
                ]
            },
            "Assièttes Combinées": {
                description: "Délicieuses combinaisons de nos meilleurs ingrédients pour satisfaire votre faim. Ils sont en règle générale servi avec un oeuf frit et des frites",
                items: [
                    { name: "Charcuterie de Montanejos / Combinado Embutido", price: "€11", description: "Sélection de charcuteries de Montanejos: Chorizo, boudin et longaniza", vegan: "no", glutenfree: "no", image: "Combo-sausages.jpeg" },
                    { name: "Longe de Porc Grillée / Combinado Lomo", price: "€11", description: "Longe de porc grillée servie avec un oeuf et des frites", vegan: "no", glutenfree: "no", image: "Combo-pork-loin.jpeg" },
                    { name: "Poulet Pané / Combinado pollo", price: "€11", description: "Escalope de poulet panée avec frites et un oeuf frit", vegan: "no", glutenfree: "no", image: "Combo-chicken.jpeg" },
                    { name: "Seiche Grillée / Combinado Sepia", price: "€16", description: "Seiche grillée avec sauce à l'ail", vegan: "no", glutenfree: "yes", image: "Combo-cuttlefish.jpeg" },
                    { name: "Calamars Frits / Combinado Calamares", price: "€13", description: "Calamars frits avec salade et frites", vegan: "no", glutenfree: "no", image: "Combo-calamary.jpeg" },
                    { name: "Espadon Sauce Verte / Combinado Emperador", price: "€15.00", description: "Filet d'espadon accompagné de sauce verte, salade et frites", vegan: "no", glutenfree: "no", image: "Combo-swordfish.jpeg" },
                    { name: "Spécial Vegan Ana / Combinado Ana (hamburguesa quinoa, patatas y ensalada)", price: "€13", description: "Galette de quinoa avec salade et patatas bravas", vegan: "yes", glutenfree: "no", image: "Combo-vegan-Ana.jpeg" }

                ]
            },
            "Spécialités de la maison": {
                description: "Plats signatures qui montrent l'excellence culinaire de notre restaurant.",
                items: [
                    { name: "Lard de Soria / Torezno", price: "€6.00", description: "Lard croustillants de la région de Soria", vegan: "no", glutenfree: "yes", image: "Specialties-pork-skin.jpeg" },
                    { name: "Queue de Taureau au Vin Rouge / Rabo de toro", price: "€16.90", description: "Queue de taureau mijotée au vin rouge", vegan: "no", glutenfree: "no", image: "Specialties-oxtail.jpeg" },
                    { name: "Joue de Porc Mijares / Carrillada", price: "€15.50", description: "Joue de porc mijotée avec des frites", vegan: "no", glutenfree: "no", image: "Specialties-pork-cheeks.jpeg" },
                    { name: "Entrecote de Boeuf 600g / Chuletón", price: "€28.00", description: "Entrecote de boeuf de 600g, grillée à point", vegan: "no", glutenfree: "no", image: "Specialties-ribeye.jpeg" },
                    { name: "Poulpe Vidigonero / Pulpo Vidigonero", price: "€18.00", description: "Poulpe grillé à la façon Vidigonero (recette du chef)", vegan: "no", glutenfree: "yes", image: "Specialties-octopus.jpeg" },
                    { name: "Gambas Galiana / Gambón Galiana", price: "€22.00", description: "Gambas géantes style Galiana", vegan: "no", glutenfree: "yes", image: "Specialties-galiana-jumbo-prawns.jpeg" }
                   

                ]
            },
            "Hamburgers": {
                description: "Pour 3€ supplémentaires, ajoutez des frites à votre hamburger pour un repas parfait.",
                items: [
                    { name: "Spécial de la Maison / Hamburguesa de la casa", price: "€12.00", description: "Hamburger de bœuf avec laitue, tomate, oignon caramélisé, fromage, bacon et œuf frit", vegan: "no", glutenfree: "no", image: "Burgers-house-burger.jpeg" },
                    { name: "Fromage de Chèvre / Hamburguesa queso de cabra", price: "€12.00", description: "Hamburger de bœuf avec laitue, tomate, oignon caramélisé, sauce moutarde et fromage de chèvre", vegan: "no", glutenfree: "no", image: "Burgers-goat-cheese-burger.jpeg" },
                    { name: "Montanejos Adventure au Poulet / Hamburguesa Adventure pollo", price: "€12.00", description: "Hamburger de poulet avec bacon, mayonnaise, laitue, tomate, et fromage", vegan: "no", glutenfree: "no", image: "Burgers-chicken-burger.jpeg" },
                    { name: "Végétarien / Hamburguesa vegetariana", price: "€12.00", description: "Burger de falafel avec laitue, tomate, oignon caramélisé, poivron, moutarde au miel et fromage. **les frites doivent être commandées à part", vegan: "no", glutenfree: "no", image: "Burgers-falafel-burger.jpeg" },
                    { name: "Vegan / Hamburguesa vegana", price: "€12.00", description: "Burger végan à la quinoa avec laitue, tomate, oignon caramélisé et poivron.  **les frites doivent être commandées à part", vegan: "yes", glutenfree: "no", image: "Burgers-vegan-burger.jpeg" }
                ]
            },
            "Sandwich pain baguette": {
                "description": "Sandwichs baguette classiques garnis d'ingrédients savoureux.",
                "items": [
                    { "name": "Chivito spécial / Chivito", "price": "11€", "description": "Laitue, tomate, fromage, bacon, œuf frit, et jambon", "vegan": "non", "glutenfree": "non", "image": "Bocadillos-chivito.jpeg" },
                    { "name": "Polvorilla", "price": "11€", "description": "Tomate, jambon, fromage, et bacon sur un pain grillé", "vegan": "non", "glutenfree": "non", "image": "Bocadillos-polvorilla.jpeg" },
                    { "name": "Alex / Bocadillo Alex", "price": "10€", "description": "Fromage gouda, bacon, lomo, et frites", "vegan": "non", "glutenfree": "non", "image": "default-image.jpeg" },
                    { "name": "Héctor / Bocadillo Hector", "price": "10€", "description": "Oignons caramélisés, bacon, et fromage fondu", "vegan": "non", "glutenfree": "non", "image": "default-image.jpeg" }
                ]
            },
            "Sandwichs": {
                "description": "Délicieux sandwichs pour un repas rapide et satisfaisant.",
                "items": [
                    { name: "Andrea / Sandwich Andrea", price: "8€", description: "Jambon, laitue, tomate et cornichons", vegan: "no", glutenfree: "no", image: "Sandwiches-Andrea.jpeg" },
                    { name: "Sandwich au thon / Sandwich de atún", price: "7€", description: "Thon, mayonnaise, tomate, laitue et olives dans un sandwich grillé", vegan: "no", glutenfree: "no", image: "Sandwiches-tuna.jpeg" },
                    { name: "Sandwich mixte / Sandwich mixto", price: "4€", description: "Simple sandwich au jambon et fromage", vegan: "no", glutenfree: "no", image: "Sandwiches-mixto.jpeg" }
                ]
            },
            
            
            "Burritos": {
                description: "Des burritos copieux et savoureux pour un repas complet.",
                items: [
                    { name: "Burrito D-Lux / Burrito D-Lux", price: "€8.50", description: "Poulet, laitue, tomate et bacon enveloppés dans un burrito", vegan: "no", glutenfree: "no", image: "Burritos-d-lux.jpeg" },
                    { name: "Burrito Texan / Burrito Tejano", price: "€8.50", description: "Aubergine, courgette, tomate et morceaux de poulet", vegan: "no", glutenfree: "no", image: "Burritos-tejano.jpeg" }
                ]
            },
            "Boissons": {
                description: "Une sélection de boissons rafraîchissantes pour accompagner votre repas.",
                items: [
                    { name: "Tinto de Verano", price: "€2.50", description: "Vin rouge rafraîchissant avec soda", vegan: "no", glutenfree: "no", image: "Bebidas-tinto-de-verano.jpeg" },
                    { name: "Bière pression (Petit) / Cerveza caña", price: "€1.70", description: "Bière pression - petite", vegan: "no", glutenfree: "no", image: "Bebidas-cerveza-cana.jpeg" },
                    { name: "Bière pression (Moyen) / Cerveza doble", price: "€2.50", description: "Bière pression - moyenne", vegan: "no", glutenfree: "no", image: "Bebidas-cerveza-doble.jpeg" },
                    { name: "Bière pression (Grand) / Cerveza tanque", price: "€4", description: "Bière pression - grande", vegan: "no", glutenfree: "no", image: "Bebidas-cerveza-tanque.jpeg" },
                    { name: "Bière bouteille 300ml / Tercio", price: "€2.50", description: "Bière en bouteille (sans alcool, brune, blonde ou radler)", vegan: "no", glutenfree: "no", image: "Bebidas-cerveza-tercio-estrella-galicia.jpeg" },
                    { name: "Coca", price: "€2.50", description: "Coca classique ou Zéro", vegan: "no", glutenfree: "no", image: "Bebidas-coca-cola.jpeg" },
                    { name: "Fanta Citron-Orange", price: "€2.50", description: "Fanta citron ou orange", vegan: "no", glutenfree: "no", image: "Bebidas-fanta.jpeg" },
                    { name: "Nestea, Aquarius", price: "€2.50", description: "Thé froid au citron", vegan: "no", glutenfree: "no", image: "Bebidas-nestea.jpeg" },
                    { name: "Jus en bouteille / zumo", price: "€2", description: "Jus en bouteille : Ananas, Pêche, Orange et mixte (orange-carotte)", vegan: "no", glutenfree: "no", image: "Bebidas-zumos.jpeg" },
                    { name: "Petite bouteille d'Eau / Agua pequeña", price: "€2", description: "Bouteille d'eau 50cl", vegan: "no", glutenfree: "no", image: "Bebidas-agua-pequena.jpeg" },
                    { name: "Grande bouteille d'Eau 1.5l / Agua grande", price: "€2.50", description: "Bouteille d'eau 1.5L", vegan: "no", glutenfree: "no", image: "Bebidas-agua-grande.jpeg" },
                    { name: "Eau Pétillante / Agua con gas", price: "€2", description: "Eau gazeuse", vegan: "no", glutenfree: "no", image: "Bebidas-agua-con-gas.jpeg" },
                    { name: "Tonic / Tónica", price: "€2", description: "Eau tonique", vegan: "no", glutenfree: "no", image: "Bebidas-tonica.jpeg" },
                    { name: "Verre de Vin Rouge / copa de vino tinto", price: "€2.50", description: "Verre de vin rouge", vegan: "no", glutenfree: "no", image: "Bebidas-copa-tinto.jpeg" },
                    { name: "Verre de Vin Blanc / Copa de vino blanco", price: "€2.50", description: "Verre de vin blanc", vegan: "no", glutenfree: "no", image: "Bebidas-copa-blanco.jpeg" },
                    { name: "Expresso / Café solo", price: "€1.20", description: "Café expresso", vegan: "no", glutenfree: "no", image: "Bebidas-cafe-solo.jpeg" },
                    { name: "Café Macchiato / Cortado", price: "€1.40", description: "Café macchiato", vegan: "no", glutenfree: "no", image: "Bebidas-cafe-cortado.jpeg" },
                    { name: "Café au Lait / Café con leche", price: "€1.60", description: "Café au lait", vegan: "no", glutenfree: "no", image: "Bebidas-cafe-con-leche.jpeg" },
                    { name: "Café Americano", price: "€2", description: "Café allongé", vegan: "no", glutenfree: "no", image: "Bebidas-cafe-americano.jpeg" },
                    { name: "Chocolat chaud / Colacao", price: "€1.50", description: "Boisson au chocolat", vegan: "no", glutenfree: "no", image: "Bebidas-batido.jpeg" },
                    { name: "Thé et Infusions / Té", price: "€1.50", description: "Thé et infusions", vegan: "no", glutenfree: "no", image: "Bebidas-infusiones.jpeg" },
                    { name: "Rhum & Coca / Cubata", price: "€6", description: "Rhum et Coca Cola", vegan: "no", glutenfree: "no", image: "Bebidas-cubata.jpeg" }
                ]
            },
            "Vins": {
                description: "Des vins soigneusement sélectionnés pour accompagner tout repas.",
                items: [
                    { name: "Verre de Vin Rouge / copa de vino tinto", price: "€2.50", description: "Verre de vin rouge", vegan: "no", glutenfree: "no", image: "Bebidas-copa-tinto.jpeg" },
                    { name: "Verre de Vin Blanc / Copa de vino blanco", price: "€2.50", description: "Verre de vin blanc", vegan: "no", glutenfree: "no", image: "Bebidas-copa-blanco.jpeg" },{ name: "Rosado, Finca del Mar", price: "11€", description: "Le Finca del Mar Rosado séduit avec sa teinte rose délicate et offre un bouquet de fraises fraîches et de notes florales. Ce rosé est bien équilibré avec une acidité rafraîchissante, parfait pour les après-midis ensoleillés ou pour accompagner une cuisine méditerranéenne.", vegan: "no", glutenfree: "no", image: "Vinos-botella-rosado-finca-del-mar.jpeg" },
                    { name: "Vin blanc Chardonnay, Finca del Mar", price: "11€", description: "Le Finca del Mar Blanc est un vin blanc croquant et rafraîchissant, offrant des saveurs de pomme verte, de citron, et une touche de minéralité. Son corps léger et son acidité vivante en font un compagnon idéal pour les fruits de mer et les plats de pâtes légères.", vegan: "no", glutenfree: "no", image: "Vinos-botella-blanco-finca-del-mar.jpeg" },
                    { name: "Vin Rouge, Finca del Mar", price: "11€", description: "Finca del Mar Tinto is a robust red wine with deep flavors of dark berries, hints of spice, and a smooth finish. Its full body and structured tannins make it excellent for pairing with grilled meats and rich stews.", vegan: "no", glutenfree: "no", image: "Vinos-botella-tinto-finca-del-mar.jpeg" },
                    { name: "Vin rouge Rioja, Altos Ibéricos", price: "14€", description: "Altos Ibéricos Crianza presents a contemporary take on Rioja with its vibrant Tempranillo character. Expect a wine with aromas of blackberries and dried herbs, complemented by flavors of black currant, cherry, and a hint of black truffle. Its aging in oak imparts a smooth complexity with well-integrated tannins, making it a versatile choice for pairing with a variety of hearty dishes or enjoying on its own.", vegan: "no", glutenfree: "no", image: "Vinos-botella-tinto-altos-ibericos.jpeg" },
                    { name: "Garnacha Tintorera, Uva Pirata", price: "12€", description: "Le Uva Pirata Garnacha Tintorera de Vicente Gandía est un vin rouge intense, célèbre pour sa couleur profonde et ses saveurs riches. Il offre un bouquet d'arômes de fruits noirs, avec des notes de toast et de caramel anglais provenant de son vieillissement en fût. En bouche, il est corsé avec une finition lisse et élégante, idéal pour accompagner les viandes rouges et les plats de pâtes consistants.", vegan: "no", glutenfree: "no", image: "Vinos-botella-garnacha-tintorera-uva-pirata.jpeg" },
                    { name: "Garnacha Blanca, Uva Pirata", price: "12€", description: "Le Uva Pirata Garnacha Blanca de Vicente Gandia est un vin blanc qui capture l'essence de la Méditerranée avec son caractère frais et vivifiant. Attendez-vous à un bouquet rempli d'arômes de pomme verte, de poire, et de notes de fleurs tropicales, menant à un palais à la fois rafraîchissant et croquant, avec une acidité agréable qui se termine par un arrière-goût mémorable de pomme et de jasmin.", vegan: "no", image: "Vinos-botella-garnacha-blanca-uva-pirata.jpeg" },
                    { name: "El Miracle Art", price: "16€", description: "El Miracle Art est un vin rouge emblématique de l'A.O.C. Alicante, qui reflète l'esprit artistique des vignerons de Vicente Gandia. Ce vin est un assemblage de plusieurs cépages rouges offrant une expérience veloutée avec des tanins élégants, marqué par des saveurs de fruits noirs, des notes épicées et une touche de vanille due au vieillissement en fût de chêne. L'étiquette présente une œuvre d'art, rendant chaque bouteille unique et symbolique de la créativité des artistes de Valence.", vegan: "no", glutenfree: "no", image: "Vinos-botella-el-miracle-art.jpeg" },
                    { name: "Bobal Noir", price: "18€", description: "Le Bobal Negro de Vicente Gandía incarne la riche tradition du cépage Bobal, réputé pour sa couleur profonde et sa structure robuste. Ce vin propose un bouquet complexe de fruits noirs, avec des influences subtiles de chêne, offrant une expérience pleine en bouche avec une acidité équilibrée, idéale pour accompagner les viandes rouges et les plats robustes.", vegan: "no", glutenfree: "no", glutenfree: "no", image: "Vinos-botella-bobal-negro.jpeg" },
                    { name: "Bobal Rosé", price: "18€", description: "Le Bobal Rosa de Vicente Gandía est un vin rosé rafraîchissant, mettant en vedette le cépage Bobal unique de la région d'Utiel-Requena. Attendez-vous à un mélange délicieux de pétales de rose, de fruits rouges et une touche de pamplemousse au nez, avec un goût lisse, frais et très abordable, idéal pour les repas légers ou comme apéritif.", vegan: "no", glutenfree: "no", glutenfree: "no", image: "Vinos-botella-bobal-rosa.jpeg" },
                    { name: "Bobal Blanc", price: "18€", description: "Le Bobal Blanco de Vicente Gandia est un vin blanc intrigant élaboré à partir de raisins rouges Bobal, mettant en valeur la versatilité de ce cépage traditionnel espagnol. Ce vin se distingue par sa couleur jaune pâle avec une teinte légèrement rougeâtre, reflétant son processus de production unique. En bouche, il présente une acidité harmonieuse avec une finition rafraîchissante qui évoque les fruits des bois, offrant une expérience élégante et pleine de caractère. C'est le choix parfait pour ceux qui souhaitent explorer au-delà des vins blancs conventionnels, avec une température de service idéale entre 5 et 7ºC pour exalter ses saveurs subtiles.", vegan: "ynoes", glutenfree: "no", image: "Vinos-botella-bobal-blanco.jpeg" },
                    { name: "Coto Crianza, Rioja", price: "12€", description: "El Coto Crianza est un vin rouge de la région de Rioja en Espagne, élaboré à 100% à partir de raisins Tempranillo. Il est vieilli pendant 12 mois en fûts de chêne américain, offrant un équilibre parfait entre des saveurs fruitées comme la framboise et la cerise, avec des notes épicées et de vanille pour une finition douce. Ce vin est reconnu pour son profil gustatif accessible, ce qui en fait un choix polyvalent pour accompagner divers plats.", vegan: "no", glutenfree: "no", image: "Vinos-botella-coto-crianza.jpeg" },
                    { name: "Beronia Crianza, Rioja", price: "18€", description: "Le Beronia Crianza est un exemple exquis de la tradition viticole de Rioja, où le Tempranillo prend la vedette. Ce vin est affiné pendant 12 mois dans des fûts de chêne américain et français, offrant un bouquet complexe de fruits noirs, comme la cerise noire, accompagné de touches d'épices, de vanille et d'une légère terreuse. En bouche, il révèle une expérience lisse et équilibrée avec des saveurs de fruits mûrs, des tanins doux et une finale qui rappelle le chêne, ce qui le rend idéal pour accompagner une variété de plats, des viandes rôties aux ragoûts robustes.", vegan: "no", glutenfree: "no", glutenfree: "no", image: "Vinos-botella-beronia-crianza.jpeg" },
                    { name: "Melior Matarromera, Ribera del Duero", price: "20€", description: "Le Melior Matarromera de Ribera del Duero est un vin rouge élégant qui capture l'essence du cépage Tempranillo provenant de certaines des meilleures régions viticoles d'Espagne. Ce vin mélange la fraîcheur et les tanins vifs du Ribera del Duero avec les nuances fruitées et riches d'autres zones de premier ordre, offrant un profil complexe avec des notes de fruits noirs, d'épices, et une subtile influence du chêne grâce à son vieillissement. Il est suffisamment polyvalent pour être apprécié lors de réunions sociales ou pour accompagner divers plats de viande, avec une finition douce et persistante.", vegan: "no", glutenfree: "no", image: "Vinos-botella-melior-matarromera.jpeg" },
                    { name: "Punto Geodésico, Ribera del Duero", price: "37€", description: "Punto Geodésico from the Ribera del Duero region is a premium Spanish red wine made from 100% Tempranillo grapes, cultivated at high altitudes. This wine is known for its deep violet-red color, with complex aromas of blackberry, chocolate-covered espresso beans, and a hint of spices. On the palate, it offers an opulent texture with flavors of cherry, raspberry, mocha, and caramel, leading to a long finish with notes of fresh-ground coffee. Its well-structured tannins and vibrant acidity make it a wine with great aging potential, ideal for pairing with robust dishes like red meats or rich pastas.", vegan: "no", glutenfree: "no", image: "Vinos-botella-punto-geodesico.jpeg" },
                    { name: "Trus Roble, Ribera del Duero", price: "17€", description: "Trus Roble capture l'essence de la région de Ribera del Duero, célèbre pour son Tempranillo robuste et expressif. Ce vin présente un bouquet de fruits rouges et noirs mûrs, accompagné de notes épicées et balsamiques avec une touche de torréfaction. En bouche, il est doux et bien équilibré, avec une acidité harmonieuse qui en fait un excellent partenaire pour une diversité de plats copieux.", vegan: "no", glutenfree: "no", image: "Vinos-botella-trus-roble.jpeg" },
                    { name: "Santa Rosa, Enrique Mendoza", price: "28€", description: "Santa Rosa par Enrique Mendoza est un vin rouge robuste offrant une symphonie de saveurs de fruits noirs avec des notes d'épices et de vanille, grâce à son vieillissement en fût de chêne. Attendez-vous à une expérience pleine en bouche avec une finition lisse, parfaite pour accompagner les viandes rouges ou les plats de pâtes copieux.", vegan: "no", glutenfree: "no", glutenfree: "no", image: "Vinos-botella-santa-rosa.jpeg" }
                    
                ]
            },
            "Desserts": {
                description: "Terminez votre repas avec une touche sucrée.",
                items: [
                    { name: "Cheesecake / Tarta de queso", price: "5,50 €", description: "Un cheesecake crémeux classique.", vegan: "no", glutenfree: "no", image: "Desserts-cheesecake.jpeg" },
                    { name: "Gâteau Biscuit Lotus / Tarta galleta Lotus", price: "5,90 €", description: "Un délicieux gâteau fait avec des biscuits Lotus.", vegan: "no", glutenfree: "no", image: "Desserts-lotus-biscuit-cake.jpeg" },
                    { name: "Mort par Chocolat / Muerte por chocolate", price: "6,40 €", description: "Un dessert riche et indulgent au chocolat.", vegan: "no", glutenfree: "no", image: "Desserts-death-by-chocolate.jpeg" },
                    { name: "Gâteau de Grand-mère / Tarta de la abuela", price: "5,50 €", description: "Un gâteau traditionnel préparé avec une recette familiale.", vegan: "no", glutenfree: "no", image: "Desserts-grandmas-cake.jpeg" },
                    { name: "Gâteau Velours / Tarta velvet", price: "5,50 €", description: "Un gâteau velouté, doux et moelleux.", vegan: "no", glutenfree: "no", image: "Desserts-velvet-cake.jpeg" },
                    { name: "Fondant au Chocolat / Coulant de chocolate", price: "5,20 €", description: "Fondant au chocolat chaud avec un centre coulant.", vegan: "no", glutenfree: "no", image: "Desserts-chocolate-fondant.jpeg" },
                    { name: "Fondant au Bailey's / Coulant de Bailey's", price: "5,20 €", description: "Fondant infusé au Bailey's.", vegan: "no", glutenfree: "no", image: "Desserts-baileys-fondant.jpeg" },
                    { name: "Fondant au Chocolat Blanc (Sans Gluten) / Coulant de chocolate blanco", price: "5,20 €", description: "Fondant au chocolat blanc sans gluten.", vegan: "no", glutenfree: "yes", image: "Desserts-white-chocolate-fondant.jpeg" },
                    { name: "Brownie avec Émietté de Cookies / Brownie", price: "6,00 €", description: "Un brownie garni d'émietté de cookies.", vegan: "no", glutenfree: "no", glutenfree: "no", image: "Desserts-brownie-cookie-crumble.jpeg" },
                    { name: "Portion glace à la vanille (Sans Gluten) / Contesa de nata", price: "4,90 €", description: "Tarte glace à la vanille sans gluten.", vegan: "no", glutenfree: "yes", image: "Desserts-contesa.jpeg" },
                    { name: "Gâteau au Whisky / Tarta al Whisky", price: "5,20 €", description: "Un gâteau moelleux infusé au whisky.", vegan: "no", glutenfree: "no", image: "Desserts-whisky-cake.jpeg" },
                    { name: "Truffes au Chocolat / Trufas de chocolate", price: "5,20 €", description: "Des truffes au chocolat décadentes.", vegan: "no", glutenfree: "no", image:"Desserts-chocolate-truffles.jpeg" },
                    { name: "Glace au Nougat (Sans Gluten) / Tarrina helado turrón", price: "3,00 €", description: "Une tasse de glace au nougat sans gluten.", vegan: "no", glutenfree: "yes", image: "Desserts-nougat-ice-cream.jpeg" },
                    { name: "Orange à la Cannelle (Sans Gluten) / Naranja con Canela", price: "3,80 €", description: "Des tranches d'orange fraîches à la cannelle.", vegan: "yes", glutenfree: "yes", image: "Desserts-orange-cinnamon.jpeg" }
                ]
            }
            
        }
    },
    es: {
        categories: {
            "Ensaladas": {
                description: "Frescas y vibrantes ensaladas elaboradas con ingredientes de temporada y sabores intensos.",
                items: [
                    { name: "Ensalada Crujiente (Queso de cabra)", price: "€14", description: "Ensalada crujiente con queso de cabra", vegan: "no", glutenfree: "no", image: "Salads-goat-cheese.jpeg" },
                    { name: "Ensalada crujiente vegana (Hamburguesa de quinoa)", price: "€14", description: "Ensalada crujiente con hamburguesa de quinoa", vegan: "yes", glutenfree: "no", image: "Salads-crunchy-vegan.jpeg" },
                    { name: "Ensalada César (Pollo)", price: "€14", description: "Ensalada César clásica con pollo", vegan: "no", glutenfree: "no", image: "Salads-Caesar-salad.jpeg" },
                    { name: "Ensalada Valenciana (Atún)", price: "€14", description: "Ensalada valenciana con atún", vegan: "no", glutenfree: "yes", image: "Salads-valenciana.jpeg" },
                    { name: "Ensalada Vegetariana sin atún", price: "€12", description: "Ensalada mixta con verduras frescas sin atún", vegan: "yes", glutenfree: "yes", image: "Salads-valenciana.jpeg" },
                    { name: "Carpaccio de Calabacín", price: "€12", description: "Rodajas de calabacín con aceite de oliva y condimentos. Para la opción vegana, simplemente pídalo sin queso.", vegan: "yes", glutenfree: "yes", image: "Salads-zucchini-carpaccio.jpeg" }
                ]
            },
            "Entrantes y Tapas": {
                description: "Una selección de platos pequeños y generosos, ideales para compartir o como entrante. Algunas porciones son lo suficientemente abundantes como para disfrutar como comida ligera si no hay mucha hambre.",
                items: [
                    { name: "Pan con Tomate y Ajoaceite", price: "€5.50", description: "Pan tostado con tomate y ajoaceite", vegan: "no", glutenfree: "no", image: "Starters-bread-tomato-aioli.jpeg" },
                    { name: "Berenjenas Fritas con Miel", price: "€9.90", description: "Berenjenas fritas con miel", vegan: "no", glutenfree: "no", image: "Starters-fried-eggplant-with-honey.jpeg" },
                    { name: "Calamares a la andaluza", price: "€9.90", description: "Calamares fritos al estilo andaluz", vegan: "no", glutenfree: "no", image: "Starters-calamari.jpeg" },
                    { name: "Huevos Rotos con Jamón", price: "€9.60", description: "Huevos fritos con jamón sobre patatas fritas", vegan: "no", glutenfree: "no", image: "Starters-broken-eggs-with-ham.jpeg" },
                    { name: "Croquetas", price: "€9.00", description: "Croquetas de jamón ibérico, bacalao o setas", vegan: "no", glutenfree: "no", image: "Starters-mushroom-croquettes.jpeg" },
                    { name: "Patatas con Queso Gouda y Bacon", price: "€9.80", description: "Patatas fritas cubiertas con queso gouda y bacon", vegan: "no", glutenfree: "no", image: "Starters-fries-gouda-cheese.jpeg" },
                    { name: "Tirás Boniato con Roquefort", price: "€9.90", description: "Tiras de boniato frito con salsa roquefort", vegan: "no", glutenfree: "no", image: "Starters-sweet-fries-roquefort.jpeg" },
                    { name: "Tabla Jamón Serrano Bodega", price: "€13.00", description: "Jamón serrano bodega servido en tabla", vegan: "no", glutenfree: "no", image: "starter10.jpg" },
                    { name: "Sepia Enterita a la Plancha", price: "€14.00", description: "Sepia entera a la plancha con ajo y perejil", vegan: "no", glutenfree: "yes", image: "Starters-cuttlefish.jpeg" },
                    { name: "Patatas fritas", price: "€6.70", description: "Ración de patatas fritas ", vegan: "yes", glutenfree: "yes", image: "Starters-french-fries.jpeg" },
                    { name: "Patatas Bravas", price: "€9.80", description: "Patatas fritas con salsa brava", vegan: "yes", glutenfree: "no", image: "Starters-bravas-wedges.jpeg" }
                    
                ]
            },
            
            "Combinados": {
               description: "Disfruta de nuestras combinaciones únicas de platos principales con guarniciones para una comida completa y satisfactoria.",
                    items: [
                        { name: "Embutidos Montanejos", price: "€11.00", description: "Surtido de embutidos variados de Montanejos", vegan: "no", glutenfree: "no", image: "Combo-sausages.jpeg" },
                        { name: "Lomo Caña", price: "€11.00", description: "Lomo de cerdo servido con patatas y huevo frito", vegan: "no", glutenfree: "no", image: "Combo-pork-loin.jpeg" },
                        { name: "Pollo Empanado", price: "€11.00", description: "Pollo empanado con patatas fritas y huevo frito", vegan: "no", glutenfree: "no", image: "Combo-chicken.jpeg" },
                        { name: "Sepia Plancha", price: "€16.00", description: "Sepia a la plancha con ajo y perejil", vegan: "no", glutenfree: "yes", image: "Combo-cuttlefish.jpeg" },
                        { name: "Calamares Rebozados", price: "€13.00", description: "Calamares rebozados con patatas fritas y ensalada", vegan: "no", glutenfree: "no", image: "Combo-calamary.jpeg" },
                        { name: "Emperador Salsa Verde", price: "€15.00", description: "Filete de emperador acompañado con salsa verde", vegan: "no", glutenfree: "no", image: "Combo-swordfish.jpeg" },
                        { name: "Especial Vegano Ana", price: "€13", description: "Hamburguesa de quinoa con ensalada y patatas bravas", vegan: "yes", glutenfree: "no", image: "Combo-vegan-Ana.jpeg" }

                ]
            },
        
            "Especiales Mijares": {
                description: "Platos especiales que muestran la excelencia culinaria de nuestro restaurante.",
                items: [
                    { name: "Torrezno Denominación Soria", price: "€6.00", description: "Torreznos crujientes de la región de Soria", vegan: "no", glutenfree: "yes", image: "Specialties-pork-skin.jpeg" },
                    { name: "Rabo de Toro al Vino Tinto", price: "€16.90", description: "Rabo de toro guisado al vino tinto", vegan: "no", glutenfree: "no", image: "Specialties-oxtail.jpeg" },
                    { name: "Carrillada Mijares", price: "€15.50", description: "Carrillada de cerdo guisada con patatas fritas", vegan: "no", glutenfree: "no", image: "Specialties-pork-cheeks.jpeg" },
                    { name: "Chuletón Ternera 600g", price: "€28.00", description: "Chuletón de ternera de 600g, a la parrilla", vegan: "no", glutenfree: "no", image: "Specialties-ribeye.jpeg" },
                    { name: "Pulpo Vidigonero", price: "€18.00", description: "Pulpo a la brasa estilo Vidigonero", vegan: "no", glutenfree: "yes", image: "Specialties-octopus.jpeg" },
                    { name: "Gambón Galiana", price: "€22.00", description: "Gambón de gran tamaño estilo Galiana", vegan: "no", glutenfree: "yes", image: "Specialties-galiana-jumbo-prawns.jpeg" }
                    
                    
                ]
            },
            "Hamburguesas": {
                description: "Por 3€ extra, añade patatas fritas a tu hamburguesa para un menú completo.",
                items: [
                    { name: "Especial de la Casa", price: "€12.00", description: "Hamburguesa de ternera con lechuga, tomate, cebolla caramelizada, queso, bacon y huevo frito", vegan: "no", glutenfree: "no", image: "Burgers-house-burger.jpeg" },
                    { name: "Queso de Cabra", price: "€12.00", description: "Hamburguesa de ternera con lechuga, tomate, cebolla caramelizada, Salsa de mostaza y queso de cabra", vegan: "no", glutenfree: "no", image: "Burgers-goat-cheese-burger.jpeg" },
                    { name: "Montanejos Adventure con Pollo", price: "€12.00", description: "Hamburguesa de pollo con bacon, mayonesa, lechuga, tomate, y queso", vegan: "no", glutenfree: "no", image: "Burgers-chicken-burger.jpeg" },
                    { name: "Vegetariana", price: "€12.00", description: "Hamburguesa de falafel con lechuga, tomate, cebolla caramelizada, pimiento, mostaza miel y queso **Las patatas se piden a parte", vegan: "no", glutenfree: "no", image: "Burgers-falafel-burger.jpeg" },
                    { name: "Vegana", price: "€12.00", description: "Hamburguesa vegana de quinoa con lechuga, tomate, cebolla caramelizada y pimiento.  **Las patatas se piden a parte", vegan: "yes", glutenfree: "no", image: "Burgers-vegan-burger.jpeg" }
                ]
            },
            "Bocadillos": {
                description: "Bocadillos clásicos en baguette llenos de ingredientes sabrosos.",
                items: [
                    { name: "Chivito Especial", "price": "11€", description: "Lechuga, tomate, queso, bacon, huevo frito y jamón", vegan: "no", glutenfree: "no", image: "Bocadillos-chivito.jpeg" },
                    { name: "Polvorilla", "price": "11€", description: "Tomate, jamón, queso y bacon en un pan tostado", vegan: "no", glutenfree: "no", image: "Bocadillos-polvorilla.jpeg" },
                    { name: "Alex", "price": "10€", description: "Queso gouda, bacon, lomo y patatas fritas", vegan: "no", glutenfree: "no", image: "default-image.jpeg" },
                    { name: "Héctor", "price": "10€", description: "Cebollas caramelizadas, bacon y queso derretido", vegan: "no", glutenfree: "no", image: "default-image.jpeg" }
                ]
            },
            "Sandwiches": {
                description: "Deliciosos sándwiches para una comida rápida y satisfactoria.",
                items: [
                    { name: "Sándwich Andrea", price: "8€", description: "Sándwich con jamón, lechuga, tomate y pepinillos", vegan: "no", glutenfree: "no", image: "Sandwiches-Andrea.jpeg" },
                    { name: "Sándwich de atún", price: "7€", description: "Sándwich con atún, mayonesa, tomate, lechuga y aceitunas en un sándwich tostado", vegan: "no", glutenfree: "no", image: "Sandwiches-tuna.jpeg" },
                    { name: "Sándwich mixto", price: "4€", description: "Sencillo sándwich de jamón y queso", vegan: "no", glutenfree: "no", image: "Sandwiches-mixto.jpeg" }
                ]
            },
            
            "Burritos": {
                description: "Burritos sabrosos y contundentes para una comida completa.",
                items: [
                    { name: "Burrito D-Lux", price: "€8.50", description: "Pollo, lechuga, tomate y bacon envueltos en un burrito", vegan: "no", glutenfree: "no", image: "Burritos-d-lux.jpeg" },
                    { name: "Burrito Tejano", price: "€8.50", description: "Berenjena, calabacín, tomate y tiras de pollo", vegan: "no", glutenfree: "no", image: "Burritos-tejano.jpeg" }
                ]
            },
            "Bebidas": {
                description: "Una selección refrescante de bebidas para acompañar tu comida.",
                items: [
                    { name: "Tinto de Verano", price: "€2.50", description: "Bebida refrescante a base de vino tinto y gaseosa", vegan: "no", glutenfree: "no", image: "Bebidas-tinto-de-verano.jpeg" },
                    { name: "Cerveza de Tirador (Caña)", price: "€1.70", description: "Cerveza de tirador - caña", vegan: "no", glutenfree: "no", image: "Bebidas-cerveza-cana.jpeg" },
                    { name: "Cerveza de Tirador (Doble)", price: "€2.50", description: "Cerveza de tirador - doble", vegan: "no", glutenfree: "no", image: "Bebidas-cerveza-doble.jpeg" },
                    { name: "Cerveza de Tirador (Tanque)", price: "€4", description: "Cerveza de tirador - pinta", vegan: "no", glutenfree: "no", image: "Bebidas-cerveza-tanque.jpeg" },
                    { name: "Cerveza tercio", price: "€2.50", description: "Cerveza botella de tercio (Sin Alcohol, tostada, lager, o radler)", vegan: "no", glutenfree: "no", image: "Bebidas-cerveza-tercio-estrella-galicia.jpeg" },
                    { name: "Coca Cola", price: "€2.50", description: "Coca Cola normal o Zero", vegan: "no", glutenfree: "no", image: "Bebidas-coca-cola.jpeg" },
                    { name: "Fanta Limón-Naranja", price: "€2.50", description: "Refresco de limón o naranja", vegan: "no", glutenfree: "no", image: "Bebidas-fanta.jpeg" },
                    { name: "Nestea, Aquarius", price: "€2.50", description: "Té frío con limón", vegan: "no", glutenfree: "no", image: "Bebidas-nestea.jpeg" },
                    { name: "Zumos", price: "€2", description: "Zumos de botellín: Piña, Melocotón, Naranja y mixto (naranja-zanahoria)", vegan: "no", glutenfree: "no", image: "Bebidas-zumos.jpeg" },
                    { name: "Agua pequeña", price: "€2", description: "Agua embotellada 50 cl", vegan: "no", glutenfree: "no", image: "Bebidas-agua-pequena.jpeg" },
                    { name: "Agua grande", price: "€2.50", description: "Agua embotellada 1.5 L", vegan: "no", glutenfree: "no", image: "Bebidas-agua-grande.jpeg" },
                    { name: "Agua con Gas", price: "€2", description: "Agua con gas", vegan: "no", glutenfree: "no", image: "Bebidas-agua-con-gas.jpeg" },
                    { name: "Tónica", price: "€2", description: "Refresco de tónica", vegan: "no", glutenfree: "no", image: "Bebidas-tonica.jpeg" },
                    { name: "Café solo", price: "€1.20", description: "Café expreso", vegan: "no", glutenfree: "no", image: "Bebidas-cafe-solo.jpeg" },
                    { name: "Café cortado", price: "€1.40", description: "Café macchiato", vegan: "no", glutenfree: "no", image: "Bebidas-cafe-cortado.jpeg" },
                    { name: "Café con leche", price: "€1.60", description: "Café con leche", vegan: "no", glutenfree: "no", image: "Bebidas-cafe-con-leche.jpeg" },
                    { name: "Café Americano", price: "€2", description: "Café americano", vegan: "no", glutenfree: "no", image: "Bebidas-cafe-americano.jpeg" },
                    { name: "Batido", price: "€1.50", description: "Batido estilo colacao", vegan: "no", glutenfree: "no", image: "Bebidas-batido.jpeg" },
                    { name: "Té y infusiones", price: "€1.50", description: "Té e infusiones", vegan: "no", glutenfree: "no", image: "Bebidas-infusiones.jpeg" },
                    { name: "Copa de vino Tinto", price: "€2.50", description: "Copa de vino tinto", vegan: "no", glutenfree: "no", image: "Bebidas-copa-tinto.jpeg" },
                    { name: "Copa de vino Blanco", price: "€2.50", description: "Copa de vino blanco", vegan: "no", glutenfree: "no", image: "Bebidas-copa-blanco.jpeg" },
                    { name: "Cubata", price: "€6", description: "Cubata (ron con Coca Cola)", vegan: "no", glutenfree: "no", image: "Bebidas-cubata.jpeg" }
                ]
            },
            "Vinos": {
                description: "Vinos cuidadosamente seleccionados para acompañar cualquier comida.",
                items: [
                    { name: "Copa de vino Tinto", price: "€2.50", description: "Copa de vino tinto", vegan: "no", glutenfree: "no", image: "Bebidas-copa-tinto.jpeg" },
                    { name: "Copa de vino Blanco", price: "€2.50", description: "Copa de vino blanco", vegan: "no", glutenfree: "no", image: "Bebidas-copa-blanco.jpeg" },
                    { name: "Rosado, Finca del Mar", price: "11€", description: "Finca del Mar Rosado cautiva con su delicado color rosa y ofrece un bouquet de fresas frescas y notas florales. Este rosado está bien equilibrado con una acidez refrescante, ideal para tardes soleadas o para acompañar con la cocina mediterránea.", vegan: "no", glutenfree: "no", image: "Vinos-botella-rosado-finca-del-mar.jpeg" },
                    { name: "Vino blanco Chardonnay, Finca del Mar", price: "11€", description: "Finca del Mar Blanco es un vino blanco crujiente y refrescante, con sabores a manzana verde, cítricos y un toque de mineralidad. Su cuerpo ligero y su acidez vibrante lo hacen perfecto para acompañar mariscos y platos de pasta ligeros.", vegan: "no", glutenfree: "no", image: "Vinos-botella-blanco-finca-del-mar.jpeg" },
                    { name: "Tinto, Finca del Mar", price: "11€", description: "Finca del Mar Tinto es un vino tinto robusto con intensos sabores a bayas oscuras, toques de especias y un acabado suave. Su cuerpo completo y taninos estructurados lo hacen excelente para acompañar carnes a la parrilla y guisos ricos.", vegan: "no", glutenfree: "no", image: "Vinos-botella-tinto-finca-del-mar.jpeg" },
                    { name: "Vino tinto Rioja, Altos Ibéricos", price: "14€", description: "Altos Ibéricos Crianza representa una visión contemporánea de Rioja con su vibrante carácter de Tempranillo. Ofrece aromas a moras y hierbas secas, con sabores a grosella negra, cereza y un toque de trufa negra. Su envejecimiento en roble aporta una complejidad suave con taninos bien integrados, convirtiéndolo en una opción versátil para acompañar una variedad de platos contundentes o para disfrutar por sí solo.", vegan: "no", glutenfree: "no", image: "Vinos-botella-tinto-altos-ibericos.jpeg" },
                    { name: "Garnacha Tintorera, Uva Pirata", price: "12€", description: "Uva Pirata Garnacha Tintorera de Vicente Gandía es un vino tinto intenso, conocido por su color oscuro profundo y sus sabores ricos. Ofrece un bouquet lleno de aromas a frutas negras, con toques de tostado y caramelo inglés debido a su envejecimiento en barrica. En boca, es de cuerpo completo con un acabado suave y elegante, perfecto para acompañar carnes rojas y platos de pasta contundentes.", vegan: "no", glutenfree: "no", image: "Vinos-botella-garnacha-tintorera-uva-pirata.jpeg" },
                    { name: "Garnacha Blanca, Uva Pirata", price: "12€", description: "Uva Pirata Garnacha Blanca de Vicente Gandia es un vino blanco que captura la esencia del Mediterráneo con su carácter fresco y vivaz. Espera un bouquet lleno de aromas a manzana verde, pera y toques de flores tropicales, que lleva a un paladar refrescante y crujiente, con una acidez encantadora que termina en un memorable sabor final a manzana y jazmín.", vegan: "no", glutenfree: "no", image: "Vinos-botella-garnacha-blanca-uva-pirata.jpeg" },
                    { name: "El Miracle Art", price: "16€", description: "El Miracle Art es un vino tinto de autor de la D.O. Alicante, que muestra el espíritu artístico de los enólogos de Vicente Gandía. Este vino mezcla diversas variedades de uva tinta para ofrecer una experiencia suave con taninos elegantes, predominando sabores a frutas oscuras, toques de especias y vainilla por su envejecimiento en barrica de roble. Su etiqueta presenta arte, haciendo de cada botella una pieza única que refleja la creatividad de los artistas valencianos.", vegan: "no", glutenfree: "no", image: "Vinos-botella-el-miracle-art.jpeg" },
                    { name: "Bobal Negro", price: "18€", description: "Bobal Negro de Vicente Gandía refleja la rica tradición de la uva Bobal, conocida por su color intenso y estructura robusta. Este vino ofrece un bouquet complejo de frutas oscuras, con sutiles influencias de roble, proporcionando una experiencia de cuerpo completo con una acidez equilibrada, ideal para maridar con carnes rojas y platos contundentes.", vegan: "no", glutenfree: "no", image: "Vinos-botella-bobal-negro.jpeg" },
                    { name: "Bobal Rosa", price: "18€", description: "Bobal Rosa de Vicente Gandía es un vino rosado refrescante, que destaca la uva Bobal autóctona de Utiel-Requena. Ofrece una deliciosa combinación de aromas a pétalos de rosa, frutas rojas y un toque de pomelo, con un paladar suave, fresco y muy agradable, perfecto para comidas ligeras o como aperitivo.", vegan: "no", glutenfree: "no", image: "Vinos-botella-bobal-rosa.jpeg" },
                    { name: "Bobal Blanco", price: "18€", description: "El Bobal Blanco de Vicente Gandía es un vino blanco intrigante hecho a partir de uvas tintas Bobal, lo que muestra la versatilidad de esta variedad tradicional española. Este vino se caracteriza por su color amarillo pálido con un matiz rojizo, reflejo de su singular proceso de producción. En el paladar, ofrece una acidez armoniosa con un acabado refrescante que recuerda a las frutos del bosque, proporcionando una experiencia elegante y con carácter. Es perfecto para quienes buscan explorar más allá de los vinos blancos convencionales, con una temperatura de servicio recomendada entre 5 y 7ºC para realzar sus sabores matizados.", vegan: "no", glutenfree: "no", image: "Vinos-botella-bobal-blanco.jpeg" },
                    { name: "Coto Crianza, Rioja", price: "12€", description: "El Coto Crianza es un vino tinto de Rioja, España, elaborado íntegramente con uvas Tempranillo. Se envejece durante 12 meses en barricas de roble americano, ofreciendo un equilibrio entre sabores a frutas como frambuesa y cereza, con toques de especias y vainilla para un acabado suave. Este vino es conocido por su perfil de sabor accesible, lo que lo hace un acompañante versátil para una variedad de platos.", vegan: "yenos", glutenfree: "no", image: "Vinos-botella-coto-crianza.jpeg" },
                    { name: "Beronia Crianza, Rioja", price: "18€", description: "El Beronia Crianza es un exponente delicioso de la tradición vinícola de Rioja, donde la uva Tempranillo es la protagonista. Este vino se deja por 12 meses en barricas mixtas de roble americano y francés, lo que le confiere un bouquet complejo con frutas oscuras como la cereza negra, junto a toques de especias, vainilla y una sutil terrosidad. En el paladar, ofrece una experiencia suave y equilibrada con sabores a fruta madura, taninos suaves y un acabado que recuerda al roble, siendo muy versátil para maridar con una amplia gama de platos, desde carnes asadas hasta guisos contundentes.", vegan: "no", glutenfree: "no", image: "Vinos-botella-beronia-crianza.jpeg" },
                    { name: "Melior Matarromera, Ribera del Duero", price: "20€", description: "Melior Matarromera de Ribera del Duero es un vino tinto elegante que encapsula la esencia de la uva Tempranillo de algunas de las mejores regiones vinícolas de España. Este vino combina la frescura y los taninos vibrantes de Ribera del Duero con los matices frutales y ricos de otras zonas de primera, ofreciendo un perfil complejo con toques de fruta oscura, especias y una sutil influencia de roble debido a su envejecimiento. Es lo suficientemente versátil para el consumo social o para acompañar diversas carnes, proporcionando un acabado suave y persistente.", vegan: "no", glutenfree: "no", image: "Vinos-botella-melior-matarromera.jpeg" },
                    { name: "Punto Geodésico, Ribera del Duero", price: "37€", description: "Punto Geodésico de la región de Ribera del Duero es un vino tinto español de alta calidad, elaborado con 100% uvas Tempranillo cultivadas en grandes altitudes. Este vino es conocido por su color rojo-violáceo profundo, con aromas complejos a mora, espresso cubierto de chocolate y un toque de especias. En boca ofrece una textura opulenta con sabores a cereza, frambuesa, mocha y caramelo, que lleva a un largo final con notas de café recién molido. Sus taninos bien estructurados y su acidez vibrante le otorgan un gran potencial de envejecimiento, ideal para acompañar platos robustos como carnes rojas o pastas ricaso", vegan: "no", glutenfree: "no", image: "Vinos-botella-punto-geodesico.jpeg" },
                    { name: "Trus Roble, Ribera del Duero", price: "17€", description: "Trus Roble es un vino que encapsula la esencia de la región de Ribera del Duero, conocida por su Tempranillo robusto y expresivo. Este vino ofrece un bouquet de frutas rojas y negras maduras, complementado con notas especiadas y balsámicas y un toque de sabor tostado. En boca, es suave y bien equilibrado, con una acidez armoniosa que lo hace un excelente acompañante para una variedad de platos contundentes.", vegan: "no", glutenfree: "no", image: "Vinos-botella-trus-roble.jpeg" },
                    { name: "Santa Rosa, Enrique Mendoza", price: "28€", description: "Santa Rosa de Enrique Mendoza es un vino tinto robusto que presenta una sinfonía de sabores a frutas oscuras con toques de especias y vainilla, gracias a su envejecimiento en roble. Espera una experiencia de cuerpo completo con un acabado suave, ideal para acompañar carnes rojas o pastas contundentes.", vegan: "no", glutenfree: "no", image: "Vinos-botella-santa-rosa.jpeg" }
                ]
            },
            "Postres": {
                description: "Termina tu comida con un toque dulce.",
                items: [
                  { name: "Tarta de queso", price: "5,50 €", "description": "Una clásica tarta de queso cremosa.", vegan: "no", glutenfree: "no", image: "Desserts-cheesecake.jpeg" },
                  { name: "Tarta Galleta 'Lotus'", price: "5,90 €", description: "Deliciosa tarta hecha con galletas Lotus.", vegan: "no", glutenfree: "no", image: "Desserts-lotus-biscuit-cake.jpeg" },
                  { name: "Muerte por chocolate", price: "6,40 €", description: "Un postre de chocolate rico e indulgente.", vegan: "no", glutenfree: "no", image: "Desserts-death-by-chocolate.jpeg" },
                  { name: "Tarta de la abuela", price: "5,50 €", description: "Tarta tradicional hecha con receta familiar.", vegan: "no", glutenfree: "no", image: "Desserts-grandmas-cake.jpeg" },
                  { name: "Tarta velvet", price: "5,50 €", description: "Tarta suave y esponjosa.", vegan: "no", glutenfree: "no", image: "Desserts-velvet-cake.jpeg" },
                  { name: "Coulant de chocolate", price: "5,20 €", description: "Coulant de chocolate caliente con centro fundido.", vegan: "no", glutenfree: "no", image: "Desserts-chocolate-fondant.jpeg" },
                  { name: "Coulant de Bailey's", price: "5,20 €", description: "Coulant infusionado con licor de Bailey's.", vegan: "no", glutenfree: "no", image: "Desserts-baileys-fondant.jpeg" },
                  { name: "Coulant chocolate blanco (Sin gluten)", price: "5,20 €", description: "Coulant de chocolate blanco sin gluten.", vegan: "no", glutenfree: "yes", image: "Desserts-white-chocolate-fondant.jpeg" },
                  { name: "Brownie con Galleta cookies", price: "6,00 €", description: "Brownie cubierto con galleta crumble.", vegan: "no", glutenfree: "no", image: "Desserts-brownie-cookie-crumble.jpeg" },
                  { name: "Contesa de nata (Sin gluten)", price: "4,90 €", description: "Tarta helado de de nata sin gluten.", vegan: "no", glutenfree: "yes", image: "Desserts-contesa.jpeg" },
                  { name: "Tarta al whisky", price: "5,20 €", description: "Tarta esponjosa infusionada con whisky.", vegan: "no", glutenfree: "no", image: "Desserts-whisky-cake.jpeg" },
                  { name: "Trufas de chocolate", price: "5,20 €", description: "Trufas de chocolate decadentes.", vegan: "no", glutenfree: "no", image:"Desserts-chocolate-truffles.jpeg" },
                  { name: "Tarrina helado turrón (sin gluten)", price: "3,00 €", description: "Tarrina de helado de turrón sin gluten", vegan: "no", glutenfree: "yes", image: "Desserts-nougat-ice-cream.jpeg" },
                  { name: "Naranja con canela (Sin gluten)", price: "3,80 €", description: "Rodajas de naranja fresca con canela.", vegan: "yes", glutenfree: "yes", image:"Desserts-orange-cinnamon.jpeg" }
                ]
            }
            
        },
    de: {
        categories: {
            "Salate": {
                description: "Frische, knackige Salate aus saisonalen Zutaten mit kräftigen Aromen.",
                items: [
                    { name: "Knackiger Salat (Ziegenkäse) / Ensalada crujiente queso de cabra", price: "€14", description: "Knuspriger Salat mit Ziegenkäse", vegan: "no", glutenfree: "no", image: "Salads-goat-cheese.jpeg" },
                    { name: "Knackiger Vegan-Salat (Quinoa-Patty) / Ensalada crujiente hamburguesa quinoa", price: "€14", description: "Knuspriger Salat mit Quinoa-Patty", vegan: "yes", glutenfree: "no", image: "Salads-crunchy-vegan.jpeg" },
                    { name: "Caesar-Salat (Huhn) / Ensalada Cesar", price: "€14", description: "Klassischer Caesar-Salat mit Huhn", vegan: "no", glutenfree: "no", image: "Salads-Caesar-salad.jpeg" },
                    { name: "Valencianischer Salat (Thunfisch) / Ensalada valenciana con atún", price: "€14", description: "Traditioneller valencianischer Salat mit Thunfisch", vegan: "no", glutenfree: "no", image: "Salads-valenciana.jpeg" },
                    { name: "Vegetarischer Salat ohne Thunfisch / Ensalada vegetariana sin atún", price: "€12", description: "Frischer gemischter Salat ohne Thunfisch", vegan: "yes", glutenfree: "no", image: "Salads-valenciana.jpeg" },
                    { name: "Zucchini-Carpaccio / Carpaccio de calabacín", price: "€12", description: "Zucchinischeiben mit Olivenöl und Gewürzen. Für die vegane Variante einfach ohne Käse bestellen.", vegan: "yes", glutenfree: "yes", image: "Salads-zucchini-carpaccio.jpeg" }
                ]
            },
            "Vorspeisen und Tapas": {
                description: "Eine Auswahl großzügiger kleiner Gerichte, ideal zum Teilen oder als Vorspeise. Einige Portionen sind sättigend genug für eine kleine Mahlzeit.",
                items: [
                    { name: "Tomaten-Knoblauch-Brot / Pan con tomate y ajoaceite", price: "€5.50", description: "Geröstetes Brot mit Tomate und Knoblauchbutter", vegan: "no", glutenfree: "no", image: "Starters-bread-tomato-aioli.jpeg" },
                    { name: "Frittierte Aubergine mit Honig / Berenjena rebozada con miel", price: "€9.90", description: "Auberginensticks mit Honig", vegan: "no", glutenfree: "no", image: "Starters-fried-eggplant-with-honey.jpeg" },
                    { name: "Frittierte Calamari / Tapa de calamares", price: "€9.90", description: "Knusprige Calamari mit Zitrone", vegan: "no", glutenfree: "no", image: "Starters-calamari.jpeg" },
                    { name: "Gebrochene Eier mit Schinken / Huevos rotos con jamón", price: "€9.60", description: "Eier, Schinken und Pommes", vegan: "no", glutenfree: "no", image: "Starters-broken-eggs-with-ham.jpeg" },
                    { name: "Kroketten / Croquetas", price: "€9.00", description: "Iberische Schinken-, Pilz- oder Kabeljaukroketten, knusprig und lecker", vegan: "no", glutenfree: "no", image: "Starters-mushroom-croquettes.jpeg" },
                    { name: "Pommes mit Käse und Bacon / Patatas queso gouda y bacon", price: "€9.80", description: "Pommes mit Gouda und Bacon", vegan: "no", glutenfree: "no", image: "Starters-fries-gouda-cheese.jpeg" },
                    { name: "Tintenfisch / Tapa de sepia", price: "€14.00", description: "Tintenfisch", vegan: "no", glutenfree: "yes", image: "Starters-cuttlefish.jpeg" },
                    { name: "Patatas Bravas (Wedges)", price: "€9.80", description: "Patatas-Bravas-Wedges", vegan: "yes", glutenfree: "no", image: "Starters-bravas-wedges.jpeg" },
                    { name: "Pommes frites / Patatas fritas", price: "€6.70", description: "Pommes frites", vegan: "yes", glutenfree: "yes", image: "Starters-french-fries.jpeg" },
                    { name: "Süßkartoffeln mit Roquefort / Boniato", price: "€9.90", description: "Eine Portion Süßkartoffel-Pommes mit geschmolzenem Roquefort-Käse", vegan: "no", glutenfree: "no", image: "Starters-sweet-fries-roquefort.jpeg" }
                ]
            },
            "Kombi-Gerichte": {
                description: "Köstliche Kombis aus unseren besten Zutaten. Die meisten werden mit Spiegelei und Pommes serviert.",
                items: [
                    { name: "Montanejos Aufschnitt / Combinado Embutidos Montanejos", price: "€11", description: "Auswahl an Aufschnitt aus Montanejos: Chorizo, Blutwurst und Longaniza", vegan: "no", glutenfree: "no", image: "Combo-sausages.jpeg" },
                    { name: "Gegrilltes Lendenstück / Combinado Lomo", price: "€11", description: "Gegrilltes Schweinelendchen mit Ei und Pommes", vegan: "no", glutenfree: "no", image: "Combo-pork-loin.jpeg" },
                    { name: "Paniertes Hähnchen / Combinado pollo", price: "€11", description: "Paniertes Hähnchenfilet mit Pommes und Spiegelei", vegan: "no", glutenfree: "no", image: "Combo-chicken.jpeg" },
                    { name: "Gegrillter Tintenfisch / Combinado sepia", price: "€16", description: "Gegrillter Tintenfisch mit Knoblauchsauce", vegan: "no", glutenfree: "yes", image: "Combo-cuttlefish.jpeg" },
                    { name: "Frittierte Calamari / Combinado calamares", price: "€13", description: "Frittierte Calamari mit Pommes und Salat", vegan: "no", glutenfree: "no", image: "Combo-calamary.jpeg" },
                    { name: "Veganes Spezial Ana / Combinado Ana (hamburguesa quinoa, patatas y ensalada)", price: "€13", description: "Quinoa-Patty mit Salat und Patatas Bravas", vegan: "yes", glutenfree: "no", image: "Combo-vegan-Ana.jpeg" },
                    { name: "Schwertfisch mit Pommes", price: "€15.00", description: "Schwertfischfilet mit grüner Sauce", vegan: "no", glutenfree: "no", image: "Combo-swordfish.jpeg" }
                ]
            },
            "Hausspezialitäten": {
                description: "Spezialitäten des Hauses, die die kulinarische Klasse unseres Restaurants zeigen.",
                items: [
                    { name: "Schweinebauch / Torrezno", price: "€6.00", description: "Knuspriger Schweinebauch aus Soria", vegan: "no", glutenfree: "yes", image: "Specialties-pork-skin.jpeg" },
                    { name: "Schweinebäckchen / Carrillada", price: "€15.50", description: "Schweinebäckchen mit Bratkartoffeln", vegan: "no", glutenfree: "no", image: "Specialties-pork-cheeks.jpeg" },
                    { name: "Oktopus / Pulpo", price: "€18.00", description: "Oktopus, Spezialrezept des Dorfes", vegan: "no", glutenfree: "yes", image: "Specialties-octopus.jpeg" },
                    { name: "Galiana-Riesengarnelen / Gambón Galiana", price: "€22", description: "Galiana-Riesengarnelen", vegan: "no", glutenfree: "yes", image: "Specialties-galiana-jumbo-prawns.jpeg" },
                    { name: "Geschmorte Ochsenschwanz / Rabo de toro", price: "€16.90", description: "Zart geschmorter Ochsenschwanz in Rotweinsauce", vegan: "no", glutenfree: "no", image: "Specialties-oxtail.jpeg" },
                    { name: "600g Ribeye-Steak / Chuletón", price: "€28", description: "Gegrilltes Ribeye-Steak, perfekt gegart", vegan: "no", glutenfree: "no", image: "Specialties-ribeye.jpeg" }
                ]
            },
            "Burger": {
                description: "Für 3€ extra gibt es Pommes dazu – für das perfekte Burger-Menü.",
                items: [
                    { name: "Hausburger Spezial / Hamburguesa de la casa", price: "€12", description: "Rindfleisch-Burger mit Spiegelei, Bacon und karamellisierten Zwiebeln", vegan: "no", glutenfree: "no", image: "Burgers-house-burger.jpeg" },
                    { name: "Ziegenkäse-Burger / Hamburguesa con queso de cabra", price: "€12", description: "Rindfleisch-Burger mit Salat, Tomate, karamellisierter Zwiebel, Senfsauce und Ziegenkäse", vegan: "no", glutenfree: "no", image: "Burgers-goat-cheese-burger.jpeg" },
                    { name: "Montanejos Adventure Chicken-Burger / Hamburguesa adventure de pollo", price: "€12", description: "Hähnchen-Burger mit Bacon, Ei und Spezialsoße", vegan: "no", glutenfree: "no", image: "Burgers-chicken-burger.jpeg" },
                    { name: "Vegetarischer Burger / Hamburguesa vegetariana", price: "€12", description: "Falafel-Burger mit Salat, Tomate, karamellisierter Zwiebel, Paprika, Honig-Senf und Käse. **Pommes bitte extra bestellen**", vegan: "no", glutenfree: "no", image: "Burgers-falafel-burger.jpeg" },
                    { name: "Veganer Burger / Hamburguesa vegana", price: "€12", description: "Veganer Quinoa-Burger mit Salat, Tomate, karamellisierter Zwiebel und Paprika. **Pommes bitte extra bestellen**", vegan: "yes", glutenfree: "no", image: "Burgers-vegan-burger.jpeg" }
                ]
            },
            "Baguette-Sandwiches": {
                description: "Klassische Baguette-Sandwiches mit herzhaften Zutaten.",
                items: [
                    { name: "Chivito Especial / Chivito", price: "€11", description: "Salat, Tomate, Käse, Bacon, Spiegelei und Schinken", vegan: "no", glutenfree: "no", image: "Bocadillos-chivito.jpeg" },
                    { name: "Polvorilla", price: "€11", description: "Tomate, Schinken, Käse und Bacon im getoasteten Brötchen", vegan: "no", glutenfree: "no", image: "Bocadillos-polvorilla.jpeg" },
                    { name: "Alex Sub / Bocadillo Alex", price: "€10", description: "Gouda, Bacon, Lomo und Pommes", vegan: "no", glutenfree: "no", image: "default-image.jpeg" },
                    { name: "Héctor Sub / Bocadillo Hector", price: "€10", description: "Karamellisierte Zwiebeln, Bacon und geschmolzener Käse", vegan: "no", glutenfree: "no", image: "default-image.jpeg" }
                ]
            },
            "Sandwiches": {
                description: "Leckere Sandwiches für eine schnelle, sättigende Mahlzeit.",
                items: [
                    { name: "Andrea / Sandwich Andrea", price: "€8", description: "Schinken, Salat, Tomate und Gewürzgurken", vegan: "no", glutenfree: "no", image: "Sandwiches-Andrea.jpeg" },
                    { name: "Thunfisch-Sandwich / Sandwich de atún", price: "€7", description: "Thunfisch, Mayonnaise, Tomate, Salat und Oliven im getoasteten Sandwich", vegan: "no", glutenfree: "no", image: "Sandwiches-tuna.jpeg" },
                    { name: "Gemischtes Sandwich / Sandwich mixto", price: "€4", description: "Einfaches Schinken-Käse-Sandwich", vegan: "no", glutenfree: "no", image: "Sandwiches-mixto.jpeg" }
                ]
            },
            "Burritos": {
                description: "Herzhafte und würzige Burritos für eine sättigende Mahlzeit.",
                items: [
                    { name: "D-Lux Burrito / Burrito D-lux", price: "€8.50", description: "Hähnchen, Salat, Tomate und Bacon im Burrito", vegan: "no", glutenfree: "no", image: "Burritos-d-lux.jpeg" },
                    { name: "Texan Burrito / Burrito tejano", price: "€8.50", description: "Aubergine, Zucchini, Tomate und Hähnchenstreifen", vegan: "no", glutenfree: "no", image: "Burritos-tejano.jpeg" }
                ]
            },
            "Getränke": {
                description: "Erfrischende Getränkeauswahl, um Ihr Essen zu begleiten.",
                items: [
                    { name: "Tinto de Verano", price: "€2.50", description: "Erfrischender Rotwein mit Limo", vegan: "no", glutenfree: "no", image: "Bebidas-tinto-de-verano.jpeg" },
                    { name: "Draft Beer (Caña) / Caña", price: "€1.70", description: "Kleines Fassbier", vegan: "no", glutenfree: "no", image: "Bebidas-cerveza-cana.jpeg" },
                    { name: "Draft Beer (Doble) / Doble", price: "€2.50", description: "Mittleres Fassbier", vegan: "no", glutenfree: "no", image: "Bebidas-cerveza-doble.jpeg" },
                    { name: "Draft Beer (Pint) / Tanque", price: "€4", description: "Großes Fassbier", vegan: "no", glutenfree: "no", image: "Bebidas-cerveza-tanque.jpeg" },
                    { name: "Bottled Beer / Tercio de cerveza", price: "€2.50", description: "Flaschenbier - alkoholfrei, tostada, lager oder Radler", vegan: "no", glutenfree: "no", image: "Bebidas-cerveza-tercio-estrella-galicia.jpeg" },
                    { name: "Coca Cola", price: "€2.50", description: "Coca Cola Classic oder Zero", vegan: "no", glutenfree: "no", image: "Bebidas-coca-cola.jpeg" },
                    { name: "Fanta Lemon-Orange", price: "€2.50", description: "Fanta Zitrone oder Orange", vegan: "no", glutenfree: "no", image: "Bebidas-fanta.jpeg" },
                    { name: "Nestea, Aquarius", price: "€2.50", description: "Kalter Zitronentee", vegan: "no", glutenfree: "no", image: "Bebidas-nestea.jpeg" },
                    { name: "Bottled Juices / zumo", price: "€2", description: "Flaschenkosäfte: Ananas, Pfirsich, Orange oder Mix (Orange-Karotte)", vegan: "no", glutenfree: "no", image: "Bebidas-zumos.jpeg" },
                    { name: "Small Water / agua pequeña", price: "€2", description: "Flaschenwasser 50cl", vegan: "no", glutenfree: "no", image: "Bebidas-agua-pequena.jpeg" },
                    { name: "Large Water 1.5l / Agua grande", price: "€2.50", description: "Flaschenwasser 1,5L", vegan: "no", glutenfree: "no", image: "Bebidas-agua-grande.jpeg" },
                    { name: "Sparkling Water / Agua con gas", price: "€2", description: "Sprudelwasser", vegan: "no", glutenfree: "no", image: "Bebidas-agua-con-gas.jpeg" },
                    { name: "Tonic / Tónica", price: "€2", description: "Tonic Water", vegan: "no", glutenfree: "no", image: "Bebidas-tonica.jpeg" },
                    { name: "Espresso", price: "€1.20", description: "Espresso", vegan: "no", glutenfree: "no", image: "Bebidas-cafe-solo.jpeg" },
                    { name: "Macchiato", price: "€1.40", description: "Kaffee Macchiato", vegan: "no", glutenfree: "no", image: "Bebidas-cafe-cortado.jpeg" },
                    { name: "Café con leche", price: "€1.60", description: "Milchkaffee", vegan: "no", glutenfree: "no", image: "Bebidas-cafe-con-leche.jpeg" },
                    { name: "Café Americano", price: "€2", description: "Americano", vegan: "no", glutenfree: "no", image: "Bebidas-cafe-americano.jpeg" },
                    { name: "Heiße Schokolade / Colacao", price: "€1.50", description: "Heiße Schokolade", vegan: "no", glutenfree: "no", image: "Bebidas-batido.jpeg" },
                    { name: "Tee und Aufgüsse / Té y infusiones", price: "€1.50", description: "Tee und Aufgüsse", vegan: "no", glutenfree: "no", image: "Bebidas-infusiones.jpeg" },
                    { name: "Rotweinglas / Copa de vino tinto", price: "€2.50", description: "Glas Rotwein", vegan: "no", glutenfree: "no", image: "Bebidas-copa-tinto.jpeg" },
                    { name: "Weißweinglas / Copa de vino blanco", price: "€2.50", description: "Glas Weißwein", vegan: "no", glutenfree: "no", image: "Bebidas-copa-blanco.jpeg" },
                    { name: "Rum & Cola / Cubata", price: "€6", description: "Rum mit Coca-Cola", vegan: "no", glutenfree: "no", image: "Bebidas-cubata.jpeg" }
                ]
            },
            "Weine": {
                description: "Sorgfältig ausgewählte Weine, passend zu jedem Gericht.",
                items: [
                    { name: "Red Wine Glass / Copa de vino tinto", price: "€2.50", description: "Glas Rotwein", vegan: "no", glutenfree: "no", image: "Bebidas-copa-tinto.jpeg" },
                    { name: "White Wine Glass / Copa de vino blanco", price: "€2.50", description: "Glas Weißwein", vegan: "no", glutenfree: "no", image: "Bebidas-copa-blanco.jpeg" },
                    { name: "Rosado, Finca del Mar", price: "11€", description: "Finca del Mar Rosado captivates with its delicate pink hue and delivers a bouquet of fresh strawberries and floral notes. This rosé is well-balanced with a refreshing acidity, ideal for sunny afternoons or paired with Mediterranean cuisine.", vegan: "no", image: "Vinos-botella-rosado-finca-del-mar.jpeg" },
                    { name: "Chardonnay White Wine, Finca del Mar", price: "11€", description: "Finca del Mar Blanco is a crisp, refreshing white wine, offering flavors of green apple, citrus, and a hint of minerality. Its light body and vibrant acidity make it a perfect match for seafood and light pasta dishes.", vegan: "no", image: "Vinos-botella-blanco-finca-del-mar.jpeg" },
                    { name: "Tinto, Finca del Mar", price: "11€", description: "Finca del Mar Tinto is a robust red wine with deep flavors of dark berries, hints of spice, and a smooth finish. Its full body and structured tannins make it excellent for pairing with grilled meats and rich stews.", vegan: "no", image: "Vinos-botella-tinto-finca-del-mar.jpeg" },
                    { name: "Red Wine Rioja, Altos Ibéricos", price: "14€", description: "Altos Ibéricos Crianza presents a contemporary take on Rioja with its vibrant Tempranillo character. Expect a wine with aromas of blackberries and dried herbs, complemented by flavors of black currant, cherry, and a hint of black truffle. Its aging in oak imparts a smooth complexity with well-integrated tannins, making it a versatile choice for pairing with a variety of hearty dishes or enjoying on its own.", vegan: "no", image: "Vinos-botella-tinto-altos-ibericos.jpeg" },
                    { name: "Garnacha Tintorera, Uva Pirata", price: "12€", description: "Uva Pirata Garnacha Tintorera by Vicente Gandía is an intense red wine known for its deep, dark color and rich flavors. Expect a bouquet filled with aromas of black fruits, complemented by hints of toast and English toffee from its barrel aging. On the palate, it's full-bodied with a smooth and elegant finish, making it a perfect match for red meats and robust pasta dishes.", vegan: "no", image: "Vinos-botella-garnacha-tintorera-uva-pirata.jpeg" },
                    { name: "Garnacha Blanca, Uva Pirata", price: "12€", description: "Uva Pirata Garnacha Blanca by Vicente Gandia is a white wine that captures the essence of the Mediterranean with its fresh and lively character. Expect a bouquet filled with aromas of green apple, pear, and hints of tropical flowers, leading to a palate that's both refreshing and crisp, with a delightful acidity that ends in a memorable aftertaste reminiscent of apple and jasmine.", vegan: "no", image: "Vinos-botella-garnacha-blanca-uva-pirata.jpeg" },
                    { name: "El Miracle Art", price: "16€", description: "El Miracle Art is a signature red wine from the Alicante D.O., showcasing the artistic spirit of Vicente Gandia's winemakers. This wine blends various red grape varieties to offer a smooth experience with elegant tannins, dominated by flavors of dark fruits, hints of spice, and vanilla from oak aging. Its label features artwork, making each bottle a unique piece of art that reflects the creativity of Valencia's artists.", vegan: "no", image: "Vinos-botella-el-miracle-art.jpeg" },
                    { name: "Bobal Noir", price: "18€", description: "Bobal Negro by Vicente Gandía reflects the rich tradition of the Bobal grape, known for its deep color and robust structure. This wine offers a complex bouquet of dark fruits, with subtle oak influences, providing a full-bodied experience with a balanced acidity, ideal for pairing with red meats and hearty dishes.", vegan: "no", image: "Vinos-botella-bobal-negro.jpeg" },
                    { name: "Bobal Rosé", price: "18€", description: "Bobal Rosa from Vicente Gandía is a refreshing rosé wine, showcasing the unique Bobal grape from the Utiel-Requena region. Expect a delightful blend of rose petals, red fruits, and a hint of grapefruit on the nose, with a smooth, fresh, and very approachable taste that makes it perfect for light meals or as an aperitif.", vegan: "no", image: "Vinos-botella-bobal-rosa.jpeg" },
                    { name: "Bobal Blanc", price: "18€", description: "The Bobal Blanco from Vicente Gandia is an intriguing white wine crafted from red Bobal grapes, showcasing the versatility of this traditional Spanish variety. This wine is noted for its pale yellow color with a slight reddish hue, reflecting its unique production process. On the palate, expect a harmonious acidity with a refreshing finish that hints at forest fruits, offering an elegant and characterful experience. It's a perfect match for those looking to explore beyond conventional white wines, with its serving temperature best at 5-7ºC to enhance its nuanced flavors.", vegan: "no", image: "Vinos-botella-bobal-blanco.jpeg" },
                    { name: "Coto Crianza, Rioja", price: "12€", description: "El Coto Crianza is a red wine from Rioja, Spain, made entirely from Tempranillo grapes. It's aged for 12 months in American oak barrels, offering a balanced blend of fruit flavors like raspberry and cherry, with hints of spice and vanilla for a smooth finish. This wine is known for its approachable taste profile, making it a versatile choice for pairing with a variety of dishes.", vegan: "no", image: "Vinos-botella-coto-crianza.jpeg" },
                    { name: "Beronia Crianza, Rioja", price: "18€", description: "Beronia Crianza is a delightful example of Rioja's winemaking tradition, offering a harmonious blend where Tempranillo grapes play the lead role. This wine is aged for 12 months in mixed barrels of American and French oak, which imparts a complex bouquet of dark fruits, like black cherry, alongside hints of spice, vanilla, and a subtle earthiness. On the palate, it presents a smooth, well-balanced experience with ripe fruit flavors, gentle tannins, and a finish that carries notes of oak, making it versatile for pairing with a wide range of dishes, from roasted meats to hearty stews.", vegan: "no", image: "Vinos-botella-beronia-crianza.jpeg" },
                    { name: "Melior Matarromera, Ribera del Duero", price: "20€", description: "Melior Matarromera from Ribera del Duero is an elegant red wine that embodies the essence of the Tempranillo grape from some of Spain's finest wine regions. This wine blends the freshness and vibrant tannins from Ribera del Duero with the rich, fruity nuances from other top areas, offering a complex profile with hints of dark fruit, spice, and a subtle oak influence due to its aging process. It's versatile enough for social drinking or pairing with a variety of meats, providing a smooth, lingering finish.", vegan: "no", image: "Vinos-botella-melior-matarromera.jpeg" },
                    { name: "Punto Geodésico, Ribera del Duero", price: "37€", description: "Punto Geodésico from the Ribera del Duero region is a premium Spanish red wine made from 100% Tempranillo grapes, cultivated at high altitudes. This wine is known for its deep violet-red color, with complex aromas of blackberry, chocolate-covered espresso beans, and a hint of spices. On the palate, it offers an opulent texture with flavors of cherry, raspberry, mocha, and caramel, leading to a long finish with notes of fresh-ground coffee. Its well-structured tannins and vibrant acidity make it a wine with great aging potential, ideal for pairing with robust dishes like red meats or rich pastas.", vegan: "no", image: "Vinos-botella-punto-geodesico.jpeg" },
                    { name: "Trus Roble, Ribera del Duero", price: "17€", description: "Trus Roble is a wine that encapsulates the essence of the Ribera del Duero region, known for its robust and expressive Tempranillo. This wine offers a bouquet of ripe red and black fruits, complemented by spicy and balsamic notes with a hint of roasted flavors. On the palate, it's smooth and well-balanced, showcasing a harmonious acidity that makes it an excellent companion for a variety of hearty dishes.", vegan: "no", image: "Vinos-botella-trus-roble.jpeg" },
                    { name: "Santa Rosa, Enrique Mendoza", price: "28€", description: "Santa Rosa by Enrique Mendoza is a robust red wine that offers a symphony of dark fruit flavors with hints of spice and vanilla, derived from its aging in oak. Expect a full-bodied experience with a smooth finish, perfect for pairing with red meats or hearty pasta dishes.", vegan: "no", image: "Vinos-botella-santa-rosa.jpeg" }
                ]
            },
            "Desserts": {
                description: "Beenden Sie Ihr Essen mit einer süßen Note.",
                items: [
                        { name: "Käsekuchen / Tarta de queso", price: "€5.50", description: "Klassischer cremiger Käsekuchen.", vegan: "no", glutenfree: "no", image: "Desserts-cheesecake.jpeg" },
                        { name: "Lotus-Keks-Kuchen / Tarta Galleta Lotus", price: "€5.90", description: "Leckerer Kuchen aus Lotus-Keksen.", vegan: "no", glutenfree: "no", image: "Desserts-lotus-biscuit-cake.jpeg" },
                        { name: "Tod durch Schokolade / Muerte por Chocolate", price: "€6.40", description: "Reiches, sündhaftes Schokoladendessert.", vegan: "no", glutenfree: "no", image: "Desserts-death-by-chocolate.jpeg" },
                        { name: "Omas Kuchen / Tarta de la abuela", price: "€5.50", description: "Traditioneller Kuchen nach Familienrezept.", vegan: "no", glutenfree: "no", image: "Desserts-grandmas-cake.jpeg" },
                        { name: "Samtkuchen / Tarta Velvet", price: "€5.50", description: "Weicher, saftiger Samtkuchen.", vegan: "no", glutenfree: "no", image: "Desserts-velvet-cake.jpeg" },
                        { name: "Schokoladenfondant / Coulant de chocolate", price: "€5.20", description: "Warmer Schokoladenfondant mit flüssigem Kern.", vegan: "no", glutenfree: "no", image: "Desserts-chocolate-fondant.jpeg" },
                        { name: "Bailey's-Fondant / Coulant de Baileys", price: "€5.20", description: "Fondant mit Bailey's-Likör.", vegan: "no", glutenfree: "no", image: "Desserts-baileys-fondant.jpeg" },
                        { name: "Weiße-Schokolade-Fondant (glutenfrei) / Coulant choco blanco", price: "€5.20", description: "Glutenfreier Weißschokoladenfondant.", vegan: "no", glutenfree: "yes", image: "Desserts-white-chocolate-fondant.jpeg" },
                        { name: "Brownie mit Keksstreuseln / Brownie", price: "€6.00", description: "Brownie mit Keksstreuseln.", vegan: "no", glutenfree: "no", image: "Desserts-brownie-cookie-crumble.jpeg" },
                        { name: "Eistorte (glutenfrei) / Contesa de Nata", price: "€4.90", description: "Glutenfreie Eistorte mit Sahne", vegan: "no", glutenfree: "yes", image: "Desserts-contesa.jpeg" },
                        { name: "Whisky-Kuchen / Tarta al Whisky", price: "€5.20", description: "Saftiger Kuchen mit Whisky.", vegan: "no", glutenfree: "no", image: "Desserts-whisky-cake.jpeg" },
                        { name: "Schokoladentrüffel / Trufas de chocolate", price: "€5.20", description: "Dekadente Schokoladentrüffel.", vegan: "no", glutenfree: "no", image: "Desserts-chocolate-truffles.jpeg" },
                        { name: "Nougat-Eisbecher (glutenfrei) / Tarrina helado Turrón", price: "€3.00", description: "Glutenfreier Nougat-Eisbecher.", vegan: "no", glutenfree: "yes", image: "Desserts-nougat-ice-cream.jpeg" },
                        { name: "Orange mit Zimt (glutenfrei) / Naranjas con canela", price: "€3.80", description: "Frische Orangenscheiben mit Zimt.", vegan: "yes", glutenfree: "yes", image: "Desserts-orange-cinnamon.jpeg" }
                ]
            }

        }
    }
};

// Export for Node.js environments
if (typeof module !== 'undefined') {
    module.exports = menuData;
}
