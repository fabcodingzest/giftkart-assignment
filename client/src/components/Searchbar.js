import { useCallback, useState } from "react";
import { debounce } from "../utilities/debounce";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { baseAPI } from "../utilities/constants";

const SearchItem = ({ img, text }) => {
  return (
    <div className="search__result">
      {img && (
        <div className="search__result--img">
          <img src={img} alt={text} />
        </div>
      )}
      <p>{text}</p>
    </div>
  );
};

function Searchbar() {
  const [results, setResults] = useState([]);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const fetchData = (query) => {
    fetch(`${baseAPI}/products/${encodeURI(query)}`)
      .then((res) => res.json())
      .then((json) => {
        setDropDownOpen(true);
        setResults(json);
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Please try again later!");
      });
  };
  const handleSearch = (e) => {
    const { value } = e.target;
    if (value !== "") {
      fetchData(value);
    }
    setDropDownOpen(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(debounce(handleSearch, 500), []);

  return (
    <div className="search">
      <div id="searchbox">
        <input
          id="search-input"
          type="text"
          onChange={debouncedSearch}
          onFocus={(e) => {
            setDropDownOpen(true);
            debouncedSearch();
          }}
          onBlur={() => setDropDownOpen(false)}
          autoComplete="off"
        />
        <button id="search-btn" onClick={() => console.log("hello btn")}>
          <SearchIcon id="search-icon" />
        </button>
        {dropDownOpen && (
          <div className="dropdown">
            {results.length > 0 ? (
              results.map((item) => (
                <SearchItem
                  img={item.listOfImages[0]}
                  text={item.productName}
                  key={item._id}
                />
              ))
            ) : (
              <SearchItem text="No Items Found" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
