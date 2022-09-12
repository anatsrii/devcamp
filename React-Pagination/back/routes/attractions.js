const express = require('express');
const router = express.Router();
const attractions = require('../sql_query/attractions');

router.get('/', attractions.getAllAttractions);

module.exports = router;