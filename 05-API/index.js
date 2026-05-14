import express from "express";

import facultyRoutes from "./routes/faculty.routes.js";
import connectDB from "./database/database.js";

const app = express();

// connecting to MongoDB
connectDB();

// using facultyRoutes
app.use(facultyRoutes);

app.listen("8000", () => {
  console.log(`Server is running on port 8000`);
});
