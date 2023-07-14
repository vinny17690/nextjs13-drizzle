"use client"

import { deleteProductHandler } from "@/lib/serverActions"
import { useTransition } from "react";
import Button from "@mui/material/Button"
import DeleteIcon from '@mui/icons-material/Delete';

export default function DeleteProductBtn({ productId }: { productId: number }) {
  const [isPending, startTransition] = useTransition();
  return (
    <Button
      sx={{ margin: 2 }}
      variant="contained"
      startIcon={<DeleteIcon />}
      onClick={
      () => startTransition(
        () => deleteProductHandler(productId)
      )
    }>
      {isPending ? 'Deleting...' : 'Delete'}
    </Button>
  )
}