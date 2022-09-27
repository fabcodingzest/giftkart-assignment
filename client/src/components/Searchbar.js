import React from "react";
import { debounce } from "../utilities/debounce";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

function Searchbar() {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className="container search">
      <div id="searchbox">
        {/* create input */}
        {/* add debouncing for input */}
        {/* create dropdown with static data and handle no result and result state */}
        {/* Create the dropdown items as links to product page */}
        <input
          id="search-input"
          type="text"
          onChange={debounce(handleSearch, 1000)}
        />
        <button id="search-btn" onClick={() => console.log("hello btn")}>
          <SearchIcon id="search-icon" />
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
