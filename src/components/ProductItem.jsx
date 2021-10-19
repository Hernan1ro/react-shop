import React from "react";
import AppContext from "../context/AppContext";
import "../styles/ProductItem.scss";
import addToCartImg from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart } = React.useContext(AppContext);
  const handleCart = (item) => {
    addToCart(item);
  };
  return (
    <div className="ProductItem">
      <img src={product.images} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure
          onClick={() => {
            handleCart(product);
          }}
        >
          <img src={addToCartImg} alt="addToCart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
