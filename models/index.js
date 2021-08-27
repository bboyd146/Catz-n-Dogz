const Pet = require('./Pet');
const Animal = require('./Animal');



Pet.belongsTo(Animal, {
    foreignKey: 'animal_id',
})

Animal.hasMany(Pet, {
    foreignKey: 'animal_id',
})

module.exports = {
    Pet,
    Animal,  
};




