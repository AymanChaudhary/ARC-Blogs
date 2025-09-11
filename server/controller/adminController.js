const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Blog = require("../models/blog");

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, error: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        success: false,
        error: "Invalid email or password",
      });
    }
    const checkPassword = await bcrypt.compare(password, existingUser.password);
    if (!checkPassword) {
      return res.status(400).json({
        success: false,
        error: "Invalid email or password",
      });
    }
    const token = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );
    res.cookie("BlogsToken", token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      secure: true,
      sameSite: "None",
    });
    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: existingUser,
    });
  } catch (error) {
    //console.error("Error in loginUser:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};

//add blog
exports.addBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ success: false, error: "All fields are required" });
    }
    if (!req.file) {
      return res.status(400).json({ error: "Please upload an image" });
    }
    const newBlog = new Blog({ title, description, image: req.file.path });
    await newBlog.save();
    return res.status(200).json({ message: "Blog added successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};
