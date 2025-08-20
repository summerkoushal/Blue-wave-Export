import React from 'react'
import FruitsVegetables from './FruitsVegetables';
import LeatherProducts from './LeatherProducts';
import DairyEssentails from './DairyEssentails';
import PulsesSpices from './PulsesSpices';
import Clothes from './Clothes';
import Machineries from './Machineries';
import Jewellery from './Jewellery';

export default function Products() {
  function showCategory(categoryName) {
    const itemArr = [
      "FruitsVegetables",
      "LeatherProducts",
      "DairyEssentails",
      "PulsesSpices",
      "Clothes",
      "Machineries",
      "Jewellery",
    ];
    const contArr = ['cont1', 'cont2', 'cont3', 'cont4', 'cont5', 'cont6', 'cont7'];
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
    if (categoryName == 'FruitsVegetables') contName = 'cont1';
    if (categoryName == "LeatherProducts") contName = "cont2";
    if (categoryName == "DairyEssentails") contName = "cont3";
    if (categoryName == "PulsesSpices") contName = "cont4";
    if (categoryName == "Clothes") contName = "cont5";
    if (categoryName == "Machineries") contName = "cont6";
    if (categoryName == "Jewellery") contName = "cont7";

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
                <li id="FruitsVegetables" onClick={() => showCategory("FruitsVegetables")}> Fruits & Vegetables </li>
                <li id="LeatherProducts" onClick={() => showCategory("LeatherProducts")}> Leather Products </li>
                <li id="DairyEssentails" onClick={() => showCategory("DairyEssentails")}> Dairy Essentials </li>
                <li id="PulsesSpices" onClick={() => showCategory("PulsesSpices")}> Pulses & Spices </li>
                <li id="Clothes" onClick={() => showCategory("Clothes")}> Clothes </li>
                <li id="Machineries" onClick={() => showCategory("Machineries")}> Machineries </li>
                <li id="Jewellery" onClick={() => showCategory("Jewellery")}> Jewellery </li>

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
          <FruitsVegetables />
          <LeatherProducts />
          <DairyEssentails />
          <PulsesSpices />
          <Clothes />
          <Machineries />
          <Jewellery />
        </main>
      </div>
    </div>
  );
}