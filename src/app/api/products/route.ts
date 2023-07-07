import { addProduct, getAllProducts } from "@/lib/productMethods";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(await getAllProducts());
}

export async function POST(request: Request) {
  const body = await request?.json();
  if (!body || Object.keys(body).length === 0) {
    return NextResponse.json({ error: 'No body found' }, { status: 500 });
  }

  // Get product data from body
  const { vendorId, productName, price, quantity } = body;
  return NextResponse.json(await addProduct({vendorId, productName, price, quantity}));
}