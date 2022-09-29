import { useState } from "react";
import { ReactComponent as ArrowUp } from "../../assets/icon-arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/icon-arrow-down.svg";
import DropdownItem from "./DropdownItem";

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
      <div
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

export default Dropdown;
