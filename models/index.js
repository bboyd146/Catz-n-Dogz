const Pet = require('./Pet');
const Animal = require('./Animal');



Pet.belongsTo(Animal)

Animal.hasMany(Pet)

module.exports = {
    Pet,
    Animal,  
};




