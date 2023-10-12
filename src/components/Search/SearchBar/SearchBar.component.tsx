import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./searchbar.scss";

export const SearchBar = ({ data, setResults, setShowSearchResults }: any) => {
  const [input, setInput] = useState("");

  const handleChange = (value: any) => {
    const filteredProductsData = data?.filter((item: any) =>
      item.category.includes(value)
    );

    console.log("input", value, filteredProductsData, data);

    setInput(value);

    setResults(filteredProductsData);
    setShowSearchResults(true);
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <FaSearch id="search-icon" />
    </div>
  );
};
