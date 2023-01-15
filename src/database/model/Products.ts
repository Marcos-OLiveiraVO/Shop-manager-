import mongoose, { Schema, Document } from "mongoose";

interface Product extends Document {
  id: string;
  name: string;
  category: string;
  status: "ACTIVE" | "INACTIVE";
  quantity: number;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

const ProductSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, required: true },
  quantity: { type: Number, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date },
  deleted_at: { type: Date },
});

export const ProductModel = mongoose.model<Product>("Product", ProductSchema);
