import React from "react";
import CategoryComponent from "./Category/Category.component";
import "./sidebar.scss";
import PriceComponent from "./Price/Price.component";

interface SidebarProps {
  handleChange: (name: string, value: string) => void;
}

const Sidebar = ({ handleChange }: SidebarProps) => {
  return (
    <div className="sidebar-container sidebar-view">
      <CategoryComponent handleChange={handleChange} />
      <PriceComponent handleChange={handleChange} />
    </div>
  );
};

export default Sidebar;
