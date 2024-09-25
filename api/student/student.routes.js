const express = require("express");
const { getAllStudents } = require("./student.controllers");
const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);

module.exports = studentRouter;
