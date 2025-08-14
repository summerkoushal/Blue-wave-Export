import React from 'react'

export default function Policy() {
  function downloadMSME() {
    const link = document.createElement('a');
    link.href = "MSME.pdf";
    link.download = "MSME.pdf";
    document.body.appendChild(link);
    link.click();
  }
  return (
    <div className='ok'>
      <div className="container text-center pt-5">
        <div className="row">
          {/* Sidebar */}
          <aside className="col-md-3 mb-4">
            <div className="card mb-4">
              <button onClick={downloadMSME} className="btn btn-outline-secondary w-100"> ⬇️ Download Brochure </button>
            </div>
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">How Can We Help?</h5>
                <p className="card-text small"> If you need any help, please feel free to contact us. </p>
                <p className="mb-0">📞 +91 79 7233 4852</p>
              </div>
            </div>
          </aside>

          <div className="col-md-9 policy-card-div">
            
            <div  onClick={downloadMSME} className=" policy-card">
                <img className='policy-card-img' src="certificate.png" alt="" />
                <div>MSME Blue Wave Export</div>
            </div>

            <div className="policy-card">
                <img className='policy-card-img' src="certificate.png" alt="" />
                <div>Export License Certificate</div>
            </div>

            {/* <div className="policy-card">
                <img className='policy-card-img' src="certificate.png" alt="" />
                <div>Materiality policy of group companies</div>
            </div>

            <div className="policy-card">
                <img className='policy-card-img' src="certificate.png" alt="" />
                <div>Materiality policy of group companies</div>
            </div>

            <div className="policy-card">
                <img className='policy-card-img' src="certificate.png" alt="" />
                <div>Materiality policy of group companies</div>
            </div>

            <div className="policy-card">
                <img className='policy-card-img' src="certificate.png" alt="" />
                <div>Materiality policy of group companies</div>
            </div>

            <div className="policy-card">
                <img className='policy-card-img' src="certificate.png" alt="" />
                <div>Materiality policy of group companies</div>
            </div>

            <div className="policy-card">
                <img className='policy-card-img' src="certificate.png" alt="" />
                <div>Materiality policy of group companies</div>
            </div>

            <div className="policy-card">
                <img className='policy-card-img' src="certificate.png" alt="" />
                <div>Materiality policy of group companies</div>
            </div>

            <div className="policy-card">
                <img className='policy-card-img' src="certificate.png" alt="" />
                <div>Materiality policy of group companies</div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}
