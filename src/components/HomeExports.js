import React from "react";

export default function HomeExports() {
  return (
    <div style={{ display: "flex",  marginBottom: '40px'  }}>
      <div
        style={{ width: "50vw", paddingTop: '40px', paddingBottom: '40px'}}
        className="container bg-light"
      >
        <h5 style={{ color: "orange" }}>Why Choose Us?</h5>
        <h2 style={{ marginBottom: "20px" }}>Exports / Imports</h2>
        <p>
          Our network is spread all over the world including India. The
          countries in which we deal are inclusive of
          .................................
        </p>
        <div
          style={{ display: "flex", justifyContent: "space-evesnly" }}
          className="export-import"
        >
          <div style={{ width: "40%", marginLeft: "30px" }}>
            <b>Exports</b> <br /> ✔ Srilanka <br /> ✔ Malaysia <br /> ✔
            Bangladesh <br /> ✔ UAE <br />
            ✔ Singapore <br /> ✔ Russia <br /> ✔ Djibouti <br />
            ✔ Benin <br /> ✔ Afghanistan
          </div>
          <div>
            <b>Imports</b> <br /> ✔ Canada <br /> ✔ Australia <br /> ✔ Myanmar{" "}
            <br /> ✔ Tanzania
          </div>
        </div>
      </div>
      <img
        style={{ width: "50vw" }}
        src="https://www.umaexports.net/images/map.png"
        alt=""
      />
    </div>
  );
}
