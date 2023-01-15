import { Router } from "express";
import { createProduct } from "../controllers/product-Create";
import { updateProduct } from "../controllers/product-update";
import { getAll } from "../controllers/product-list-all";
import { getById } from "../controllers/product-list";
import { deleteProduct } from "../controllers/product-delete";

const router = Router();

router.post("/", createProduct);
router.put("/:id", updateProduct);
router.get("/:id", getById);
router.get("/", getAll);
router.delete("/:id", deleteProduct);

export default router;
