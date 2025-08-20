import React from 'react'

export default function Clothes() {
  return (
    <div className="cont5">
      <div className="mb-5 text-cemnter">
        <img
          src="/productImgs/Clothes3.jpeg"
          alt="Food Grains"
          className="img-fluid rounded"
          style={{ width: "100%" }}
        />
      </div>

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-4">
          <img
            src="/productImgs/Clothes4.jpeg"
            alt="Rice"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h2 className="h4 mb-2">Kids Wear</h2>
          <p>
            Our kids wear collection is designed with comfort, safety, and style
            in mind. Made from soft, skin-friendly fabrics, these clothes ensure
            ease of movement and long-lasting wear. We offer a wide variety of
            designs, from casual daily wear to festive outfits, keeping both
            global fashion trends and traditional styles in mind. Each piece is
            crafted to provide durability while maintaining a vibrant and
            playful look for children.
          </p>
        </div>
      </div>
      <hr />

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-8">
          <h2 className="h4 mb-2">Women Wear</h2>
          <p>
            Our women wear range reflects elegance, comfort, and contemporary
            fashion. From traditional attire to modern outfits, each garment is
            made with premium fabrics and fine tailoring. We offer sarees,
            suits, dresses, tops, and more, catering to the diverse preferences
            of international clients. Our designs combine style with
            functionality, making them suitable for daily use as well as special
            occasions.
          </p>
        </div>
        <div className="col-md-4">
          <img
            src="/productImgs/Clothes1.jpeg"
            alt="Wheat"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <hr />

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-4">
          <img
            src="/productImgs/Clothes2.jpeg"
            alt="Corn"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h2 className="h4 mb-2">Men Wear</h2>
          <p>
            Our men wear collection is tailored to meet both formal and casual
            fashion needs. We supply shirts, trousers, suits, ethnic wear, and
            casual outfits crafted with high-quality fabrics. Each product is
            designed for durability, comfort, and modern appeal, ensuring it
            meets international fashion standards. Our men's clothing range is
            popular among global buyers for its versatility and premium finish.
          </p>
        </div>
      </div>
    </div>
  );
}
