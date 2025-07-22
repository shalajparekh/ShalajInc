import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Purchase from "@/models/Purchase";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const data = await req.json();
    const { name, email, phone, company, cart, total } = data;
    if (!name || !email || !phone || !company || !cart || !total) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const purchase = await Purchase.create({ name, email, phone, company, cart, total });
    return NextResponse.json({ success: true, purchase });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
} 