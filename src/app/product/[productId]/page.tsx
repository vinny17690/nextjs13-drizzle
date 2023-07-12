import { getProductById } from "@/lib/productMethods"
import styles from '@/app/page.module.css'
import { capitalizeFirstLetter } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: 'Product Details Page',
  description: 'Find all details about a product here',
}

export default async function SingleProduct({ params } : {  params: { productId: string } }) {
  const productDetails = await getProductById(parseInt(params.productId, 10));

  if(!productDetails || productDetails.length < 1) return <h1>Product not found</h1>

  return (
    <div key={productDetails[0].productId} className={styles.card}>
      <Link href={`/product/${productDetails[0].productId}`}>
        {capitalizeFirstLetter(productDetails[0].productName)}
      </Link>
      <p>Product ID: {productDetails[0].productId}</p>
      <p>Vendor ID: {productDetails[0].vendorId}</p>
      <p>Price: ${productDetails[0].price}</p>
      <p>In Stock: {productDetails[0].quantity}</p>
    </div>
  )
}