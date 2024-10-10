const express = require("express");
const { getAllStudents, createStudent, updateStudent } = require("./student.controllers");
const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);
studentRouter.post("/", createStudent);
studentRouter.put("/:id", updateStudent);

module.exports = studentRouter;
