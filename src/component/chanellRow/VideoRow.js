import React from "react";
import "./VideoRow.css";
function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
  newV,
  cc,
}) {
  return (
    <div className="videorow">
      <img src={image} />
      <div className="videorow__text">
        <h3>{title}</h3>
        <p>
          {channel} •{" "}
          <span className="videorow__sub">
            <span className="videorow__subs">{subs}</span> Subscribers
          </span>{" "}
          • {views} views • {timestamp}
        </p>
        <p className="videorow__dis">{description}</p>
        <div className="videorow__dis__bottom">
          {newV && <p className="videorow__dis_btn">New</p>}
          {cc && <p className="videorow__dis_btn">CC</p>}
        </div>
      </div>
    </div>
  );
}

export default VideoRow;
