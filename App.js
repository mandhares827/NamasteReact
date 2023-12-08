import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <div id="title"><h1 id="h1tag">This is my title JSX!</h1></div>
);
const HeadingComponent = () => (
     <div id="container">
        <Title/>
        <h1 id="heading">This is my first JSX!</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
