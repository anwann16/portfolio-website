import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name } = await req.json();

  if (!name) {
    return NextResponse.json({ message: "Field can't empty" }, { status: 400 });
  }

  const { data: category, error } = await supabase
    .from("category")
    .insert([{ name }])
    .select();

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json(
    {
      message: "Successfully insert category",
      data: category,
    },
    {
      status: 201,
    }
  );
}

export async function GET() {
  const { data: categories, error } = await supabase
    .from("category")
    .select("*");

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json(
    {
      message: "Successfully get all categories",
      data: categories,
    },
    { status: 200 }
  );
}
