import React from "react";
import Cards from "./Cards";

const Home = () => {
  return (
    <div>
      <h1 className='container-fluid d-flex justify-content-center'>
        Welcome to our website!
      </h1>
      <Cards />
    </div>
  );
};

export default Home;
