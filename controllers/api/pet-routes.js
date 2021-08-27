const router = require('express').Router();
const { Pet, Animal } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const petData = await Pet.findAll({
            include: [{ model: Animal }],
        });
        res.status(200).json(petData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const petData = await Pet.findByPk(req.params.id, {
            include: [{model: Animal}]
        });
        if (!petData) {
            res.status(404).json({ message: 'No Pet found with that id!' });
            return;
        }
        res.status(200).json(petData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const petData = await Pet.create(req.body);
        res.status(200).json({ message: 'New Pet has been added!' });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const petData = await Pet.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json({ message: 'This Pet has been updated!' });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const petData = await Pet.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!petData) {
            res.status(404).json({ message: 'No Pet with this id!' });
            return;
        }
        res.status(200).json({ message: 'This Pet has been deleted!' });
    } catch (err) {
        res.status(500).json(err);
    }
});






module.exports = router;