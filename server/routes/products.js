import express from "express";
import {
  createProduct,
  getProducts,
  searchProducts,
} from "../controllers/products.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:query", searchProducts);

export default router;
