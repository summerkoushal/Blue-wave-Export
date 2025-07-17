import React from 'react'

export default function Certifications() {
  return (
    <div>
      <h1 style={{margin: '50px 0px 20px 0px'}} >Certifications</h1>
      <div
        style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
        className="certifications-container"
      >
        <div className="certficate-card">
          <img
            width={"100px"}
            className="certificate"
            src="certificate.png"
            alt=""
          />
          <p style={{ display: "inline" }}>APEDA</p>
        </div>
        <div className="certficate-card">
          <img className="certificate" src="certificate.png" alt="" />
          <p style={{ display: "inline" }}>FSSAI</p>
        </div>
        <div className="certficate-card">
          <img className="certificate" src="certificate.png" alt="" />
          <p style={{ display: "inline" }}>IEC</p>
        </div>
        <div className="certficate-card">
          <img className="certificate" src="certificate.png" alt="" />
          <p style={{ display: "inline" }}>Spice Board UEL</p>
        </div>
        <div className="certficate-card">
          <img className="certificate" src="certificate.png" alt="" />
          <p style={{ display: "inline" }}>Certificate</p>
        </div>
        <div className="certficate-card">
          <img className="certificate" src="certificate.png" alt="" />
          <p style={{ display: "inline" }}>Membership Certifate</p>
        </div>
        <div className="certficate-card">
          <img className="certificate" src="certificate.png" alt="" />
          <p style={{ display: "inline" }}>Rice Federation Certificate</p>
        </div>
        <div className="certficate-card">
          <img className="certificate" src="certificate.png" alt="" />
          <p style={{ display: "inline" }}>LEI Certificate</p>
        </div>
        <div className="certficate-card">
          <img className="certificate" src="certificate.png" alt="" />
          <p style={{ display: "inline" }}>UMA holder Certificate</p>
        </div>
      </div>
    </div>
  );
}
