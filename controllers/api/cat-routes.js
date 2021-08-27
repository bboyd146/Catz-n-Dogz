const router = require('express').Router();
const Cat = require('../../models/Cat');

router.get('/', async (req, res) => {
    try {
        const catData = await Cat.findAll();
        res.status(200).json(catData);
    } catch (err) {
        res.status(400).json(err);
    }
});

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

router.post('/', async (req, res) => {
    try {
        const catData = await Cat.create({
            sex: req.body.sex,
            is_stray: req.body.is_stray,
            breed: req.body.breed,
        });
        console.log(catData)
        res.status(200).json(catData)
        console.log(catData);

    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const catData = await Cat.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json({ message: 'This cat has been updated!' });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const catData = await Cat.destroy({
            where: { id: req.params.id }
        });
        res.status(200).json({ message: 'This cat has been Deleted!' });
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;