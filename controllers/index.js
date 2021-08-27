const router = require('express').Router();
const api = require('./api');

const dashboardRoutes = require('./dashboardRoutes')


router.use('/api', api);
router.use('/dashboard', dashboardRoutes);


module.exports = router;