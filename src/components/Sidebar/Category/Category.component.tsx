import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import SideBarOptions from "../../SideBarOptions/SideBarOptions.component";
import "../sidebar.scss";

interface CategoryComponentProps {
  handleChange: (name: string, value: string) => void;
}

function CategoryComponent({ handleChange }: CategoryComponentProps) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    handleChange("category", category);
  };

  return (
    <div className="sidebar-options-container">
      <h2 className="sidebar-title">
        Brand
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
          handleChange={() => handleCategoryChange("")}
          checked={selectedCategory === ""}
        />

        <SideBarOptions
          handleChange={() => handleCategoryChange("men's clothing")}
          value="men's clothing"
          title="Men"
          name="category"
          checked={selectedCategory === "men's clothing"}
        />

        {showDropdown && (
          <>
            <SideBarOptions
              handleChange={() => handleCategoryChange("women's clothing")}
              value="women's clothing"
              title="Women"
              name="category"
              checked={selectedCategory === "women's clothing"}
            />
            <SideBarOptions
              handleChange={() => handleCategoryChange("jewelery")}
              value="jewelery"
              title="Jewelry"
              name="category"
              checked={selectedCategory === "jewelery"}
            />
            <SideBarOptions
              handleChange={() => handleCategoryChange("electronics")}
              value="electronics"
              title="Electronics"
              name="category"
              checked={selectedCategory === "electronics"}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default CategoryComponent;
