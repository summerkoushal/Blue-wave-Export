import React from 'react'

export default function Machineries() {
  return (
    <div className="cont6">
      <div className="mb-5 text-cemnter">
        <img
          src="/productImgs/Machinery2.jpeg"
          alt="Food Grains"
          className="img-fluid rounded"
          style={{ width: "100%" }}
        />
      </div>

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-4">
          <img
            src="/productImgs/Machinery1.jpeg"
            alt="Rice"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h2 className="h4 mb-2">Purifying Machine</h2>
          <p>
            Our purifying machines are built with advanced technology for
            reliable water and air purification. They are efficient, durable,
            and meet international safety standards.
          </p>
        </div>
      </div>
      <hr />

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-8">
          <h2 className="h4 mb-2">Agro Usable Machine</h2>
          <p>
            We supply a wide range of agricultural machines designed to improve
            farming efficiency. These machines are robust, easy to operate, and
            ideal for large-scale as well as small-scale farmers.
          </p>
        </div>
        <div className="col-md-4">
          <img
            src="/productImgs/Machinery3.jpeg"
            alt="Wheat"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <hr />

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-4">
          <img
            src="/productImgs/Machinery2.jpeg"
            alt="Corn"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h2 className="h4 mb-2">Weight Machine</h2>
          <p>
            Our weight machines are highly accurate, durable, and suitable for
            industrial, commercial, and household use. With modern design and
            precision, they serve varied weighing requirements.
          </p>
        </div>
      </div>
    </div>
  );
}
