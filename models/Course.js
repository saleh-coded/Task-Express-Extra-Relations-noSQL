const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  title: String,
  students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
});

module.exports = model("Course", courseSchema);
