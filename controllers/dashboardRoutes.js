const router = require('express').Router();
const User = require('../models/User');
const withAuth = require('../utils/auth');


router.get('/', withAuth, (req, res) => {
    User.findAll({
        where: {
            userId: req.session.userId
        }
    })
    .then(dbUserData =>{
        const users = dbUserData.map((user) => user.get({ plain: true }));

        res.render("animal-details", {
            layout: "dashboard",
            
        });
    })
    .catch(err => {
        res.redirect("login");
    });
});


module.exports = router