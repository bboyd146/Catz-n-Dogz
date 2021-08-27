const sequelize = require('../config/connection');
const { Animal, Pet } = require('../models');
const User = require('../models/User');

const animalSeedData = require('./animalseeds');
const petSeedData = require('./petseeds');
const userData = require('./userData.json');

console.log(animalSeedData)

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const animals = await Animal.bulkCreate(animalSeedData);


    const pets = await Pet.bulkCreate(petSeedData);


    const user = await User.bulkCreate(userData);
    console.log(user);
    process.exit(0);
};

seedDatabase();