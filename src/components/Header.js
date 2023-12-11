import { useState } from "react";
import { LOGO_URL } from "../utils/contsants";


const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
  return  <div className="heading">
      <div className="logo-container">
      <h1 id="logo"><img src={LOGO_URL} alt="logo" /></h1>
    </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Restaurants</li>
          <li>Cart</li>
          <li><button onClick={() => {setBtnNameReact("Logout");}}>{btnNameReact}</button></li>
        </ul>
      </div>
    </div>
  };

  export default Header;