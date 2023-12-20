import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const response = await fetch(url.searchParams.get("url") || "");
  const data = await response.json();

  const title = data.name;
  const content = Buffer.from(data.content, data.encoding).toString("utf-8");

  return NextResponse.json(
    {
      response: {
        title,
        content,
      },
    },
    { status: 200 }
  );
}
