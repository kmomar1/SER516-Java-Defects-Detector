import { Router } from "express"
import { getStats, updateStat } from "../controllers/CrudController.js";

const router = Router()

router.get("/stats", getStats);
router.put("/stats/:id", updateStat);

export default router
