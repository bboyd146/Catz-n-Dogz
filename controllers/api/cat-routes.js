const router = require('express').Router();
const Cat = require('../../models/Cat');

router.get('/', async (req, res) => {
    try {
        const catData = await Cat.findAll();
        res.status(200).json(catData);
    } catch (err) {
        res.status(400).json(err);  
    }
})

module.exports = router;