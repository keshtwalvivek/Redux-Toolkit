import React from "react";
import Product from "../component/Product";

const Home = () => {
  return (
    <div>
      <h1 className=" text-center text-3xl mt-6 font-bold">
        Welcome to Redux Store
      </h1>
      <Product />
    </div>
  );
};

export default Home;
