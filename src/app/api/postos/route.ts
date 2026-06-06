import { NextRequest, NextResponse } from "next/server";
import { stations } from "@/data/stations";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const search = searchParams.get("search");
  const hasConvenience = searchParams.get("hasConvenience") === "true";
  const hasLubrificants = searchParams.get("hasLubrificants") === "true";

  let result = stations.filter((s) => s.isActive);

  if (city) result = result.filter((s) => s.city.toLowerCase() === city.toLowerCase());
  if (search) {
    const q = search.toLowerCase();
    result = result.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.city.toLowerCase().includes(q) ||
        s.address.toLowerCase().includes(q)
    );
  }
  if (hasConvenience) result = result.filter((s) => s.hasConvenience);
  if (hasLubrificants) result = result.filter((s) => s.hasLubrificants);

  return NextResponse.json(
    { data: result, total: result.length },
    {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    }
  );
}
