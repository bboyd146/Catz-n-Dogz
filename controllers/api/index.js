const router = require('express').Router();


const catRoutes = require('./cat-routes.js');
const dogRoutes = require('./dog-routes');
const userRoutes = require('./UserRoutes');

router.use('/cat', catRoutes);
router.use('/dog', dogRoutes);
router.use('/users', userRoutes);

module.exports = router;