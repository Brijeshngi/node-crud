import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    expiry: { type: Date, required: true },
    purchaseRate: { type: Number, required: true },
    saleRate: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model("Product", productSchema);
