const express = require('express');
const router = express.Router();
const locationRouter = require('./location.router');
const currentRouter = require('./current.router');

router.use('/location', locationRouter);
router.use('/current', currentRouter);


module.exports = router;
