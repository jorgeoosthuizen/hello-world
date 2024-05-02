var express = require('express');
var router = express.Router();
var booksController = require('../controllers/booksController.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(booksController.getAllBooks);
});

module.exports = router;
