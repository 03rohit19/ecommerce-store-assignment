import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.component";

function App() {
  const [filters, setFilters] = useState({
    selectedCategory: "",
    priceRange: "",
    rating: "",
  });

  const handleChange = (name: string, value: string) => {
    setFilters((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <div className="app">
      <Sidebar handleChange={handleChange} />
    </div>
  );
}

export default App;
