import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";





  const Footer = () => (
    <div className="container">
      <h1 id="footer">This is my footer</h1>
    </div>
  );

const AppComponent = () => (
  <div className="container">
    <Header />
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
