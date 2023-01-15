import { Request, Response } from "express";
import { ProductModel } from "../database/Products";
import mongoose from "mongoose";

export const getAll = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, category, status, quantity } = req.body;

    const id = new mongoose.Types.ObjectId();

    const created_at = new Date();

    const product = new ProductModel({
      id,
      name,
      category,
      status,
      quantity,
      created_at,
    });

    await product.save();

    res.status(201).json({ id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
