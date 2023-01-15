import { Router } from "express";

const router = Router();

router.get("/products", ProductController.getAll);
router.post("/products", ProductController.createProduct);
router.get("/products/:id", ProductController);
router.put("/products/:id", ProductController.updateProduct);
router.delete("/products/:id", ProductController.deleteProduct);

export default router;
