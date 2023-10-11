import React, { useState } from "react";
import "./Category.css";
// import SideBarOptions from "../../components/SideBarOptions";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import SideBarOptions from "../../SideBarOptions/SideBarOptions.component";

function CategoryComponent({ handleChange }: any) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    handleChange({ target: { name: "category", value: category } });
  };

  return (
    <div>
      <h2 className="sidebar-title">
        Brand
        <span style={{ marginLeft: "70px" }}>
          <button onClick={toggleDropdown} className="show-more-button">
            {showDropdown ? <FaCaretUp /> : <FaCaretDown />}
          </button>
        </span>
      </h2>
      <div>
        <label className="sidebar-label-container">
          <SideBarOptions
            value=""
            title="All"
            name="category"
            handleChange={() => handleCategoryChange("")}
            checked={selectedCategory === ""}
          />
          <span className="checkmark"></span>All
        </label>

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
