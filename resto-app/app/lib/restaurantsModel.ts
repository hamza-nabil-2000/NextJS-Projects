import mongoose from "mongoose";

const restaurantModel = new mongoose.Schema({
  name: String,
  email: String,
  password: { type: String, select: false },
  city: String,
  address: String,
  contact: String,
});

export const restaurantSchema =
  mongoose.models.restaurants || mongoose.model("restaurants", restaurantModel);
