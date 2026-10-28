import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const queryParams = new URL(request.url).searchParams;
  console.log(queryParams.get("location"));
  let filter = {};
  const city = queryParams.get("location");
  const name = queryParams.get("restaurant");
  if (city) {
    filter = { city: { $regex: new RegExp(city, "i") } };
  } else if (name) {
    filter = { name: { $regex: new RegExp(name, "i") } };
  }
  await mongoose.connect(connectionStr);
  let result = await restaurantSchema.find(filter);
  return NextResponse.json({ success: true, result });
}
