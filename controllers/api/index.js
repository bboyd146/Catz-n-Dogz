const router = require('express').Router();

const petRoutes = require('./pet-routes');
const animalRoutes = require('./animal-routes');
const userRoutes = require('./userRoutes');

router.use('/pet', petRoutes);
router.use('/animal', animalRoutes);
router.use('/user', userRoutes);

module.exports = router;