import app from "express";
import { plantUpload } from "../controllers/plantController.js";

const router=app.Router();

router.post("/upload",plantUpload);

export default router;