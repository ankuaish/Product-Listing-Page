import React from "react";
import { useSelector } from "react-redux";
import { Slider } from "./Slider";
import { Category } from "./Category";

export const Sidebar = () => {
  const products = useSelector((store) => store.products);

  const getUniqueBrand = (data, property) => {
    let newVal1 = data.map((curElem) => {
      return curElem[property];
    });

    return (newVal1 = [...new Set(newVal1)]);
  };
  const getBrands = getUniqueBrand(products, "brand");
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-4">
        <Category />
        <br />

        <Slider />
        <br />
        <div className="container mt-3">
          <h5>BRANDS</h5>
          <br />
          <div className="form-check">
            {getBrands.map((curElem, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check2"
                    name="option2"
                    value={curElem}
                  />
                  <label className="form-check-label" htmlFor="check2">
                    {curElem}
                  </label>
                </div>
              );
            })}
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
            <label className="form-check-label" htmlFor="check1">
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
            <label className="form-check-label" htmlFor="check2">
              Out of Stock
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
