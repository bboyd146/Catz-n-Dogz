const router = require('express').Router();


const catRoutes = require('./cat-routes.js');
// const dogRoutes = require('./dog-routes');

router.use('/cat', catRoutes);
// router.use('/dog', dogRoutes);

module.exports = router;