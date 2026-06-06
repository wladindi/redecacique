import { NextRequest, NextResponse } from "next/server";
import { news } from "@/data/news";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const limit = parseInt(searchParams.get("limit") ?? "10");

  let result = [...news];
  if (category) result = result.filter((n) => n.category === category);
  result = result.slice(0, limit);

  return NextResponse.json(
    { data: result, total: result.length },
    {
      headers: {
        "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1200",
      },
    }
  );
}
