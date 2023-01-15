import { Request, Response } from "express";
import { ProductModel } from "../database/model/Products";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, category, status, quantity } = req.body;

    const created_at = new Date();

    const product = new ProductModel({
      name,
      category,
      status,
      quantity,
      created_at,
    });

    await product.save();

    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
