const router = require('express').Router();
const { Animal, Pet } = require('../models');
const User = require('../models/User');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
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

        res.render('animal', {
            animals: {},
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});








module.exports = router;