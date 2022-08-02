const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    res.json('This is the back end.. Request successful');
});
router.get('/posts', db.getPosts)

module.exports = router;
