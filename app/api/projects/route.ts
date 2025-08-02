import { randomUUID } from "crypto";
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const file = formData.get("file") as File;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const code_url = formData.get("code_url") as string;
  const demo_url = formData.get("demo_url") as string;

  // Ambil technologies dan parse JSON-nya
  const rawTech = formData.get("technologies") as string;
  let technologies: string[];

  try {
    technologies = JSON.parse(rawTech);
    if (!Array.isArray(technologies)) throw new Error("Invalid tech array");
  } catch {
    return NextResponse.json(
      { error: "Invalid 'technologies' format. Must be JSON array." },
      { status: 400 }
    );
  }

  if (!title || !description || technologies.length === 0) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  const ext = file.name.split(".").pop();
  const fileName = `${randomUUID()}.${ext}`;
  const filePath = `projects/${fileName}`;

  console.log(filePath);

  // Upload ke Supabase Storage
  const { error: uploadError } = await supabase.storage
    .from("portfolio-images")
    .upload(filePath, await file.arrayBuffer(), {
      contentType: file.type,
    });

  if (uploadError) {
    return NextResponse.json(
      { error: "Failed to upload image", detail: uploadError.message },
      { status: 500 }
    );
  }

  // Get public URL
  const { data: urlData } = supabase.storage
    .from("portfolio-images")
    .getPublicUrl(filePath);

  const imageUrl = urlData.publicUrl;

  //   Insert data to DB
  const { error: dbError, data: projects } = await supabase
    .from("projects")
    .insert([
      {
        title,
        description,
        technologies,
        image_url: imageUrl,
        code_url,
        demo_url,
      },
    ])
    .select();

  if (dbError) {
    return NextResponse.json(
      { error: "Failed to insert data", detail: dbError.message },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { message: "Project created successfully", data: projects[0] },
    { status: 201 }
  );
}

export async function GET() {
  const res = await supabase.from("projects").select();

  return NextResponse.json(res);
}
