import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.component";
import { SearchBar } from "./components/Search/SearchBar/SearchBar.component";
import { SearchResultsList } from "./components/Search/SearchResultList/SeachResultList.component";
import "./components/Search/search.scss";
import "./components/Sidebar/sidebar.scss";
import "./App.scss";

function App() {
  const [filters, setFilters] = useState({
    selectedCategory: "",
    priceRange: "",
    rating: "",
  });

  const [results, setResults] = useState([]);

  const handleChange = (name: string, value: string) => {
    setFilters((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <div className="app">
      <div className="components-container">
        <div className="sidebar-top-container">
          <Sidebar handleChange={handleChange} />
        </div>

        <div className="search-bar-container ">
          <SearchBar setResults={setResults} />

          {results && results.length > 0 && (
            <SearchResultsList results={results} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
