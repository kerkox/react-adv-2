import styles from "../styles/styles.module.css";

// import { useState } from "react";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from "../interfaces/interfaces";
import { ProductButtons, ProductImage, ProductTitle } from ".";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  // children?: React.ReactElement | React.ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element,
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?:number,
  initialValues?: InitialValues
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues
}: ProductCardProps) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ product, onChange, value, initialValues });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset
        })}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
