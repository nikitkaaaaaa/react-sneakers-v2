import React from "react";

import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import BestOffers from "./bestOffers/BestOffers";
import ProductsOffered from "./productsOffered/ProductsOffered";
import Brands from "./brands/Brands";
import { useGetProductsQuery } from "../../api/productsApi/productsApi";
import Loading from "../../componets/loading/Loading";
import ProductDay from "./productDay/ProductDay";
import Reviews from "./reviews/Reviews";
import ProductsNike from "./productsNike/ProductsNike";
import banner from "../../assets/png/banner.png";

const Home = () => {
  const { isLoading, data: products = [] } = useGetProductsQuery({});

  if (isLoading) return <Loading />;

  return (
    <div>
      {/* <Link to={routes.products}>продукты</Link> */}
      {/* Баннер */}
      <Link
        to={routes.product.replace(":id", "43")}
        onClick={() => {
          window.scrollTo({ top: 0 });
        }}
      >
        <div
          style={{ backgroundImage: `url(${banner})` }}
          className=" h-[490px] bg-cover bg-center mb-16"
        ></div>
      </Link>
      {/* Баннер */}

      <div className="container">
        <BestOffers products={products} />
      </div>
      <hr className="my-16" />
      <div className="container">
        <ProductsOffered />
      </div>
      <hr className="my-16" />
      <div className="container">
        <ProductsNike products={products} />
      </div>
      <hr className="my-16" />
      <div className="container">
        <Brands />
      </div>
      <hr className="my-16" />
      <div className="container">
        <ProductDay product={products} />
      </div>
      <hr className="my-16" />
      <div className="container">
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
