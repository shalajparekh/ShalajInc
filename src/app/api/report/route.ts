import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Purchase from "@/models/Purchase";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "changeme";

export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (!auth || !auth.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const token = auth.replace("Bearer ", "");
    jwt.verify(token, JWT_SECRET);
    await dbConnect();
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const purchases = await Purchase.find({
      createdAt: { $gte: start, $lt: end },
    }).sort({ createdAt: -1 });
    return NextResponse.json({ purchases });
  } catch (err) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
} 