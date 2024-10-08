import React from "react";

import "../app/global.css";
import Header from "../componets/header/Header";
import Products from "../pages/Products/Products";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Products />
      </div>
    </div>
  );
};

export default App;
