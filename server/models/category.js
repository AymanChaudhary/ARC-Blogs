const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const catSchema = new Schema(
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
