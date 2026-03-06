import { Router } from "express"
import { getStats, updateStat, deletStatbyId } from "../controllers/CrudController.js";

const router = Router()

router.get("/stats", getStats);
router.put("/stats/:id", updateStat);
router.delete("/stats/:id", deletStatbyId);

export default router