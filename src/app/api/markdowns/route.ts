import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  const response = await fetch(
    "https://api.github.com/repos/GrangbelrLurain/rooftop-cat-md/contents"
  );
  const data = await response.json();

  return NextResponse.json({ response: data }, { status: 200 });
}
