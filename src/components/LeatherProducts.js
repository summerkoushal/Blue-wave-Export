import React from 'react'

export default function LeatherProducts() {
  return (
    <div className="cont2">
      <div className="mb-5 text-cemnter">
        <img
          src="/productImgs/LeatherProduct7.jpeg"
          alt="Food Grains"
          className="img-fluid rounded"
          style={{ width: "100%" }}
        />
      </div>

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-4">
          <img
            src="/productImgs/LeatherProduct1.jpeg"
            alt="Rice"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h2 className="h4 mb-2">Leather Bags</h2>
          <p>
            Our leather bags are crafted with premium quality leather and fine
            workmanship. Designed to combine style with durability, these bags
            are spacious, elegant, and suitable for both casual and professional
            use. We offer a wide range of designs and can also provide
            customized options as per client requirements.
          </p>
        </div>
      </div>
      <hr />

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-8">
          <h2 className="h4 mb-2">Leather Wallet</h2>
          <p>
            Leather wallets from our collection are known for their sleek
            design, durability, and functionality. Made from genuine leather,
            they are stylish yet practical, offering multiple compartments for
            everyday use. These wallets are in high demand across global markets
            for their quality and long-lasting appeal.
          </p>
        </div>
        <div className="col-md-4">
          <img
            src="/productImgs/LeatherProduct6.jpeg"
            alt="Wheat"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <hr />

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-4">
          <img
            src="/productImgs/LeatherProduct8.jpeg"
            alt="Corn"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h2 className="h4 mb-2">Leather Belts</h2>
          <p>
            Our leather belts are designed with precision, ensuring strength,
            durability, and timeless style. Available in both formal and casual
            designs, these belts are made from top-grade leather that guarantees
            long-lasting use. They are crafted to suit diverse customer
            preferences and international fashion trends.
          </p>
        </div>
      </div>
    </div>
  );
}
