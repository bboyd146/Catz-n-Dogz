const router = require('express').Router();
const { Pet, Animal, Post } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
        
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;