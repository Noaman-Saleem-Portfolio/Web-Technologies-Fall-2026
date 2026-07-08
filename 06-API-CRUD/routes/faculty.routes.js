import express from "express";

import {
  createNewFaculty,
  deleteFaculty,
  readAllFaculty,
  readOneFaculty,
  updateFaculty,
} from "../controllers/faculty.controllers.js";

const router = express.Router();

// CRUD API
// Faculty Management System for UMT

// Fetch/Read all faculty
router.route("/faculty").get(readAllFaculty);

// Read One
router.route("/faculty/:id").get(readOneFaculty);

// Create new faculty
router.route("/faculty").post(createNewFaculty);

// Update faculty data
router.route("/faculty/:id").put(updateFaculty);

// delete facuty
router.route("/faculty/:id").delete(deleteFaculty);

export default router;
