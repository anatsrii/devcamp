const express = require('express');
const router = express.Router();
const attractions = require('../sql_query/attractions');
// const idAtractions = require('../sql_query/idAttraction');

router.get('/', attractions.getAllAttractions);
router.get('/:id', attractions.getIdAttraction);

module.exports = router;