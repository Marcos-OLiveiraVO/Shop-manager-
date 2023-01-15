import { Request, Response } from "express";
import { ProductModel } from "../database/Products";

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, category, status, quantity } = req.body;
    const updated_at = new Date();
    const product = await ProductModel.findByIdAndUpdate(
      id,
      { name, category, status, quantity, updated_at },
      { new: true }
    );
    if (product) {
      res.status(200).json({ message: "Product updated successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
