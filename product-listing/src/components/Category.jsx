import React, { useState } from "react";
import { useSelector } from "react-redux";

export const Category = () => {
  const products = useSelector((store) => store.products);
  const getUnique = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });

    return [...new Set(newVal)];
  };
  const getCategory = getUnique(products, "category");

  return (
    <>
      <div className="container mt-3">
        <h5>CATEGORIES</h5>
        <br />
        <div className="form-check">
          {getCategory.map((curElem, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check1"
                  name="category"
                  value={curElem}
                  onClick={() => filterResult(curElem)}
                />
                <label className="form-check-label" htmlFor="check1">
                  {curElem}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
