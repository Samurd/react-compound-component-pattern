import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { CSSProperties, ReactElement, createContext} from 'react'
import { Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces'

export interface Props {
    product: Product
    children?: ReactElement | ReactElement[]
    className?: string
    style?: CSSProperties
    onChange?:(args: onChangeArgs) => void
    value?: number
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style , onChange, value}: Props) => {
    const { count, increaseBy } = useProduct({onChange, product, value});

    return (
        <Provider value={{
            count,
            increaseBy,
            product
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>

                {children}
                {/* <ProductImage img={coffe} />

            <ProductTitle title='Coffee Mug' />

            <ProductButtons count={count} increaseBy={increaseBy} /> */}
            </div>
        </Provider>
    )
}

