import app from "express";
import { addToCart, allProducts, deleteCart, displayCart, farmerProducts, productUpload } from "../controllers/productController.js";

const router=app.Router();
router.post("/upload",productUpload);
router.get("/farmerProducts",farmerProducts);
router.get("/allProducts",allProducts);
router.get("/displayCart",displayCart);
router.post("/addToCart",addToCart);
router.delete("/deleteCart",deleteCart);
export default router;