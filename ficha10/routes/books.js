var express = require('express');
var router = express.Router();
var booksController = require('../controllers/booksController.js');

/* GET books listing. */
router.get('/', booksController.getAllBooks);

module.exports = router;
