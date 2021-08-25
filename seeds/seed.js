const sequelize = require('../config/connection');
const { Cat, Dog } = require('../models');

const catSeedData = require('./catseeds');
const dogSeedData = require('./dogseeds');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const cats = await Cat.bulkCreate(catSeedData);

    const dogs = await Dog.bulkCreate(dogSeedData);

    process.exit(0);
};

seedDatabase();