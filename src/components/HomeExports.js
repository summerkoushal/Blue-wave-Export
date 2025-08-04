import React from "react";

export default function HomeExports() {
  return (
    <div className="home-export-container">
      <div className="home-export-text container">
        <h5 className="home-export-text-subheading">Why Choose Us?</h5>
        <h2 className="home-export-text-heading">Exports / Imports</h2>
        <p> Our network is spread all over the world including India. The countries in which we deal are inclusive of ................................. </p>
        <div style={{ display: "flex" }} >
          <div style={{ width: "40%", marginLeft: "30px" }}>
            <b>Exports</b>
            <br /> ✔ Srilanka
            <br /> ✔ Malaysia
            <br /> ✔ Bangladesh
            <br /> ✔ UAE
            <br /> ✔ Singapore
            <br /> ✔ Russia
            <br /> ✔ Djibouti
            <br /> ✔ Benin
            <br /> ✔ Afghanistan
          </div>
          <div>
            <b>Imports</b>
            <br /> ✔ Canada
            <br /> ✔ Australia
            <br /> ✔ Myanmar
            <br /> ✔ Tanzania
          </div>
        </div>
      </div>
      <img className="home-export-img" src="https://www.umaexports.net/images/map.png" alt="" />
    </div>
  );
}
