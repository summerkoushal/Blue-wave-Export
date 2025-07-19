import React from "react";

const FoodGrainsPage = () => {
  return (
    <div className="container prod-grains-cont">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h2 className="prod-grains-heading">Food Grains</h2>
      </div>

      {/* Main Section */}
      <div className="row">
        {/* Sidebar */}
        <aside className="col-md-3 mb-4">
          <div className="card mb-4">
            <div className="card-body">
              <ul className="list-unstyled mb-3">
                <li>Sugar</li>
                <li>Spices</li>
                <li className="fw-bold text-warning">Food Grains</li>
                <li>Tea</li>
                <li>Pulses</li>
                <li>Agro Feed</li>
              </ul>
              <button className="btn btn-outline-secondary w-100">
                ⬇️ Download Brochure
              </button>
            </div>
          </div>

          <div className="card bg-dark text-white">
            <div className="card-body">
              <h5 className="card-title">How Can We Help?</h5>
              <p className="card-text small">
                If you need any help, please feel free to contact us.
              </p>
              <p className="mb-0">📞 +91-33-2281396/97</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-md-9">
                  
          {/* Grains Image */}
          <div className="mb-5 text-cemnter">
            <img
              src="https://www.umaexports.net/images/food_grains.jpg"
              alt="Food Grains"
              className="img-flusid roundesd"
              style={{ width: "calc(100% - 0px)", height: '500px'}}
            />
          </div>
                  
          <div className="mb-5 row g-4 align-items-start">
            <div className="col-md-4">
              <img
                src="https://www.umaexports.net/images/rice.jpg"
                alt="Rice"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <h2 className="h4 mb-2">Rice</h2>
              <p>
                Rice is the most widely consumed staple food for a large part of
                the world's human population.
              </p>
              <ul className="list-unstyled ps-3">
                <li>• Raw Rice — 5% or 20% or 25% broken or 100% broken</li>
                <li>• Parboiled Rice — 5% or 20% or 25% broken</li>
                <li>• IR64 Raw or Parboiled Rice</li>
                <li>• Swarna Masuri Rice</li>
                <li>• Basmati Rice & Non Basmati Rice</li>
                <li>
                  • We can arrange supplies of 100% clean rice by sortex machine
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-5 row g-4 align-items-start">
            <div className="col-md-8">
              <h2 className="h4 mb-2">Wheat</h2>
              <p>
                Wheat is another most important staple food consumed globally.
                It is the leading source of protein and carbohydrates. Wheat is
                easily digested and crafted into bread, cookies, and more.
                Varieties include Indian wheat and wheat flour (Atta and Maida).
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="https://www.umaexports.net/images/wheat.jpg"
                alt="Wheat"
                className="img-fluid rounded"
              />
            </div>
          </div>

          <div className="mb-5 row g-4 align-items-start">
            <div className="col-md-4">
              <img
                src="https://www.umaexports.net/images/corn.jpg"
                alt="Corn"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <h2 className="h4 mb-2">Corn</h2>
              <p>
                Corn or maize is a staple human food and also used for starch,
                popcorn, and oil. It's a major animal feed too. We offer Indian
                Corn in various varieties.
              </p>
            </div>
          </div>

          <div className="row g-4 align-items-start">
            <div className="col-md-8">
              <h2 className="h4 mb-2">Sorghum</h2>
              <p>
                Sorghum is widely used in food and industrial applications. It
                has high starch content and is offered in quality packaging.
                Popular for its taste and aroma, our sorghum is available at
                cost-effective prices.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="https://www.umaexports.net/images/sorghum.jpg"
                alt="Sorghum"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FoodGrainsPage;
