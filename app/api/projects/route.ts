import { supabase } from "@/lib/supabase";

export async function POST(request: Request, res: Response) {
  const body = await request.json();
  const { title, description, technologies, image_url } = body;
  const { error, data } = await supabase
    .from("projects")
    .insert([{ title, description, technologies, image_url }]);

  if (error) {
    console.log(error);
    return new Response("error insert data", { status: 400 });
  }

  return new Response("Success", { status: 200 });
}

export async function GET() {
  const res = await supabase.from("projects").select();

  console.log(res);
  return Response.json(res);
}
