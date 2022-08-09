const express = require('express');

const router = express.Router();
const { getCurrentWeather } = require('../controllers/current.controller');
const { normalizeIp } = require('../middleware/normalizeIp');

router.get('/', normalizeIp, getCurrentWeather);
router.get('/:city', normalizeIp, getCurrentWeather);

module.exports = router;
