import React from "react";
import ReactDOM from "react-dom/client";
import LogoImg from "./assets/images/logo.jpeg";
const resList = [
    {
        "type": "restaurant",
        "info": {
            "resId": 18742738,
            "name": "Makhan Bhog",
            "cuisines": ["abc", "xyz", "pqr"],
            "AvgRating": 4.5,
            "DeliveryTime": "30 mins"
             }   
    }, 
    {
        "type": "restaurant",
        "info": {
            "resId": 18742737,
            "name": "Makhan Bhog",
            "cuisines": ["abc", "xyz", "pqr"],
            "AvgRating": 4.5,
            "DeliveryTime": "30 mins"
             }   
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18742736,
            "name": "Makhan Bhog",
            "cuisines": ["abc", "xyz", "pqr"],
            "AvgRating": 4.5,
            "DeliveryTime": "30 mins"
             }   
    }   
   ];
const Logo = () => (
  <div className="logo-container">
    <h1 id="logo"><img src={LogoImg} alt="logo" /></h1>
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
const Heading = () => (
  <div className="heading">
    <Logo />
    <Navigation />
  </div>
);
const ReastaurantCard = (props) => {

    const {resData} = props;
    return <div className="res-card">
        <img className="res-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" alt="image" />
        <h3>{ resData.info.name }</h3>
    </div>
};
const Body = () => {
   return <div className="container">
      <h1 className="search-container">Search</h1>
      <div className="res-container">
        {resList.map((restaurant) => (<ReastaurantCard key={restaurant.info.resId} resData={restaurant} />) )}
      </div>
    </div>
};

  const Footer = () => (
    <div className="container">
      <h1 id="footer">This is my footer</h1>
    </div>
  );

const AppComponent = () => (
  <div className="container">
    <Heading />
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
