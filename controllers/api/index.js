const router = require('express').Router();
require('cloudinary').v2;
const petRoutes = require('./pet-routes');
const animalRoutes = require('./animal-routes');
const userRoutes = require('./userRoutes');
const postRoutes = require('./post-routes');

router.use('/pet', petRoutes);
router.use('/animal', animalRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes);

module.exports = router;