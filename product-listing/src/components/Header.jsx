import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

import { GoSearch } from "react-icons/go";
export const Header = () => {
  return (
    <>
      <header>
        <div className="logo_container">
          <h4>Flatlogic</h4>
        </div>
        <nav className="nav_bar">
          <a href="#">Home</a>
          <a href="#">
            Pages
            <IoIosArrowDown />
          </a>
          <a href="#">
            Shop
            <IoIosArrowDown />
          </a>
          <a href="#">
            Blog
            <IoIosArrowDown />
          </a>
        </nav>

        <div className="action_bar">
          <div className="action_container">
            <GoSearch />
          </div>
          <div className="action_container">
            <IoPersonOutline />
          </div>

          <div className="action_container">
            <BsCart />

            <span className="bag-item-count">0</span>
          </div>
        </div>
      </header>
    </>
  );
};
