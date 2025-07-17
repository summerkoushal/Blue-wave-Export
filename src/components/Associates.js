import React from "react";

const associates = [
  {
    name: "ICICI Bank",
    category: "Bankers",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/2560px-ICICI_Bank_Logo.svg.png",
  },
  {
    name: "Union Bank of India",
    category: "Bankers",
    logo: "https://www.cdnlogo.com/logos/u/84/union-bank-of-india.svg",
  },
  {
    name: "Axis Bank",
    category: "Bankers",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/AXISBank_Logo.svg/1200px-AXISBank_Logo.svg.png",
  },
  {
    name: "Karnataka Bank Ltd.",
    category: "Bankers",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8a6satEJhn8l7KzhswPBCZMnGqzyl8e1Xw&s",
  },
  {
    name: "NABARD",
    category: "Public Sector Undertakings",
    logo: "https://images.odishatv.in/uploadimage/library/16_9/16_9_5/IMAGE_1665890719.jpg",
  },
];

const logos = [...associates, ...associates];

export default function AssociatesSection() {
  return (
    <section className="py-5 bg-white overflow-hidden">
      <div className="container">
        <h2 className="text-center fw-bold mb-2">Associates</h2>
        <div
          className="mx-auto mb-4"
          style={{ width: "3rem", height: "4px", backgroundColor: "#d97706" }}
        />

        {/* Scrolling carousel */}
        <div className="scroll-wrapper mx-auto" style={{ width: "70vw" }}>
          <div className="scroll-track d-flex flex-nowrap align-items-center">
            {logos.map(({ name, logo, category }, idx) => (
              <div
                key={idx}
                className="d-flex flex-column align-items-center px-4"
                style={{ flex: "0 0 auto", width: "180px" }}
              >
                <img
                  src={logo}
                  alt={name}
                  className="img-fluid"
                  style={{ maxHeight: "80px", objectFit: "contain" }}
                />
                <p
                  className="mt-2 fw-semibold text-center"
                  style={{ color: "#d97706", fontSize: "0.9rem" }}
                >
                  {category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        .scroll-wrapper {
          overflow: hidden;
          position: relative;
        }

        .scroll-track {
          animation: scroll-left 25s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
