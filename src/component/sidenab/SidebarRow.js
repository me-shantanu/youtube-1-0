import React from "react";
import "./SidebarRow.css";

function SidebarRow({ selected, Icon, text }) {
  return (
    <div className={`sidebarrow ${selected && "selected"}`}>
      <Icon className="sidebarrow__icon" />
      <h2 className="sidebarrow__title">{text}</h2>
    </div>
  );
}

export default SidebarRow;
