const router = require('express').Router();

const petRoutes = require('./pet-routes');
const userRoutes = require('./UserRoutes');

router.use('/pet', petRoutes);
router.use('/user', userRoutes);

module.exports = router;