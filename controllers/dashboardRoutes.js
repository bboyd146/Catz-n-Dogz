const router = require('express').Router();
const  { Pet, Animal } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth,  async (req, res) => {
    try {
        const petData = await Pet.findAll({
            include: [
                {
                    model: Animal,
                    attributes: ['animal_name'],
                },
            ],
        });

        const animals = petData.map((animal) =>
            animal.get({ plain: true })
        );

        res.render('homepage', {
            layout: 'dashboard',
            animals,
            loggedIn: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router