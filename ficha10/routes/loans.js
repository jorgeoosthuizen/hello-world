var express = require('express');
var router = express.Router();
var loansController = require('../controllers/loansController.js');

/* GET loans listing. */
router.get('/', loansController.getAllLoans);


module.exports = router;
