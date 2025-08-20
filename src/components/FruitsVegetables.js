import React from 'react'

export default function FruitsVegetables() {
  return (
    <div className="cont1">
      <div className="mb-5 text-cemnter">
        <img
          src="/productImgs/fruits&Vegetables4.jpeg"
          alt="Food Grains"
          className="img-fluid rounded"
          style={{ width: "100%" }}
        />
      </div>

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-4">
          <img
            src="/productImgs/fruits&Vegetables5.jpg"
            alt="Rice"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h2 className="h4 mb-2">Onion</h2>
          <p>
            Onion is one of the most widely consumed vegetables across the
            world, used as a base ingredient in countless cuisines. We procure
            fresh and high-quality onions directly from trusted farmers to
            ensure superior taste and long shelf life. Our onions are carefully
            graded, cleaned, and packed to retain their natural freshness during
            export.
          </p>
        </div>
      </div>
      <hr />

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-8">
          <h2 className="h4 mb-2">Custard Apple</h2>
          <p>
            Custard apple, also known as “Sitaphal,” is a tropical fruit loved
            for its creamy sweetness and rich nutritional value. We source
            naturally ripened custard apples that are grown in fertile regions
            of India. Hygienically handled and packed, these fruits are exported
            with complete care to maintain their natural flavor and freshness.
          </p>
        </div>
        <div className="col-md-4">
          <img
            src="/productImgs/fruits&Vegetables1.jpeg"
            alt="Wheat"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
}
