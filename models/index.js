const Pet = require('./Pet');
const Animal = require('./Animal');
const User = require('./User');
const Post = require('./Post');



Pet.belongsTo(Animal, {
    foreignKey: 'animal_id',
})

Animal.hasMany(Pet, {
    foreignKey: 'animal_id',
})

User.hasMany(Post, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

Post.hasOne(Animal)

module.exports = {
    Pet,
    Animal, 
    User,
    Post, 
};




