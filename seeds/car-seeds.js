const Car = require('../models/Car');

const carData = [

    {
        title: "Focus",
        manufacturer: "Ford",
        description: "wonderful ford focus",
        price: 10000,
        mileage: 200000,
        user_id: 3
    },
    { title: "Commodore",
    manufacturer: "Holden",
    description: "wonderful commodore",
    price: 5000,
    mileage: 250000,
    user_id: 2
    },
    { title: "A3",
    manufacturer: "Audi",
    description: "wonderful audi",
    price: 15000,
    mileage: 111000,
    user_id: 3
    },
    { title: "A4",
    manufacturer: "Audi",
    description: "wonderful audi sedan",
    price: 8000,
    mileage: 260000,
    user_id: 3
    },
    { title: "Zafira",
    manufacturer: "Opel",
    description: "wonderful opel",
    price: 1000,
    mileage: 400000,
    user_id: 1
    },


];

const seedCars = () => Car.bulkCreate(carData);

module.exports = seedCars;
