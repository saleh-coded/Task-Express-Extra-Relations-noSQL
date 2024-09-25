const Student = require("../../models/Student");

const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    return res.status(200).json(students);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllStudents };
