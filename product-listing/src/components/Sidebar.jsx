import React from "react";

export const Sidebar = () => {
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-4">
        <div className="container mt-3">
          <h5>CATEGORIES</h5>
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
        <br />
        <div className="container mt-3">
          <h5>PRICE</h5>
          <br />
          <div className="slidecontainer">
            <p>Price Range Rs.10-1000</p>
            <input type="range" min="10" max="100" value="50" />
          </div>
        </div>
        <br />
        <div className="container mt-3">
          <h5>BRANDS</h5>
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
              Essence
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
              Glamour Beauty
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
              Velvet Touch
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
              Chanel
            </label>
          </div>
        </div>
        <br />
        <div className="container mt-3">
          <h5> AVAILABILITY</h5>
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
              On Stock
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
              Out of Stock
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
