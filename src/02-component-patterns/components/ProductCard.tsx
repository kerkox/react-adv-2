import styles from "../styles/styles.module.css";

// import { useState } from "react";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { ProductCardProps, ProductContextProps,  } from "../interfaces/interfaces";
import { ProductButtons, ProductImage, ProductTitle } from ".";



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct(0);

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
