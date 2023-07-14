import Link from 'next/link'
import styles from './page.module.css'
import { addProduct, getAllProducts } from '@/lib/productMethods'
import { capitalizeFirstLetter } from '@/lib/utils';
import { revalidatePath } from 'next/cache';
import { getAllVendorNameAndIds } from '@/lib/vendorMethods';
import DeleteProductBtn from '../components/DeleteProductBtn/DeleteProductBtn';
import { Button, Card, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default async function Home() {
  const products = await getAllProducts();
  const vendorIds = await getAllVendorNameAndIds();

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

    await addProduct(productInfo);
    revalidatePath('/');
  }

  return (
    <main className={styles.main}>
      <div className={styles.productList}>
        <h4 className={styles.stickyTitle}>Product List</h4>
        <div className={styles.productGrid}>
          { products.map((product) => (
              <Card sx={{
                minWidth: 275,
                padding: 4, 
                transition: 'transform 0.2s',
                '&:hover': {transform: 'scale(1.05)'} 
                }} 
                key={product.productId}
                variant="outlined"
              >
                <Typography sx={{
                  cursor: 'pointer',
                  fontSize: 20,
                  fontWeight: 600,
                  marginBottom: 1,
                  letterSpacing: 0.5,
                  textTransform: 'uppercase',
                  textDecoration: 'underline',
                 }}>
                  <Link href={`/product/${product.productId}`} className={styles.title}>
                    {capitalizeFirstLetter(product.productName)}
                  </Link>
                </Typography>
                  <Typography>
                    Product ID: {product.productId}
                  </Typography>
                  <Typography>
                    Vendor ID: {product.vendorId}
                  </Typography>
                  <Typography>
                    Price: ${product.price}
                  </Typography>
                  <Typography>
                    In Stock: {product.quantity}
                  </Typography>
                <DeleteProductBtn productId={product.productId}/>
              </Card>
            ))
          }
        </div>
      </div>

      <div className={styles.addProductForm}>
        <h4>Add Product</h4>
        <form action={addProductToCart}>
          <label htmlFor="productName">Product Name</label>
          <input type="text" name="productName" id="productName" />
          <label htmlFor="productPrice">Product Price</label>
          <input type="number" name="productPrice" id="productPrice" step="any" />
          <label htmlFor="quantity">Quantity</label>
          <input type="number" name="quantity" id="quantity" />
          <label htmlFor="vendorId">Vendor</label>
          <select name="vendorId" id="vendorId">
            {vendorIds.map(({vendorId, vendorName}) => (
              <option key={vendorId} value={vendorId}>{`${vendorName} (${vendorId})`}</option>
            ))}
          </select>
          <Button
            endIcon={<AddCircleIcon />}
            sx={{
              marginTop: 3,
              marginBottom: 3,
              paddingTop: 1.25,
              paddingBottom: 1.25
            }}
            type="submit"
            variant="contained"
          >
            Add Product
          </Button>
        </form>
      </div>
    </main>
  )
}
