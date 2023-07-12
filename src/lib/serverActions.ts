"use server"

import { revalidatePath } from "next/cache";
import { deleteProductById } from "./productMethods";

export const deleteProductHandler = async (id: number) => {
  await deleteProductById(id);
  revalidatePath('/');
}