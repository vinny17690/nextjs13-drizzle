"use client"

import { deleteProductHandler } from "@/lib/serverActions"
import styles from "./DeleteProductBtn.module.css"
import { useTransition } from "react";

export default function DeleteProductBtn({ productId }: { productId: number }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button className={styles.delete} onClick={
      () => startTransition(
        () => deleteProductHandler(productId)
      )
    }>{isPending ? 'Deleting...' : 'Delete'}</button>
  )
}