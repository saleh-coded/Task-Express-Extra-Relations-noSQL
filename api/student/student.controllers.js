const Student = require("../../models/Student");
const Course = require("../../models/Course");
const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find().populate("courses");
    return res.status(200).json(students);
  } catch (error) {
    next(error);
  }
};

const createStudent = async (req,res,next)=>{
  try {
    const newStudent = await Student.create(req.body)
    return res.status(201).json({data: newStudent})
  } catch (error) {
    next(error)
  }
};

const updateStudent = async (req,res,next)=>{
  try {
    const {id} = req.params;
    const upCourse = await Course.updateMany({_id: req.body.courses},{
      $push: {students: id}
    })
    const upStudent = await Student.findByIdAndUpdate(id,{
      $push: {courses: req.body.courses}
    })
    return res.status(200).json({data: upStudent});
  } catch (error) {
    next(error)
  }
}
module.exports = { getAllStudents, createStudent, updateStudent };
