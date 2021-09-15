
var express = require('express');
var router = express.Router();

/* GET users listing. */


var usersController = require('../controllers/userControllers')

router.get('/register', usersController.register)
router.get('/login',  usersController.login)
router.get('/profile', usersController.profile)
router.get('/profile-edit', usersController.profileEdit)
router.get('/post-add', usersController.addpost)

module.exports = router