import React from "react";
import "../styles/ProductItem.scss";
import addToCart from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const [item, setItem] = React.useState([]);
  const handleClick = () => {
    setItem([]);
  };
  return (
    <div className="ProductItem">
      <img src={product.images} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleClick}>
          <img src={addToCart} alt="addToCart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
