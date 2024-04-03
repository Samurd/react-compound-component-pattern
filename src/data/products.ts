import coffe from '../assets/coffee-mug.png'
import { Product } from '../interfaces/interfaces'

const product1 = {
    id: 1,
    title: "Coffe Mug",
    img: coffe
  }
  
const product2 = {
    id: 2,
    title: "Lemon Coffe",
    img: coffe
}

export const products: Product[] = [
    product1, product2
]