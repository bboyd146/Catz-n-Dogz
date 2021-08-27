const router = require('express').Router();
const Pet = require('../../models/Pet');
const Animal = require('../../models/Animal');

router.get('/', async (req, res) => {
    try {
        const animalData = await Animal.findAll({
        });
        res.status(200).json(animalData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// router.get('/:id', async (req, res) => {
//     try {
//         const petData = await Pet.findByPk(req.params.id, {
//             include: [{ model: Animal }]
//         });
//         if (!petData) {
//             res.status(404).json({ message: 'No Pet found with that id!' });
//             return;
//         }
//         res.status(200).json(petData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.post('/', async (req, res) => {
//     try {
//         const petData = await Pet.create(req.body);
//         res.status(200).json(petData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// router.put('/:id', async (req, res) => {
//     try {
//         const petData = await Pet.update(req.body, {
//             where: { id: req.params.id }
//         });
//         res.status(200).json(petData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.delete('/:id', async (req, res) => {
//     try {
//         const petData = await Pet.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });
//         if (!petData) {
//             res.status(404).json({ message: 'No Pet with this id!' });
//             return;
//         }
//         res.status(200).json(petData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
//     // delete a category by its `id` value
// });






module.exports = router;