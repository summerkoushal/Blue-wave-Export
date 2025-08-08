import React from "react";
import TeamCarousel from "./TeamCarousel";
import Certifications from "./Certifications";
import Associates from "./Associates";

export default function AboutUs() {
  return (
    <>
      <div className="aboutus-container1">
        <img className="aboutus-img" src="/pulses.jpg" />
        <div className="aboutus-text-container">
          <h4 className="aboutus-text-subheading">ABOUT</h4>
          <h2 className="aboutus-text-heading">Blue wave Exports</h2>
          <div
            className="bg-warning"
            style={{ width: "3.5rem", height: "4px", marginBottom: "10px" }}
          />
          <i>
            {" "}
            Blue Wave Exports specializes in exporting a wide range of products
            to meet the diverse needs of our global customers. Our company is
            actively engaged in the trading and marketing of high-quality
            agricultural produce and commodities. Our product portfolio includes
            sugar, a variety of spices such as dry red chillies, turmeric,
            coriander, and cumin seeds, as well as essential food grains like
            rice, wheat, corn, sorghum, and tea. <br /> <br/>
            In addition to our core exports, we also deal in pulses and
            agricultural feed products such as soybean meal and rice bran
            de-oiled cake, widely used in the livestock and poultry industry.
            Our portfolio further includes fresh and frozen fruits and
            vegetables, leather goods like handbags, belts, and shoes, as well
            as daily essentials and personal care items catering to global
            consumer needs. We export a wide range of clothing and
            apparel—casual, formal, and traditional—crafted to match
            international fashion trends. Our machinery and equipment segment
            supports industrial and agricultural sectors with reliable tools and
            technology. We also offer premium dairy products including milk,
            cheese, and yogurt, as well as finely crafted jewellery made of
            gold, silver, and precious stones.{" "}
          </i>
        </div>
      </div>
      <div className="aboutus-container2">
        <div
          style={{ position: "relative" }}
          className="missionVision-container"
        >
          <img
            style={{
              position: "absolute",
              top: "-48px",
              left: "70%",
              height: "100px",
            }}
            src="paperPin.png"
            alt=""
          />
          <div style={{ zIndex: "2" }} className="aboutus-vision">
            <img className="aboutus-vision-img" src="vision.png" alt="vision" />
            <h4 className="aboutus-missionvision-subheading">Vision</h4>
            <p>
              {" "}
              Being a global entity in the field of International Trade , our
              vision is to provide a reliable market and fair prices for
              commodities to our customers. To deliver high quality products in
              time, consistently through a customer centric approach. With a
              vision to grow, commitment to perform and excellence to delivering
              the very best and to be the strongest link between suppliers and
              consumers globally. We aim to enlarge our capability continuously
              in the value chain and to be most preferred player with commitment
              to quality, safety, environment, cost economics and delivering.{" "}
            </p>
          </div>
          <div style={{ zIndex: "2" }} className="aboutus-mission">
            <img
              className="aboutus-mission-img"
              src="mission.png"
              alt="mission"
            />
            <h4 className="aboutus-missionvision-subheading">Mission</h4>
            <p>
              {" "}
              While holding a deep respect for all individuals inside and
              outside the company and the community at large, the company lays
              down its mission statement : <br /> <br /> To make, distribute and
              sell the finest quality of products and promote business practices
              that respect the Earth and the Environment.
              <br /> <br />
              Regularly evaluate and improve our capabilities by investing in
              training and thereby responding to changing client needs.
              <br />
              <br />
              To imbibe, practice & maintain the quality of products at the apex
              of its purity, originality, contamination free standards at all
              analytical parameters of its best quality.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <h4 className="aboutus-carousel-subheading">Team member</h4>
        <h2 className="aboutus-carousel-heading">Management Team</h2>
        <p>
          {" "}
          The management of “Blue Wave Export” group of companies represent the wisdom,
          experience and tact of the old along with the energetic efficiency of
          the young.{" "}
        </p>
        <TeamCarousel />
        <Certifications />
        <Associates />
      </div>
    </>
  );
}