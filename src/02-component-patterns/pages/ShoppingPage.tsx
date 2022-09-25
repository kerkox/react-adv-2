import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/product";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();
  return (
    <div>
      <h1> ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            value={shoppingCart[product.id]?.count || 0}
            className="bg-dark text-white"
            onChange={onProductCountChange}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle title={"Coffe"} className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, productInCar]) => (
          <ProductCard
            key={key}
            product={productInCar}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            value={productInCar.count}
            onChange={onProductCountChange}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle title={"Coffe"} className="text-bold" />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
