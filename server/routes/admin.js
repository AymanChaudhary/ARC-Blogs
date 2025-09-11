const router = require("express").Router();
const adminController = require("../controller/adminController");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../middlewares/imageUpload");

router.post("/adminLogin", adminController.adminLogin);

//add blogs
router.post(
  "/addBlog",
  authMiddleware.verifyToken,
  authMiddleware.authorizeRole("admin"),
  upload.single("image"),
  adminController.addBlog
);

module.exports = router;
