var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController.js');

/* GET users listing. */
router.get('/', usersController.getAllUsers);

module.exports = router;
