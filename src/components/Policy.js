import React from 'react'

export default function Policy() {
  return (
    <>
      <div className="container bg-warnidng">
        <div className="text-center mb-5">
        </div>

        <div className="row">
          {/* Sidebar */}
          <aside className="col-md-3 mb-4">
            <div className="card mb-4">
              <button className="btn btn-outline-secondary w-100"> ⬇️ Download Brochure </button>
            </div>
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">How Can We Help?</h5>
                <p className="card-text small"> If you need any help, please feel free to contact us. </p>
                <p className="mb-0">📞 +91-33-2281396/97</p>
              </div>
            </div>
          </aside>

          <main className="col-md-9 text-center">
            <div style={{ backgroundColor: 'whitesmoke', width: '180px' }} className="card-body">
              <div style={{padding: '15px 5px'}} >
                <img style={{ width: '90px'}} src="certificate.png" alt="" />
                <div>Materiality policy of group companies</div>
              </div>
            </div>

            <div style={{ backgroundColor: 'whitesmoke', width: '180px' }} className="card-body">
              <div style={{padding: '15px 5px'}} >
                <img style={{ width: '90px'}} src="certificate.png" alt="" />
                <div>Materiality policy of group companies</div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </>
  );
}
