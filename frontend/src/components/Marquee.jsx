import React from "react";

const ITEMS = ["Stay", "Celebrate", "Dine", "Unwind", "Indulge"];

export const Marquee = () => {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true" data-testid="editorial-marquee">
      <div className="marquee__track">
        {[0, 1].map((half) => (
          <React.Fragment key={half}>
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className={`marquee__item ${i % 2 === 1 ? "marquee__item--solid" : ""}`}>
                {item}
                <span className="marquee__dot" />
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
