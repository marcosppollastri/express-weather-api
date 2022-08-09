const express = require('express');

const router = express.Router();
const locationRouter = require('./location.router');
const currentRouter = require('./current.router');
const forecastRouter = require('./forecast.router');

router.use('/location', locationRouter);
router.use('/current', currentRouter);
router.use('/forecast', forecastRouter);

module.exports = router;
