const Course = require("../../models/Course");

const getAllCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllCourses };
