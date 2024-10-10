const Course = require("../../models/Course");

const getAllCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
};

const createCourse = async (req,res,next)=>{
  try {
    const newCourse = await Course.create(req.body);
    return res.status(201).json({data: newCourse});
  } catch (error) {
    next(error)
  }
};

module.exports = { getAllCourses, createCourse };
