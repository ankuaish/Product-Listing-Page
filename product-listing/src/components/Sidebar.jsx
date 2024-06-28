import React from "react";

export const Sidebar = () => {
  return (
    <>
      <div className="container mt-3">
        <h5>Category</h5>
        <br />
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="check1"
            name="option1"
            value="something"
          />
          <label className="form-check-label" for="check1">
            beauty
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="check2"
            name="option2"
            value="something"
          />
          <label className="form-check-label" for="check2">
            fragrances
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="check2"
            name="option2"
            value="something"
          />
          <label className="form-check-label" for="check2">
            furniture
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="check2"
            name="option2"
            value="something"
          />
          <label className="form-check-label" for="check2">
            groceries
          </label>
        </div>
      </div>
      <div>
        <div data-role="rangeslider">
          <label for="price-min">Price:</label>
          <input
            type="range"
            name="price-min"
            id="price-min"
            value="200"
            min="0"
            max="1000"
          />
          <label for="price-max">Price:</label>
          <input
            type="range"
            name="price-max"
            id="price-max"
            value="800"
            min="0"
            max="1000"
          />
        </div>
      </div>
    </>
  );
};
