const mongoose = require('mongoose');

const Dessert = require('../../api/products/desserts/desserts.model');

require('dotenv').config();

const URIDB = process.env.MONGO_DB;

const desserts = [
    {
        name: "Tiramisú",
        price: 4.50,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650817229/Products/tiramisu_fncpnw.png",
        description: "Pastel frío en capas de mascarpone, crema, bizcocho y con cacao en polvo",
        allergic: [ "Lácteos", "Huevos", "Gluten" ]
    },
    {
        name: "Coulant de chocolate",
        price: 4.00,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650817229/Products/coulant_hteeee.jpg",
        description: "Bizcocho de chocolate relleno de chocolate líquido",
        allergic: [ "Huevos", "Gluten" ]
    },
    {
        name: "Helado Häagen Dazs Tarrina 100 grs",
        price: 3.50,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650817229/Products/helado-oreo_hsomu2.jpg",
        allergic: [ "Lácteos", "Gluten", "Huevos" ]
    },
    {
        name: "Helado Häagen Dazs Tarrina 500 grs",
        price: 7.70,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650817229/Products/helado-tarta-queso_ru0fzn.jpg",
        allergic: [ "Lácteos", "Gluten", "Huevos" ]
    },
    {
        name: "Brownie de chocolate y nueces",
        price: 4.70,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650817229/Products/brownie_lnt63v.jpg",
        allergic: [ "Lácteos", "Gluten", "Huevos", "Frutos con cáscara" ]
    },
    {
        name: "Tarta de queso y arándanos",
        price: 4.50,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650817229/Products/tarta-queso_ck2hs2.jpg",
        allergic: [ "Lácteos", "Gluten", "Huevos", "Frutos rojos" ]
    }
]

mongoose.connect(URIDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(async () => {
    const allDesserts = await Dessert.find();
    if (allDesserts.length) {
        await Dessert.collection.drop();
        console.log('TODO BORRADO')
    }
}).catch((err) => console.error('HAY UN ERROR EN EL BORRADO')).then(async () => {
    await Dessert.insertMany(desserts);
    console.info('Creado')
}).catch((err) => console.error('HAY UN ERROR EN EL CREADO')).finally(() => mongoose.disconnect());