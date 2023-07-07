import { db } from "@/lib/db";
import { products } from "@drizzle/schema";
import { eq } from "drizzle-orm";

/**
 * Retrieves all products from the database.
 * @returns A Promise that resolves to an array of all products.
 */
export const getAllProducts = async (): Promise<Product[]> => {
  return await db.select().from(products);
}

/**
 * Retrieves a product from the database by its ID.
 * @param id The ID of the product to retrieve.
 * @returns A Promise that resolves to the product with the specified ID.
 * If nothing matches, the Promise resolves to empty array.
 */
export const getProductById = async (id: number): Promise<Product[]> => {
  return await db.select().from(products).where(eq(products.productId, id));
}

/**
 * Deletes a product from the database by its ID.
 * @param id The ID of the product to delete.
 * @returns A Promise that resolves to the number of deleted rows.
 */
export const deleteProductById = async (id: number) => {
  return await db.delete(products).where(eq(products.productId, id));
}

export const addProduct = async (productData: Omit<Product, "productId">) => {
  return await db.insert(products).values(productData);
}