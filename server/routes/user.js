const router = require('express').Router();
const userController = require('../controller/userController');

//sign up
router.post("/sign-up", userController.signUpUser);

//log in
router.post("/log-in", userController.loginUser);

//check cookie
router.get("/check-cookie", userController.checkCookie);

//log out
router.post("/logout", userController.logout);

module.exports = router;