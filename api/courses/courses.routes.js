const express = require("express");
const { getAllCourses } = require("./courses.controllers");
const courseRouter = express.Router();

courseRouter.get("/", getAllCourses);

module.exports = courseRouter;
