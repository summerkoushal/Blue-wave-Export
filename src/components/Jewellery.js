import React from "react";

export default function Jewellery() {
  return (
    <div className="cont7">
      <div className="mb-5 text-cemnter">
        <img
          src="/productImgs/Jewellery4.jpeg"
          alt="Food Grains"
          className="img-fluid rounded"
          style={{ width: "100%" }}
        />
      </div>

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-4">
          <img
            src="/productImgs/Jewellery6.jpg"
            alt="Rice"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h2 className="h4 mb-2">Diamond Jewellery</h2>
          <p>
            We export high-quality diamond jewellery crafted with elegance and
            precision. Each piece reflects timeless beauty and international
            design standards.
          </p>
        </div>
      </div>
      <hr />

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-8">
          <h2 className="h4 mb-2">Gold Jewellery</h2>
          <p>
            Our gold jewellery collection includes intricately designed
            ornaments that represent both tradition and luxury. Pure gold
            craftsmanship makes it highly desirable in global markets.
          </p>
        </div>
        <div className="col-md-4">
          <img
            src="/productImgs/Jewellery2.jpeg"
            alt="Wheat"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <hr />

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-4">
          <img
            src="/productImgs/Jewellery1.jpeg"
            alt="Corn"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h2 className="h4 mb-2">Imitation Jewellery</h2>
          <p>
            Imitation jewellery is a stylish and affordable alternative to
            precious ornaments. We offer a wide range of trendy designs crafted
            from high-quality materials, ensuring durability and elegance.
          </p>
        </div>
      </div>
    </div>
  );
}
