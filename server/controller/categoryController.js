const User = require("../models/user");
const Category = require("../models/category");
const Blog = require("../models/blog");

exports.addCategory = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: "Internal Server Error" });
  }
};
