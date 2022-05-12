const mongoose = require('mongoose');

const Beverage = require('../../api/products/beverages/beverages.model');

require('dotenv').config();

const URIDB = process.env.MONGO_DB;

const beverages = [
    {
        name: "Agua 1.5 L",
        price: 1.60,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650816115/Products/agua_xdhykg.jpg",
    },
    {
        name: "Kas naranja 33 cl",
        price: 1.50,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650816115/Products/kas_naranja_ehzgq8.jpg",
    },
    {
        name: "Kas limón 33 cl",
        price:  1.50,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650816115/Products/kas_limon_tqwib2.jpg",
    },
    {
        name: "7 Up 33 cl",
        price: 1.50,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650816116/Products/sevenup_pz0cdp.jpg",
    },
    {
        name: "Pepsi 33 cl",
        price: 1.50,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650816116/Products/pepsi_bjkscc.jpg",
    },
    {
        name: "Pepsi Zero 33 cl",
        price: 1.50,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650816115/Products/pepsi-cero_kv9hnm.jpg",
    },
    {
        name: "Cerveza 33 cl",
        price: 1.50,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650816115/Products/cerveza033_nvspyk.jpg",
    },
    {
        name: "Cerveza 1 L",
        price: 2.50,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650816115/Products/cerveza-litro_wuqczx.jpg",
    },
    {
        name: "Lambrusco tinto",
        price: 8.00,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650816115/Products/lambrusco-tinto_b3xjbq.jpg",
    },
    {
        name: "Lambrusco rosado",
        price: 8.00,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650816115/Products/lambrosco-rosado_vwyxp1.jpg",
    },
    {
        name: "Agua 50 cl",
        price:  1.00,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650816115/Products/agua050_vfs208.jpg",
    },
    {
        name: "Pepsi 2 L",
        price: 2.85,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650816115/Products/pepsi-2-litros_uoudiq.png",
    },
    {
        name: "Kas naranja 2 L",
        price: 2.85,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650816115/Products/kas-naranja-2-litros_eo1caz.jpg",
    },
    {
        name: "Kas limón 2 L",
        price: 2.85,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650816115/Products/kas-limon-2-litros_rawlmm.jpg",
    },
    {
        name: "7 Up 2 L",
        price: 2.85,
        img: "https://res.cloudinary.com/ds78avdh8/image/upload/v1650816116/Products/sevenup-2-litros_bpyhlf.jpg",
    }
]

mongoose.connect(URIDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(async () => {
    const allBeverages = await Beverage.find();
    if (allBeverages.length) {
        await Beverage.collection.drop();
        console.log('TODO BORRADO')
    }
}).catch((err) => console.error('HAY UN ERROR EN EL BORRADO')).then(async () => {
    await Beverage.insertMany(beverages);
    console.info('Creado')
}).catch((err) => console.error('HAY UN ERROR EN EL CREADO')).finally(() => mongoose.disconnect());