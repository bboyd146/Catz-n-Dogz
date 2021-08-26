const router = require('express').Router();
const Dog = require('../../models/Dog');

router.get('/', async (req, res) => {
    try {
        const dogData = await Dog.findAll();
        res.status(200).json(dogData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dogData = await Dog.findByPk(req.params.id,);
        if (!dogData) {
            res.status(404).json({ message: 'No dog found with that id!' });
            return;
        }

        res.status(200).json(dogData);
    } catch (err) {
        res.status(500).json(err);
    }
});










module.exports = router;