import React from "react";

import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

const Home = () => {
  return (
    <div>
      <Link to={routes.products}>продукты</Link>
    </div>
  );
};

export default Home;
