const express = require('express');
const router = express.Router();
const controller = require('../controller/moviesController')

router.get('/', controller.getAll);
router.get('/movies', controller.getAll);

module.exports = router;