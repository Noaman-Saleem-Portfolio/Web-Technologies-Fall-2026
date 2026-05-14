import express from "express";

import {
  createNewFaculty,
  readAllFaculty,
  readOneFaculty,
} from "../controllers/faculty.controllers.js";

const router = express.Router();

// Faculty Management System for UMT

// Fetch/Read all faculty
router.route("/faculty").get(readAllFaculty);

// Read One
router.route("/faculty/:id").get(readOneFaculty);

// Create new faculty
router.route("/faculty").post(createNewFaculty);

export default router;
