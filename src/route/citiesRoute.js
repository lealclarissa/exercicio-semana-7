const express = require('express');
const router = express.Router();
const controller = require('../controller/citiesController')

router.get('/', controller.getAll);
router.get('/cities', controller.getAll);

module.exports = router;