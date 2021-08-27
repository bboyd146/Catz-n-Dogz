const route = require('express').Router();
const User = require('../models/User');
const withAuth = require('../utils/auth');
const router = require('./api/UserRoutes');








module.exports = router;