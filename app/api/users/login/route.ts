import User from "@/models/user";
import { initilizeDatabase } from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";
import { hash } from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const hashedPassword = await hash(password, 10);

    await initilizeDatabase();
    const user = await User.findOne({ email });
    console.log(user);
    console.log(hashedPassword);
    if (!user || user.password != hashedPassword) {
      throw new Error("Incorrect Email or Password");
    }

    return NextResponse.json(user, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Error while logging in user" },
      { status: 500 }
    );
  }
}
