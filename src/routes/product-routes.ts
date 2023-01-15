import { Router } from "express";
import { createProduct } from "../controllers/product-Create";
import { updateProduct } from "../controllers/product-update";
import { getAll } from "../controllers/product-list-all";
import { getById } from "../controllers/product-list";
import { deleteProduct } from "../controllers/product-delete";

const router = Router();

router.get("/", getAll);
router.post("/", createProduct);
router.get("/:id", getById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
