import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Channel.css";

function Channel({ image, title }) {
  return (
    <div className="channel">
      <Avatar className="sidebarrow__avatar" src={image} />
      <h2 className="sidebarrow__title">{title}</h2>
    </div>
  );
}

export default Channel;
