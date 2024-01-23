import React from "react";
import Profile from "./components/Profile";
import Product from "./components/Product";
import "./App.css";

function App() {
    return (
        <>
            <Product
                name="Air Fryer K2000"
                description="The best air fryer to fry all things, even Mars bars"
                price={2000}
            />
            <Product
                name="Electric Whisk"
                description="The best electric whisk to mix things, even Mars bars"
                price={50}
            />
        </>
    );
}

export default App;
