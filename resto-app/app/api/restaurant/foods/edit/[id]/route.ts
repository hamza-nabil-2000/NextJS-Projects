import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  let success = false;
  await mongoose.connect(connectionStr);
  const result = await foodSchema.findOne({ _id: id });
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}
