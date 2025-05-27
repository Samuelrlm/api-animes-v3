const express = require('express');
const router = express.Router();
const animesController = require('../controllers/animes');

router.post('/animes', animesController.createAnime);

module.exports = router;