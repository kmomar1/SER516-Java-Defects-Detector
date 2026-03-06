import { Router } from "express"
import { createStat, getStats, getFocusFactor } from "../controllers/CrudController.js";

const router = Router()

router.post("/stats", createStat);
router.get("/stats", getStats);
router.get("/focus-factor", getFocusFactor);

export default router