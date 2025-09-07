const router = require('express').Router();
const userController = require('../controller/userController');

//sign up
router.post("/sign-up", userController.signUpUser);

//log in
router.post("/log-in", userController.loginUser);

module.exports = router;