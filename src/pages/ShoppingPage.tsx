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
          className="bg-dark"
          initialValues={{
            count: 4,
          }}
        >
          {({ reset }) => (
            <>
              <ProductImage />
              <ProductTitle className='text-white' />
              <ProductButtons className='custom-btns' />


              <button onClick={reset}>Reset</button>
            </>
          )}
        </ProductCard>

      </div>

    </div>
  )
}
