import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/index'
import "../styles/custom.styles.css"
import { products } from '../data/products';
// import { useShoppingCart } from '../hooks/useShoppingCart';

const product = products[0]


export function ShoppingPage() {


  return (
    <div>
      <h1>ShoppingPage</h1>
      <div>

        <ProductCard
          key={product.id}
          product={product}
          initialValues={{
            count: 4,
          }}
        >
          {({ reset }) => (
            <>
              <ProductImage/>
              <ProductTitle/>
              <ProductButtons/>
            </>
          )}
        </ProductCard>

      </div>

    </div>
  )
}
