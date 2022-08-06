const express = require('express');
const router = express.Router();
const locationRouter = require('./location.router');

router.use('/location', locationRouter);


module.exports = router;
