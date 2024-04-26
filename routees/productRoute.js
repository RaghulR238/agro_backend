import app from "express";
import { addToCart, allProducts, allProductsSearch, allProductsSortHigh, allProductsSortLow, deleteCart, displayCart, farmerProducts, productUpload } from "../controllers/productController.js";

const router=app.Router();
router.post("/upload",productUpload);
router.get("/farmerProducts",farmerProducts);
router.get("/allProducts",allProducts);
router.get("/displayCart",displayCart);
router.post("/addToCart",addToCart);
router.delete("/deleteCart",deleteCart);
router.get("/allProductsSortLow",allProductsSortLow);
router.get("/allProductsSortHigh",allProductsSortHigh);
router.get("/allProductsSearch",allProductsSearch);
export default router;