import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { PorductCardHOCProps } from "../interfaces/interfaces";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";


export const ProductCard: PorductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons
});

export default ProductCard;
