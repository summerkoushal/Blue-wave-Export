import React from 'react'
import Sugar from './Sugar';
import Spices from './Spices';
import FoodGrains from './FoodGrains';
import Tea from './Tea';
import Pulses from './Pulses';
import AgroFeed from './AgroFeed';

export default function Products() {
  function showCategory(categoryName) {
    const itemArr = ['sugar', 'spices', 'foodGrains', 'tea', 'pulses', 'agroFeed'];
    const contArr = ['cont1', 'cont2', 'cont3', 'cont4', 'cont5', 'cont6'];
    for (let i = 0; i < itemArr.length; i++) {
      const liItem = document.getElementById(itemArr[i]);
      liItem.style.color = "black";
      liItem.style.fontWeight = "normal";
    }
    for (let i = 0; i < contArr.length; i++) {
      const contItem = document.getElementsByClassName(contArr[i]);
      contItem[0].style.display = "none";
    }

    const liItem = document.getElementById(categoryName);
    liItem.style.color = "var(--theme-bright)";
    liItem.style.fontWeight = "bold";

    var contName;
    if (categoryName == 'sugar') contName = 'cont1';
    if (categoryName == "spices") contName = "cont2";
    if (categoryName == "foodGrains") contName = "cont3";
    if (categoryName == "tea") contName = "cont4";
    if (categoryName == "pulses") contName = "cont5";
    if (categoryName == "agroFeed") contName = "cont6";

    const contItem = document.getElementsByClassName(contName);
    contItem[0].style.display = "block";
  }
  function downloadMSME() {
    const link = document.createElement('a');
    link.href = "MSME.pdf";
    link.download = "MSME.pdf";
    document.body.appendChild(link);
    link.click();
  }
  return (
    <div className="container prod-container">
      <div className="row">
        {/* Sidebar */}
        <aside className="col-md-3 mb-4">
          <div className="card mb-4">
            <div className="card-body">
              <ul className="list-unstyled mb-3">
                <li id="sugar" onClick={() => showCategory("sugar")}> Sugar </li>
                <li id="spices" onClick={() => showCategory("spices")}> Spices </li>
                <li id="foodGrains" onClick={() => showCategory("foodGrains")}> Food Grains </li>
                <li id="tea" onClick={() => showCategory("tea")}> Tea </li>
                <li id="pulses" onClick={() => showCategory("pulses")}> Pulses </li>
                <li id="agroFeed" onClick={() => showCategory("agroFeed")}> Agro Feed </li>
              </ul>
              <button onClick={downloadMSME} className="btn btn-outline-secondary w-100"> ⬇️ Download Brochure </button>
            </div>
          </div>
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h5 className="card-title">How Can We Help?</h5>
              <p className="card-text small"> If you need any help, please feel free to contact us. </p>
              <p className="mb-0">📞 +91 79723 34852</p>
            </div>
          </div>
        </aside>

        <main className="col-md-9">
          <Sugar />
          <Spices />
          <FoodGrains />
          <Tea />
          <Pulses />
          <AgroFeed />
        </main>
      </div>
    </div>
  );
}