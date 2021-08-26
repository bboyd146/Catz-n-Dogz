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

router.get('/:id', async (req, res) => {
    try {
        const catData = await Cat.findByPk(req.params.id, {
        });

        if (!catData) {
            res.status(404).json({ message: 'No cat found with this id!' });
            return;
        }

        res.status(200).json(catData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;