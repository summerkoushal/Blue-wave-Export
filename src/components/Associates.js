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
      <div className="container px-0">
        <h2 className="text-center  mb-2">Associates</h2>
        <div
          className="mx-auto mb-4"
          style={{ width: "3rem", height: "4px", backgroundColor: "var(--subheading)" }}
        />

        {/* Scrolling carousel */}
        <div className="scroll-wrapper mx-auto">
          <div className="scroll-track d-flex flex-nowrap align-items-center">
            {logos.map(({ name, logo, category }, idx) => (
              <div
                key={idx}
                className="logo-item d-flex flex-column align-items-center"
              >
                <img
                  src={logo}
                  alt={name}
                  className="img-fluid"
                  style={{ maxHeight: "80px", objectFit: "contain" }}
                />
                <p
                  className="mt-2 fw-semibold text-center"
                  style={{ color: "var(--subheading)", fontSize: "0.9rem" }}
                >
                  {category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .scroll-wrapper {
          width: 70vw;
          overflow: hidden;
          position: relative;
        }

        .scroll-track {
          display: flex;
          flex-wrap: nowrap;
          gap: 1rem;
          animation: scroll-left 10s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-item {
          flex: 0 0 auto;
          width: 150px;
        }

        @media (max-width: 768px) {
          .scroll-wrapper {
            width: 90vw;
          }

          .logo-item {
            width: 130px;
          }
        }

        @media (max-width: 480px) {
          .scroll-wrapper {
            width: 95vw;
          }

          .logo-item {
            width: 120px;
          }
        }
      `}</style>
    </section>
  );
}
