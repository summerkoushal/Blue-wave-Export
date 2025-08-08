import React from "react";
import HomeAbout from "./HomeAbout";
import HomeExports from "./HomeExports";
import HomeProducts from "./HomeProducts";

export default function Home() {
  return (
    <>
      <div className="home-main-container">
        <img
          className="home-main-img"
          src="https://www.umaexports.net/images/slides/1.jpg"
          alt="Home"
        />
        <div className="home-main-text-container">
          <p className="home-main-text">- Blue Wave Exports -</p>
          <button className="btn btn-primary home-main-btn">
            Our Products
          </button>
        </div>
      </div>
      <HomeAbout />
      <HomeExports />
      <HomeProducts />
    </>
  );
}
