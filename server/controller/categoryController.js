const User = require("../models/user");
const Category = require("../models/category");
const Blog = require("../models/blog");

exports.addCategory = async (req, res) => {
  try {
    const { title } = req.body;
    const checkCat = await Category.findOne({ title });
    if (checkCat) {
      return res.status(400).json({ error: "Category already exists" });
    }
    const newCat = new Category({title});
    await newCat.save();
    return res.status(200).json({success: true, message: "Category added successfully"});
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: "Internal Server Error" });
  }
};
