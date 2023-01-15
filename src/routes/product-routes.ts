import { Router } from "express";
import { createProduct } from "../controllers/product-Create";
import { updateProduct } from "../controllers/product-update";
import { getAll } from "../controllers/product-list-all";
import { getById } from "../controllers/product-list";
import { deleteProduct } from "../controllers/product-delete";

const router = Router();

router.get("/products", getAll);
router.post("/products", createProduct);
router.get("/products/:id", getById);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
