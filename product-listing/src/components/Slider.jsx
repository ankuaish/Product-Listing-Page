import React, { useState } from "react";

export const Slider = () => {
  const [price, setPrice] = useState(50);

  const handleSliderChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div className="container mt-3">
      <h5>PRICE</h5>
      <br />
      <div className="slidecontainer">
        <p>Current Price: Rs.{price}</p>
        <input
          type="range"
          min="10"
          max="1000"
          value={price}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};
