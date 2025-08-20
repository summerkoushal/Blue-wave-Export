import React from 'react'

export default function DairyEssentails() {
  return (
    <div className="cont3">
      <div className="mb-5 text-cemnter">
        <img
          src="/productImgs/Dairy1.jpeg"
          alt="Food Grains"
          className="img-fluid rounded"
          style={{ width: "100%" }}
        />
      </div>

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-4">
          <img
            src="/productImgs/Dairy2.jpeg"
            alt="Rice"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h2 className="h4 mb-2">Farm Fresh Eggs</h2>
          <p>
            We supply farm-fresh eggs that are rich in protein and essential
            nutrients. Each egg is carefully graded and packed under hygienic
            conditions to ensure safe delivery and long shelf life.
          </p>
        </div>
      </div>
      <hr />

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-8">
          <h2 className="h4 mb-2">Original Cow Ghee</h2>
          <p>
            Cow ghee has been an integral part of Indian tradition, valued for
            its purity, flavor, and health benefits. Our ghee is prepared from
            fresh cow milk using traditional methods, ensuring rich taste and
            high nutritional value.
          </p>
        </div>
        <div className="col-md-4">
          <img
            src="/productImgs/Dairy3.jpg"
            alt="Wheat"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <hr />

      <div className="mb-5 row g-4 align-items-start">
        <div className="col-md-4">
          <img
            src="/productImgs/Dairy4.jpg"
            alt="Corn"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8">
          <h2 className="h4 mb-2">Original Buffalo Ghee</h2>
          <p>
            Buffalo ghee is widely appreciated for its thicker texture and
            distinct aroma. Our buffalo ghee is processed under strict quality
            standards, making it a premium choice for culinary as well as
            medicinal uses.
          </p>
        </div>
      </div>
    </div>
  );
}
