import React from "react";

export default function HomeExports() {
  return (
    <div className="home-export-container">
      <div className="home-export-text container">
        <h5 className="home-export-text-subheading">Why Choose Us?</h5>
        <h2 className="home-export-text-heading">Exports / Imports</h2>
        <p>
          {" "}
          Our network is spread all over the world including India. The
          countries in which we deal are inclusive of
          ............{" "}
        </p>
        <div style={{ display: "flex" }}>
          <div style={{ width: "40%", marginLeft: "30px" }}>
            <b>Why Blue Wave</b>
            <br /> ✔ Wide range of products
            <br /> ✔ Competitive pricing
            <br /> ✔ Timely delivery
            <br /> ✔ B2B Expertise
            <br /> ✔ Quality assurance
            <br /> ✔ Excellent customer service
            <br /> ✔ Global Sourcing & Distribution
            <br /> ✔ Customer-Centric Approach
          </div>
          <div>
            <b>Partner Benefits</b>
            <br /> ✔ Export/Import Solutions
            <br /> ✔ Bulk Supply
            <br /> ✔ Custom Packaging
            <br /> ✔ Strong Logistics
            <br /> ✔ Trusted Network
            <br /> ✔ Quality & Compliance
            <br /> ✔ Partnership Focus
          </div>
        </div>
      </div>
      <img
        className="home-export-img"
        src="https://www.umaexports.net/images/map.png"
        alt=""
      />
    </div>
  );
}
