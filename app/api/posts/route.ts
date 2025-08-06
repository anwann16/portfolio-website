import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title, excerpt, content, image_url, category } = await req.json();

  if (!title || !category) {
    return NextResponse.json(
      { message: "please fill title and category" },
      { status: 400 }
    );
  }

  const { data: posts, error } = await supabase
    .from("posts")
    .insert([
      {
        title,
        excerpt,
        content,
        image_url,
        category,
      },
    ])
    .select();

  if (error) {
    return NextResponse.json({ message: "Insert failed" }, { status: 400 });
  }

  return NextResponse.json(
    { message: "Successfully insert new post", data: posts },
    { status: 200 }
  );
}

export async function GET() {
  const { data: posts, error } = await supabase.from("posts").select(`
    id,
    title,
    excerpt,
    content,
    image_url,
    created_at,
    category (
      id,
      name,
      created_at
    )
  `);

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json(
    { message: "Successfully get all post", data: posts },
    { status: 200 }
  );
}
