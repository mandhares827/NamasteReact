import React from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/contsants";

const Logo = () => (
    <div className="logo-container">
      <h1 id="logo"><img src={LOGO_URL} alt="logo" /></h1>
    </div>
  );
  const Navigation = () => (
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Restaurants</li>
          <li>Cart</li>
        </ul>
      </div>
    );
  const Header = () => (
    <div className="heading">
      <Logo />
      <Navigation />
    </div>
  );

  export default Header;