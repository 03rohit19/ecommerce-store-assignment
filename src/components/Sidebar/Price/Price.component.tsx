import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import SideBarOptions from "../../SideBarOptions/SideBarOptions.component";
import "../sidebar.scss";

interface CategoryComponentProps {
  handleChange: (name: string, value: string) => void;
}

function PriceComponent({ handleChange }: CategoryComponentProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handlePriceRangeChange = (priceRange: string) => {
    setSelectedPriceRange(priceRange);
    handleChange("priceRange", priceRange);
  };

  return (
    <div className="sidebar-options-container">
      <h2 className="sidebar-title">
        Price
        <span style={{ marginLeft: "70px" }}>
          <button onClick={toggleDropdown} className="show-more-button">
            {showDropdown ? <FaCaretUp /> : <FaCaretDown />}
          </button>
        </span>
      </h2>
      <div>
        <SideBarOptions
          value=""
          title="All"
          name="category"
          handleChange={() => handlePriceRangeChange("")}
          checked={selectedPriceRange === ""}
        />

        <SideBarOptions
          handleChange={() => handlePriceRangeChange("under100")}
          value="under100"
          title="Under 100"
          name="priceRange"
          checked={selectedPriceRange === "under100"}
        />
        {showDropdown && (
          <>
            <SideBarOptions
              handleChange={() => handlePriceRangeChange("100to500")}
              value="100to500"
              title="100 to 500"
              name="priceRange"
              checked={selectedPriceRange === "100to300"}
            />
            <SideBarOptions
              handleChange={() => handlePriceRangeChange("above500")}
              value="above500"
              title="Above 500"
              name="priceRange"
              checked={selectedPriceRange === "Above500"}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default PriceComponent;
