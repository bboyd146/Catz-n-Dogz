const sequelize = require('../config/connection');
const { Cat, Dog } = require('../models');
const User = require('../models/User');

const catSeedData = require('./catseeds');
const dogSeedData = require('./dogseeds');
const userData = require('./userData.json');

console.log(catSeedData)

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const cats = await Cat.bulkCreate(catSeedData);
console.log(cats);

    const dogs = await Dog.bulkCreate(dogSeedData);
console.log(dogs)

    const user = await User.bulkCreate(userData);
    console.log(user);
    process.exit(0);
};

seedDatabase();