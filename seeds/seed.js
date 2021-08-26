const sequelize = require('../config/connection');
const { Cat, Dog } = require('../models');

const catSeedData = require('./catseeds');
const dogSeedData = require('./dogseeds');
console.log(catSeedData)
const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const cats = await Cat.bulkCreate(catSeedData);
console.log(cats);
    const dogs = await Dog.bulkCreate(dogSeedData);
console.log(dogs)
    process.exit(0);
};

seedDatabase();