import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setshoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setshoppingCart((oldSHoppingCard) => {
      const productInCard: ProductInCart = oldSHoppingCard[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCard.count + count, 0) > 0) {
        productInCard.count += count;
        return {
          ...oldSHoppingCard,
          [product.id]: productInCard,
        };
      }

      // Delete the product
      const { [product.id]: toDelete, ...rest } = oldSHoppingCard;
      if (productInCard.count == 0) {
        alert("This product is already on cero");
      }
      return rest;

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldSHoppingCard
      //   return rest
      // }
      // return {
      //   ...oldSHoppingCard,
      //   [product.id]: { ...product, count }
      // }
    });
  };

  return {
    shoppingCart,
    setshoppingCart,
    onProductCountChange,
  };
};
