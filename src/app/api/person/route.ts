import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({name: 'Gurman Brar!', age: 28});
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ body });
}