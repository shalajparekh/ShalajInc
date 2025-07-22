import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET || "changeme";

export async function POST(req: NextRequest) {
  await dbConnect();
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
  }
  let user = await User.findOne({ email });
  if (!user) {
    // For demo: create user if not exists
    const hash = await bcrypt.hash(password, 10);
    user = await User.create({ email, password: hash });
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
  const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, { expiresIn: "7d" });
  return NextResponse.json({ token });
} 