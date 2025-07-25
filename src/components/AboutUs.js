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
          <h4 className="aboutus-text-subheading">About</h4>
          <h2 className="aboutus-text-heading">Blue wave Exports</h2>
          <i> alias omnis, deserunt cupiditate atque eligendi officia perferendislaboriosam voluptatem, libero reprehenderit quis vitae iusto, aliquam nisi odit Necessitatibus, odio rerum? Minima facere tenetur, adipisci vel autem molestiae ex iste maiores. Praesentium, illum quae quia, Voluptates tempora veritatis, nobis nemo dolorum molestiae quidem aspernatur odit labore nihil! Hic totam impedit, alias nemo cumque odit minus rerum quisquam tempore corrupti ut labore, voluptate corporis incidunt dolor quas tenetur eum dolorem possimus nostrum. similique nemo eaque adipisci, velit eum excepturi dolorum dolores obcaecati voluptatum voluptates pariatur ad maxime tenetur. Quisquam Labore minus perferendis dolor, omnis quo ipsum harum aspernatur eos aliquam natus eligendi in similique atque dolorum eius. Sequi maiores, sit commodi facere nisi doloremque quibusdam voluptate, illo, ut eos recusandae rerum. Magni neque deserunt dolor autem, architecto officiis harum maiores quas eos, similique ab vitae quae. Vitae distinctio nemo minima voluptas a nisi sed quas nostrum quasi odio, laboriosam sint unde nihil repellat corporis debitis eius veritatis dolorum? Laboriosam pariatur, quas consequatur ex quibusdam expedita harum quidem deleniti magnam amet enim, odit illum cupiditate dolorem sed dicta. Vitae distinctio nemo minima voluptas a nisi? </i>
        </div>
      </div>
      <div className="aboutus-container2">
        <div style={{ position: "relative" }} className="missionVision-container" >
          <video src="missionvisionvid.mp4" autoPlay alt="" muted loop style={{ position: "absolute", top: "0px", left: "0px", height: "100%", width: "100%", objectFit: "cover", zIndex: "1", filter: "brightness(1.05) contrast(.75)", }} > </video>
          <div style={{ zIndex: "2" }} className="aboutus-vision">
            <img className="aboutus-vision-img" src="vision.png" alt="vision" />
            <h4 className="aboutus-missionvision-subheading">Vision</h4>
            <p> Being a global entity in the field of International Trade , our vision is to provide a reliable market and fair prices for commodities to our customers. To deliver high quality products in time, consistently through a customer centric approach. With a vision to grow, commitment to perform and excellence to delivering the very best and to be the strongest link between suppliers and consumers globally. We aim to enlarge our capability continuously in the value chain and to be most preferred player with commitment to quality, safety, environment, cost economics and delivering. </p>
          </div>
          <div style={{ zIndex: "2" }} className="aboutus-mission">
            <img className="aboutus-mission-img" src="mission.png" alt="mission" />
            <h4 className="aboutus-missionvision-subheading">Mission</h4>
            <p> While holding a deep respect for all individuals inside and outside the company and the community at large, the company lays down its mission statement : <br /> <br /> To make, distribute and sell the finest quality of products and promote business practices that respect the Earth and the Environment.
              <br /> <br />
              Regularly evaluate and improve our capabilities by investing in training and thereby responding to changing client needs.
              <br /><br />
              To imbibe, practice & maintain the quality of products at the apex of its purity, originality, contamination free standards at all analytical parameters of its best quality.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <h4 className="aboutus-carousel-subheading">Team member</h4>
        <h2 className="aboutus-carousel-heading">Management Team</h2>
        <p> The management of “UMA” group of companies represent the wisdom, experience and tact of the old along with the energetic efficiency of the young. </p>
        <TeamCarousel />
        <Certifications />
        <Associates />
      </div>
    </>
  );
}