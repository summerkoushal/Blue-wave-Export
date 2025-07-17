import React from "react";

// ─── Configurable Constants ─────────────────────────────────────────────
const CARD_WIDTH = 300;
const CARD_HEIGHT = 380;
const GAP = 32;
const SCROLL_DURATION = 25; // seconds
// ───────────────────────────────────────────────────────────────────────

const members = [
  {
    name: "Mrs. Sriti Singh Roy",
    role: "Company Secretary",
    img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1052854742.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
  },
  {
    name: "Mrinmoy Kasyapi",
    role: "Designation President",
    img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1052854742.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
  },
  {
    name: "Rakhesh Khemka",
    role: "Managing Director",
    img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1052854742.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
  },
];

// Duplicate the set for seamless loop
const loopSet = [...members, ...members, ...members];

export default function TeamCarousel() {
  return (
    <section className="overflow-hidden w-full py-8 bg-white">
      <div className="relative w-full">
        {/* Scrolling container */}
        <div
          className="flex"
          style={{
            gap: `${GAP}px`,
            width: "max-content",
              animation: `scrollLeft ${SCROLL_DURATION}s linear infinite`,
              display: 'flex',
              flexDirection: 'row'
          }}
        >
          {loopSet.map(({ name, role, img }, idx) => (
            <article
              key={idx}
              className="flex-none rounded-xl shadow-lg bg-grey-100 overflow-hidden flex flex-col items-center justify-end"
              style={{
                width: `${CARD_WIDTH}px`,
                height: `${CARD_HEIGHT}px`,
              }}
            >
              <img
                src={img}
                alt={name}
                style={{
                  width: "100%",
                  height: `${CARD_HEIGHT * 0.7}px`,
                  objectFit: "cover",
                }}
              />
              <div className="w-full p-4 text-center bg-white">
                <h3 className="text-lg font-semibold mb-1">{name}</h3>
                <p className="text-sm text-gray-600">{role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-66.6667%); }
        }
      `}</style>
    </section>
  );
}
