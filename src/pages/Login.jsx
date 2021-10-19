import React from "react";
import "../styles/Login.scss";
import logoYardSale from "@logos/logo_yard_sale.svg";

const Login = () => {
  const form = React.useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const usuario = {
      name: formData.get("email"),
      email: formData.get("password"),
    };
    console.log(usuario);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logoYardSale} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="platzi@example.cm"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <input
            onClick={handleSubmit}
            type="submit"
            value="Log in"
            className="primary-button login-button"
          />
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
