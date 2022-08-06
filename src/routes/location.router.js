const express = require('express');
const router = express.Router();
const {getLocation} = require('../controllers/location.controller');
const {normalizeIp} = require('../middleware/normalizeIp');

/* NASA endpoints*/
router.get('/', normalizeIp, getLocation);


module.exports = router;
