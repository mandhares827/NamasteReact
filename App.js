import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <div id="hjd"><h1 id="title">This is my title JSX!</h1></div>
);
const HeadingComponent = () => (
     <div id="container">
        <Title/>
        <h1 id="heading">This is my first JSX!</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
