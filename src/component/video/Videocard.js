import React from "react";
import "./Videocard.css";
import Avatar from "@material-ui/core/Avatar";

function Videocard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videocard">
      <img className="videocard__thumbnail" src={image} />
      <div className="videcard__info">
        <Avatar
          className="videocard__info__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videcard__info__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} · {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Videocard;
