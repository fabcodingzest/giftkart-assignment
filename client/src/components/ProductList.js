import React, { useState } from "react";
import Carousel from "./Carousel";
import { ReactComponent as ArrowUp } from "../assets/icon-arrow-up.svg";
import { ReactComponent as ArrowDown } from "../assets/icon-arrow-down.svg";

const DropdownItem = ({ active, text, handleActiveChange }) => {
  const isActive = active === text;
  return (
    <button
      onClick={() => handleActiveChange(text)}
      style={{ color: isActive ? "grey" : "black" }}>
      {text}
    </button>
  );
};

const Dropdown = ({ list }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState(list[0]);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleActiveChange = (text) => {
    setActive(text);
  };
  return (
    <div className="select">
      <button className="select-btn" onClick={toggleDropdown}>
        {active}
        {dropdownOpen ? <ArrowUp /> : <ArrowDown />}
      </button>
      <button
        onClick={() => setDropdownOpen(false)}
        className="overlay"
        style={{ display: dropdownOpen ? "block" : "none" }}
      />
      <div
        className="select-box"
        style={{ display: dropdownOpen ? "block" : "none" }}>
        {list.map((item, i) => (
          <DropdownItem
            key={i}
            text={item}
            active={active}
            handleActiveChange={handleActiveChange}
          />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ info }) => {
  const { listOfImages, productName, options } = info;

  return (
    <div className="product__card">
      <div className="product__card--carousel">
        <Carousel slides={listOfImages} height="150px" />
      </div>
      <p className="product__card--text">{productName}</p>
      <Dropdown list={options} />
    </div>
  );
};

function ProductList({ data }) {
  return (
    <div className="product-list">
      {data.map((product) => (
        <ProductCard key={product._id} info={product} />
      ))}
    </div>
  );
}

export default ProductList;
