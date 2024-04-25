import app from "express";
import { login, userSignUp} from "../controllers/userController.js";

const router=app.Router();

router.post("/signUp",userSignUp);
router.post("/login",login);


export default router;