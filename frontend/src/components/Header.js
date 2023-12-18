import { useState } from "react";
import { LOGO_URL } from "../utils/contsants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
  return  <div className="heading">
      <div className="logo-container">
      <h1 id="logo"><img src={LOGO_URL} className="logo" alt="logo" /></h1>
    </div>
      <div className="nav-container">
        <ul>
          <li>Online status: {onlineStatus ? "Online": "Offline"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <li><button onClick={() => {btnNameReact === "Login" ? setBtnNameReact("Logout"):setBtnNameReact("Login");}}>{btnNameReact}</button></li>
        </ul>
      </div>
    </div>
  };

  export default Header;