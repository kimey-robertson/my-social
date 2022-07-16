const express = require('express');
const router = express.Router();
const controller = require('../controllers/api');

router.get('/api/', controller.controller)

module.exports = router;