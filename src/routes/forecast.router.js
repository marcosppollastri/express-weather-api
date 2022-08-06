const express = require('express');
const router = express.Router();
const {getForecast} = require('../controllers/forecast.controller');
const {normalizeIp} = require('../middleware/normalizeIp');

router.get('/', normalizeIp, getForecast);
router.get('/:city', normalizeIp, getForecast);

module.exports = router;
