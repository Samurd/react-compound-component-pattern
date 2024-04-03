import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/index'
import "../styles/custom.styles.css"
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';


export function ShoppingPage() {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <div style={{ display: 'flex', gap: "5px" }}>

        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage />
            <ProductTitle className='text-white' />
            <ProductButtons className='custom-btns' />
          </ProductCard>
        ))}

      </div>

      {/* --- SHOPPING CART --- */}

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark"
            style={{ width: "100px" }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage />
            <ProductTitle className='text-white' />
            <ProductButtons className='custom-btns' />
          </ProductCard>
        ))}
      </div>
    </div>
  )
}
