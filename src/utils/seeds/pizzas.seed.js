const mongoose = require('mongoose');

const Pizza = require('../../api/products/pizzas/pizzas.model');

require('dotenv').config();

const URIDB = process.env.MONGO_DB;


const pizzas = [
    {
        name: "Paul Castellano",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 7.65, medium: 9.50, familiar: 13.50 },
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814140/Products/paul-castellano_nmfvgz.jpg",
        allergic: [ "Gluten" , "Lácteos"],
        ingredients: ["Tomate", "Mozzarella", "Orégano"],
        category: "Vegetal",
    },
    {
        name: "Baby Nelson",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 8.80, medium: 11.90, familiar: 16.50 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Jamón york"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814138/Products/baby-nelson_yb3tzn.jpg"
    },
    {
        name: "Frank Costello",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 9.00, medium: 11.70, familiar: 16.50 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Cebolla"],
        category: "Vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814140/Products/frank-costello_emjoww.jpg"
    },
    {
        name: "Jim Colosimo",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 9.20, medium: 12.20, familiar: 17.00 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Jamón york", "Champiñones"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814140/Products/jim-colosimo_mjalvv.jpg"
    },
    {
        name: "Al Anastasia",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 9.50, medium: 12.50, familiar: 20.90 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Alcaparras", "Aceitunas negras", "Anchoas"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos", "Frutos con cáscara", "Pescado" ],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814138/Products/al-anastasia_o9o5ar.jpg"
    },
    {
        name: "Lucky Luciano",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 9.50, medium: 12.50, familiar: 20.90 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Pepperoni", "Aceitunas negras", "Pimiento verde"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814140/Products/lucky-luciano_t9nqqg.jpg"
    },
    {
        name: "Don vito",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 9.80, medium: 13.00, familiar: 19.80 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Cebolla", "Lomo marinado en salsa de mostaza", "Berenjera asada", "Pimiento verde"],
        category: "No vegetal",
        allergic: [ "Gluten", "Mostaza", "Lácteos" ],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814139/Products/don-vito_godbzp.jpg"
    },
    {
        name: "Mike Coppola",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 9.80, medium: 13.00, familiar: 19.20 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Queso de cabra", "Espinacas a la crema"],
        category: "Vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814140/Products/mike-coppola_vhd7eb.jpg"
    },
    {
        name: "Salva Todaro",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 9.90, medium: 13.20, familiar: 22.00 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Queso mahonés", "Huevo", "Sobrasada"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos", "Huevos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814140/Products/salva-todaro_cy7oxe.jpg"
    },
    {
        name: "Walter Dietrich",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 9.90, medium: 13.00, familiar: 19.00 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Cebolla", "Pollo marinado", "Salsa tandori"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814141/Products/walter-dietrich_wyucmt.jpg"
    },
    {
        name: "Ciro Terranova",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 9.90, medium: 13.00, familiar: 19.00 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Cebolla", "Pimiento rojo", "Calabacín", "Berenjena asada"],
        category: "Vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814139/Products/ciro-terranova_oez613.jpg"
    },
    {
        name: "Bonnie Parker",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 10.10, medium: 13.60, familiar: 19.20 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Bacon", "Nata", "Huevo"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos", "Huevos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814138/Products/bonnie-parker_ttn2nz.jpg"
    },
    {
        name: "Dick Tracy",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 11.00, medium: 13.40, familiar: 18.60 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Queso de cabra", "Espinacas a la crema"],
        category: "Vegetal",
        allergic: [ "Gluten" , "Lácteos", "Huevos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814139/Products/dick-tracy_pn1fcw.jpg"
    },
    {
        name: "Joe Bonanno",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 10.30, medium: 13.50, familiar: 19.90 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Piña", "Maíz", "Jamón york", "Aguacate"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814140/Products/joe-bonanno_sj6qee.jpg"
    },
    {
        name: "Clyde Barrow",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 10.50, medium: 13.80, familiar: 20.00 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Cebolla", "Alcaparras", "Atún"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos", "Frutos con cáscara", "Pescado"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814139/Products/clyde-barrow_yk9xzm.jpg"
    },
    {
        name: "Carlo Gambino",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 10.60, medium: 13.70, familiar: 22.00 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Gambas", "Aguacate"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos", "Crustáceos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814139/Products/carlo-gambino_ttjwuu.jpg"
    },
    {
        name: "Don Vitone",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 10.70, medium: 12.70, familiar: 19.50 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Jamón york", "Champiñones", "Pimiento rojo", "Alcachofa"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814139/Products/don-vitone_xfgv4o.jpg"
    },
    {
        name: "Donnie Brasco",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 10.70, medium: 15.50, familiar: 22.60 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Queso parmesano", "Queso mahonés", "Roquefort"],
        category: "Vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814139/Products/donnie-brasco_kzhbjh.jpg"
    },
    {
        name: "Vincent Coll",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 10.70, medium: 12.70, familiar: 21.00 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Carne de ternera", "Salsa barbacoa"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814141/Products/vicent-coll_hp44sk.jpg"
    },
    {
        name: "John Dillinger",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 10.80, medium: 15.20, familiar: 21.00 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Cebolla", "Champiñones", "Pimiento", "Calabacín", "Cebolleta", "Salchicha", "Huevo cocido"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos", "Huevos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814140/Products/john-dillinger_tltzmn.jpg"
    },
    {
        name: "Barker Arizona",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 10.50, medium: 14.40, familiar: 21.00 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Bacon", "Carne de hamburguesa"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814138/Products/barker-arizona_rf1dbn.jpg"
    },
    {
        name: "Al Capone",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 10.90, medium: 13.70, familiar: 21.00 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Calabacín", "Pollo marinado picante", "Cebolla", "Huevo"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos", "Huevos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814138/Products/al-capones_s97sd6.jpg"
    },
    {
        name: "Tony Montana",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 11.60, medium: 18.00, familiar: 25.70 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Tomate seco", "Ternera marinada", "Cebolla", "Ajo", "Guindilla", "Pimiento rojo"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814141/Products/tony-montana_xall3f.jpg"
    },
    {
        name: "Jules Winnfield",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 11.20, medium: 14.00, familiar: 19.80 },
        ingredients: ["Tomate", "Mozzarella", "Cebolla roja", "Pimiento verde", "Champiñones", "Escalope de pollo", "Salsa de mostaza y miel"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos", "Mostaza"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814140/Products/jules-winnfield_gnwryv.jpg"
    },
    {
        name: "Meyer Lansky",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 11.90, medium: 15.50, familiar: 23.50 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Jamón york", "Queso de cabra", "Dátiles", "Miel"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814141/Products/meyer-lansky_audeea.jpg"
    },
    {
        name: "Marsellus Wallace",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 11.90, medium: 15.20, familiar: 22.50 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Cebolla", "Ajo", "Tomate seco", "Bacon", "Champiñones", "Morcilla", "Aceitunas negras"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814140/Products/marsellus-wallace_xf1mla.jpg"
    },
    {
        name: "Benjamin Bugsy",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 12.50, medium: 15.50, familiar: 24.20 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Rúcula", "Jamón serrano", "Queso parmesano", "Pesto"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814138/Products/benjamin-bugsy_rsgjj1.jpg"
    },
    {
        name: "Calzone Fat Toni",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 12.10, medium: 13.20, familiar: 22.30 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Setas silvestres", "Pechuga de pollo marinado"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814139/Products/calzone-fat-toni_frzedd.jpg"
    },
    {
        name: "Eliot Ness",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 12.40, medium: 17.00, familiar: 22.30 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Cebolla roja", "Tomate cherry", "Salsa de eneldo", "Salmón ahumado"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos", "Pescado"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814140/Products/eliot-ness_nshcvi.jpg"
    },
    {
        name: "Calzone John Gotti",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 12.30, medium: 13.20, familiar: 19.60 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Girgola", "Setas silvestres", "Shiitake", "Mozzarella de búfala", "Espinacas"],
        category: "Vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814139/Products/calzone-john-gotti_z5infc.jpg"
    },
    {
        name: "Carlos Marcello",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 13.60, medium: 17.90, familiar: 25.00 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Calamar", "Mejillones", "Gambas", "Berberechos", "Carne de cangrejo"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos", "Crustáceos", "Moluscos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814138/Products/carlos-marcello_vz97xo.jpg"
    },
    {
        name: "Carlos Brigante",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 13.40, medium: 17.60, familiar: 23.50 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Rodajas de tomate", "Anchoas", "Mozzarella de búfala", "Salsa pesto"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos", "Pescado"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814139/Products/carlos-brigante_fmm9yk.jpg"
    },
    {
        name: "Tony Soprano",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 11.50, medium: 14.40, familiar: 22.60 },
        ingredients: ["Tomate", "Mozzarella", "Cebolla roja", "Queso de cabra", "Miel", "Sobrasada"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos", "Huevos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814141/Products/tony-soprano_w77ezr.jpg"
    },
    {
        name: "Frank Lucas",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 14.80, medium: 19.80, familiar: 26.60 },
        ingredients: [ "Mozzarella", "Parmesano", "Melocotón", "Pera", "Gorgonzola", "Salsa pesto", "Jamón serrano", "Anacardos", "Crema balsámica", "Rúcula"],
        category: "No vegetal",
        allergic: [ "Gluten" , "Lácteos", "Frutos con cáscara"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814140/Products/frank-lucas_crazoe.jpg"
    },
    {
        name: "Salvatore Giuliano",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 14.00, medium: 18.40, familiar: 26.60 },
        ingredients: ["Tomate", "Mozzarella", "Champiñones", "Cebolla roja", "Crema de Philadelphia", "Salsa pesto", "Braseola", "Rúcula"],
        category: "Vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814141/Products/salvatore-giuliano_eafdm0.jpg"
    },
    {
        name: "Don Corleone",
        varients: ["Pequeña", "Mediana", "Familiar"],
        price: { small: 13.00, medium: 16.40, familiar: 24.60 },
        ingredients: ["Tomate", "Mozzarella", "Orégano", "Coppa", "Probola", "Cebolla roja", "Pimiento verde"],
        category: "Vegetal",
        allergic: [ "Gluten" , "Lácteos"],
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650814139/Products/don-corleone_vl2qli.jpg"
    }
]

mongoose.connect(URIDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(async () => {
    const allPizzas = await Pizza.find();
    if (allPizzas.length) {
        await Pizza.collection.drop();
        console.log('TODO BORRADO')
    }
}).catch((err) => console.error('HAY UN ERROR EN EL BORRADO')).then(async () => {
    await Pizza.insertMany(pizzas);
    console.info('Creado')
}).catch((err) => console.error('HAY UN ERROR EN EL CREADO')).finally(() => mongoose.disconnect());