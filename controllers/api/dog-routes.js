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

router.post('/', async (req, res) => {
    try {
        const dogData = await Dog.create(req.body);
        res.status(200).json(dogData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const dogData = await Dog.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json(dogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const dogData = await Dog.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!dogData) {
            res.status(404).json({ message: 'No dog with this id!' });
            return;
        }
        res.status(200).json(dogData);
    } catch (err) {
        res.status(500).json(err);
    }
    // delete a category by its `id` value
});






module.exports = router;