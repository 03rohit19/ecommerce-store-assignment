import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./searchbar.scss";

export const SearchBar = ({ setResults }: any) => {
  const [input, setInput] = useState("");

  const handleChange = (value: any) => {
    setInput(value);
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