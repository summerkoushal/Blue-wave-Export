import React from "react";

// ─── Configurable Constants ─────────────────────────────────────────────
const CARD_WIDTH = 300;
const CARD_HEIGHT = 380;
const GAP = 32;
const SCROLL_DURATION = 25; // seconds
// ───────────────────────────────────────────────────────────────────────

const members = [
  {
    name: "Mrs Lata Siddharth Kuldeepke",
    role: "President",
    img: "man_dummy.jpg",
  },
  {
    name: "Vijaykumar Kishanrao ",
    role: "Secretary",
    img: "man_dummy.jpg",
  },
  {
    name: "Pushpa Vijaykumar Kuldeepke",
    role: "Asst. Secretary",
    img: "man_dummy.jpg",
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
