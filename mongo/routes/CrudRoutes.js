import { Router } from "express"
import { getStats, updateStat, createFocusFactor } from "../controllers/CrudController.js";

const router = Router()

router.post("/stats", createFocusFactor);
router.get("/stats", getStats);
router.put("/stats/:id", updateStat);

export default router
