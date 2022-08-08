const express = require('express');
const router = express.Router();
const {getCurrentWeather} = require('../controllers/current.controller');
const { errorHandler } = require('../middleware/herrorHandler');
const {normalizeIp} = require('../middleware/normalizeIp');

router.get('/', normalizeIp, getCurrentWeather);
router.get('/:city', normalizeIp, getCurrentWeather);

module.exports = router;
