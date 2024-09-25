const express = require("express");
const connectDb = require("./database");
const morgan = require("morgan");
const errorHandler = require("./middleware/errorHandler");
const notFoundHandler = require("./middleware/notFoundHandler");
const studentRouter = require("./api/student/student.routes");
const courseRouter = require("./api/courses/courses.routes");

//init
connectDb();
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes

app.use("/api/students", studentRouter);
app.use("/api/courses", courseRouter);

//middleares
app.use(errorHandler);
app.use(notFoundHandler);

//server start
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
