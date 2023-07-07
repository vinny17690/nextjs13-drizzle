import Link from 'next/link'
import styles from './page.module.css'
import { getAllProducts } from '@/lib/productMethods'

export default async function Home() {
  const products = await getAllProducts();
  console.log(products);
  return (
    <main className={styles.main}>
      <h2>Main page</h2>
      { products.map((product) => (
        <div key={product.productId}>
          <Link href={`/products/${product.productId}`}>
            {product.productName}
          </Link>
        </div>
      )
      ) }
    </main>
  )
}
