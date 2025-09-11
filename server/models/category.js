const mongoose = require("mongoose");

const catSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    blogs: [{ type: Schema.Types.ObjectId, ref: "blog" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("cat", catSchema);
