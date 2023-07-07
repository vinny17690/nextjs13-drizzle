import Link from 'next/link'
import styles from './page.module.css'
import { addProduct, getAllProducts } from '@/lib/productMethods'
import { capitalizeFirstLetter } from '@/lib/utils';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export default async function Home() {
  const products = await getAllProducts();
  console.log(products);

  const addProductToCart = async (e: FormData) => {
    "use server"
    const price = e.get('productPrice')?.toString();
    const quantity = e.get('quantity')?.toString();
    const vendorId = e.get('vendorId')?.toString();
    const productName = e.get('productName')?.toString();

    if(!price || !quantity || !vendorId || !productName) return;

    const productInfo = {
      productName: productName.toLowerCase(),
      price,
      quantity: parseInt(quantity, 10),
      vendorId: parseInt(vendorId, 10)
    }

    console.log('New Product Info: ', productInfo);

    const res = await addProduct(productInfo);
    console.log('res', res);
    revalidatePath('/');
  }

  return (
    <main className={styles.main}>
      <h4>Add Product</h4>
      <form action={addProductToCart}>
        <label htmlFor="productName">Product Name</label>
        <input type="text" name="productName" id="productName" />
        <label htmlFor="productPrice">Product Price</label>
        <input type="number" name="productPrice" id="productPrice" step="any" />
        <label htmlFor="quantity">Quantity</label>
        <input type="number" name="quantity" id="quantity" />
        <label htmlFor="vendorId">Vendor ID</label>
        <input type="number" name="vendorId" id="vendorId" />
        <button type='submit'>Add Product</button>
      </form>

      <h4>Product List</h4>
      <div className={styles.grid}>
        { products.map((product) => (
          <div key={product.productId} className={styles.card}>
            <Link href={`/products/${product.productId}`}>
              {capitalizeFirstLetter(product.productName)}
            </Link>
            <p>Product ID: {product.productId}</p>
            <p>Vendor ID: {product.vendorId}</p>
            <p>Price: ${product.price}</p>
            <p>In Stock: {product.quantity}</p>
          </div>
        )
      ) }
      </div>
    </main>
  )
}
