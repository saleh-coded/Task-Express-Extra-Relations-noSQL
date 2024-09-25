const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
  name: String,
  courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});

module.exports = model("Student", studentSchema);
