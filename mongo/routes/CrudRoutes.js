import { Router } from "express"
import { getStats, getFocusFactor } from "../controllers/CrudController.js";

const router = Router()

router.get("/stats", getStats);
router.get("/focus-factor", getFocusFactor);

export default router