import { Request, Response } from "express";
import { ProductModel } from "../database/Products";

export const listProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
