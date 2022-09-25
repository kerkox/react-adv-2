import styles from "../styles/styles.module.css";

// import { useState } from "react";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import {
  onChangeArgs,
  Product,
  ProductContextProps,
} from "../interfaces/interfaces";
import { ProductButtons, ProductImage, ProductTitle } from ".";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?:number
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct({ product, onChange, value });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
