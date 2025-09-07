const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//sign-up controller
exports.signUpUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ success: false, error: "All fields are required" });
    }
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: "Username or email already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return res.status(200).json({
      success: true,
      message: "Account created successfully",
      data: newUser,
    });
  } catch (error) {
    console.error("Error in signUpUser:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};

//log-in controller
exports.loginUser = async (req, res) => {
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
      sameSite: "None"
    });
    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: existingUser,
    });
  } catch (error) {
    console.error("Error in loginUser:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};

//check cookie
exports.checkCookie = async(req, res) => {
  try {
    const token = req.cookies.BlogsToken;
    if (token){
      return res.status(200).json({ message: true });
    }
    return res.status(200).json({ message: false });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
}