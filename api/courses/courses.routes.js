const express = require("express");
const { getAllCourses, createCourse } = require("./courses.controllers");
const courseRouter = express.Router();

courseRouter.get("/", getAllCourses);
courseRouter.post("/",createCourse);

module.exports = courseRouter;
