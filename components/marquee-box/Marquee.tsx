import React from "react";
import "./styles.css"; // Import your CSS styles for the marquee

const Marquee = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        <span>We will be closed on Sunday, Monday & Tuesday</span>
        <span>Missed the weekend special honey bee croissants?</span>
        <span>Tiny Bakers have a surprise waiting just for you!</span>
        <span>See you on Wednesday</span>
      </div>
    </div>
  );
};

export default Marquee;
