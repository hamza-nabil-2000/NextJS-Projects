import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await restaurantSchema.find().select("-password");

  return NextResponse.json({ result: data });
}

export async function POST(request: Request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, result: null, message: "Invalid JSON request." },
      { status: 400 },
    );
  }
  try {
    if (
      !payload ||
      typeof payload.email !== "string" ||
      typeof payload.password !== "string" ||
      !payload.password
    ) {
      return NextResponse.json({ success: false, result: null }, { status: 400 });
    }
    let result;
    let success = false;
    await mongoose.connect(connectionStr);

    if (payload.login) {
      const restaurant = await restaurantSchema
        .findOne({
          email: payload.email,
        })
        .select("+password");
      if (restaurant && restaurant.password === payload.password) {
        result = restaurant.toObject();
        success = true;
      }
    } else {
      const restaurant = new restaurantSchema({
        name: payload.name,
        email: payload.email,
        password: payload.password,
        city: payload.city,
        address: payload.address,
        contact: payload.contact,
      });
      result = (await restaurant.save()).toObject();
      if (result) {
        success = true;
      }
    }

    if (result) delete result.password;
    return NextResponse.json({ result: result ?? null, success });
  } catch {
    return NextResponse.json(
      {
        success: false,
        result: null,
        message: "Unable to complete your request. Please try again later.",
      },
      { status: 500 },
    );
  }
}
