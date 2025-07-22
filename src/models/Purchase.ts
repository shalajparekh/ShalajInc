import mongoose, { Schema, models } from "mongoose";

const PurchaseSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  cart: [{ type: String, required: true }],
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default models.Purchase || mongoose.model("Purchase", PurchaseSchema); 