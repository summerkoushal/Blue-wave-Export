import React from 'react'
import { useNavigate } from "react-router-dom";

export default function HomeAbout() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: "url('/blackyellowTriangle.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
      className="bg-light"
    >
      <div className="home-about-container container">
        <img className="home-about-img" src="pulses.jpg" alt="" />
        <div className="home-about-written">
          <h4 className="home-about-written-subheading">ABOUT</h4>
          <h2 className="home-about-written-heading">Blue Wave Exports</h2>
          <p style={{ textAlign: "justify" }}>
            Blue Wave Exports specializes in exporting a wide range of products
            to meet the diverse needs of our global customers. Our product portfolio includes
            sugar, a variety of spices such as dry red chillies, turmeric,
            coriander, and cumin seeds, as well as essential food grains like
            rice, wheat, corn, sorghum, and tea. <br /> <br />
            We export a wide range of clothing and
            apparel—casual, formal, and traditional—crafted to match
            international fashion trends. Our machinery and equipment segment
            supports industrial and agricultural sectors with reliable tools and
            technology. We also offer premium dairy products including milk,
            cheese, and yogurt, as well as finely crafted jewellery made of
            gold, silver, and precious stones.
          </p>
          <button onClick={() => { navigate("/about"); window.scrollTo(0, 0); }} className="btn btn-warning">Read More</button>
          <p className="mt-2">
            Call to ask any question <br /> <b>+91 7972334852</b>
          </p>
        </div>
      </div>
    </div>
  );
}
