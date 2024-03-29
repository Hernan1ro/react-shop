import React from "react";
import "@styles/Header.scss";
import Menu from "@components/Menu";
import MyOrder from "@containers/MyOrder";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from "../context/AppContext";
import shoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  const [toggleOrder, setToggleOrder] = React.useState(false);

  const { state } = React.useContext(AppContext);
  const handleToggle = () => setToggle(!toggle);
  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li onClick={handleToggle} className="navbar-email">
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => {
              setToggleOrder(!toggleOrder);
            }}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : ""}
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : ""}
      {toggleOrder && <MyOrder />}
    </nav>
  );
};

export default Header;
