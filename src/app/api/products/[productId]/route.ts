import { getProductById, deleteProductById } from "@/lib/productMethods";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { productId: string } }) {
  return NextResponse.json(await getProductById(parseInt(params.productId)));
}

export async function DELETE(_: Request, { params }: { params: { productId: string } }) {
  const result = await deleteProductById(parseInt(params.productId));
  if(result[0].affectedRows < 1) {
    return NextResponse.json({ error: 'No product found' });
  } else {
    return NextResponse.json({ success: true, message: `Product with id ${params.productId} was deleted!` });
  }
}