const router = require("express").Router();
const userController = require("../controller/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../middlewares/imageUpload");

//sign up
router.post("/sign-up", userController.signUpUser);

//log in
router.post("/log-in", userController.loginUser);

//check cookie
router.get("/check-cookie", userController.checkCookie);

//log out
router.post("/logout", userController.logout);

//get profile data
router.get(
  "/getProfileData",
  authMiddleware.verifyToken,
  authMiddleware.authorizeRole("user"),
  userController.getProfileData
);

//change user password
router.patch(
  "/changeUserPassword",
  authMiddleware.verifyToken,
  authMiddleware.authorizeRole("user"),
  userController.changeUserPassword
);

//change avatar
router.put(
  "/changeAvatar",
  authMiddleware.verifyToken,
  authMiddleware.authorizeRole("user"),
  upload.single("image"),
  userController.changeAvatar
);

module.exports = router;
