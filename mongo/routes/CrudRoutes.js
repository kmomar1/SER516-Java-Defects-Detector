import { Router } from "express";
import {
  createFocusFactor,
  getStats,
  getFocusFactor,
} from "../controllers/CrudController.js";

const router = Router();

router.post("/stats", createFocusFactor);
router.get("/stats", getStats);
router.get("/focus-factor", getFocusFactor);
