import express from "express";

import facultyRoutes from "./routes/faculty.routes.js";
import connectDB from "./database/database.js";

const app = express();

// setting view engine
app.set("view engine", "ejs");

// setting folder for static assets
app.use(express.static("public"));

// connecting to MongoDB
connectDB();

// parsing json data from req.body
app.use(express.json());
app.use(express.urlencoded());

// using facultyRoutes
app.use(facultyRoutes);

app.listen("8000", () => {
  console.log(`Server is running on port 8000`);
});
