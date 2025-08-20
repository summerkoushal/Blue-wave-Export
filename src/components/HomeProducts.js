import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeProducts() {
  const navigate = useNavigate();
  return (
    <div className="bg-dark">
      <div className="container">
        <h5 className="home-product-subheading">What we Offer</h5>
        <h2 className="home-product-heading">Our Products</h2>
        <div className="home-products-container">
          <div className="home-product-card">
            <div style={{ display: "flex" }}>
              <img className="home-prod-img" src="/prodLogo/fruits.png" alt="" />
              <div>
                <h5>Fruits & Vegetables</h5>
                <p style={{ marginBottom: "0px" }}> Supplying fresh, naturally grown produce with timely export. </p>
              </div>
            </div>
            <button onClick={() => { navigate("/products"); window.scrollTo(0, 0); }} className="btn btn-outline-light border-0 mt-2">Learn more...</button>
          </div>
          <div className="home-product-card">
            <div style={{ display: "flex" }}>
              <img className="home-prod-img" src="/prodLogo/Leather.png" alt="" />
              <div>
                <h5>Leather Products</h5>
                <p style={{ marginBottom: "0px" }}> Premium handcrafted leather goods blending durability with elegance. </p>
              </div>
            </div>
            <button onClick={() => { navigate("/products"); window.scrollTo(0, 0); }} className="btn btn-outline-light border-0 mt-2">Learn more</button>
          </div>
          <div className="home-product-card">
            <div style={{ display: "flex" }}>
              <img className="home-prod-img" src="/prodLogo/dairy.png" alt="" />
              <div>
                <h5>Dairy Essentials</h5>
                <p style={{ marginBottom: "0px" }}> Pure, nutritious dairy products sourced from trusted farms. </p>
              </div>
            </div>
            <button onClick={() => { navigate("/products"); window.scrollTo(0, 0); }} className="btn btn-outline-light border-0 mt-2">Learn more</button>
          </div>
          <div className="home-product-card">
            <div style={{ display: "flex" }}>
              <img className="home-prod-img" src="/prodLogo/pulses.png" alt="" />
              <div>
                <h5>Pulses & Spices</h5>
                <p style={{ marginBottom: "0px" }}> Rich in flavor and nutrients, carefully processed for global markets. </p>
              </div>
            </div>
            <button onClick={() => { navigate("/products"); window.scrollTo(0, 0); }} className="btn btn-outline-light border-0 mt-2">Learn more</button>
          </div>
          <div className="home-product-card">
            <div style={{ display: "flex" }}>
              <img className="home-prod-img" src="/prodLogo/clothes.png" alt="" />
              <div>
                <h5>Clothes</h5>
                <p style={{ marginBottom: "0px" }}> Fashionable and comfortable apparel for kids, women, and men. </p>
              </div>
            </div>
            <button onClick={() => { navigate("/products"); window.scrollTo(0, 0); }} className="btn btn-outline-light border-0 mt-2">Learn more</button>
          </div>
          <div className="home-product-card">
            <div style={{ display: "flex" }}>
              <img className="home-prod-img" src="/prodLogo/jewellery.png" alt="" />
              <div>
                <h5>Jewellery</h5>
                <p style={{ marginBottom: "0px" }}> Exquisite diamond, gold jewellery with timeless appeal. </p>
              </div>
            </div>
            <button onClick={() => { navigate("/products"); window.scrollTo(0, 0); }} className="btn btn-outline-light border-0 mt-2">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}