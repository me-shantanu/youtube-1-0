import React from "react";
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import Button from "@material-ui/core/Button";
function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  descriptions,
}) {
  return (
    <div className="channelrow">
      <Avatar className="channelrow__logo" src={image} alt={channel} />
      <div className="channelrow__text">
        <h4>
          {channel}{" "}
          {verified && (
            <CheckCircleRoundedIcon className="channelrow__text_ver" />
          )}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{descriptions}</p>
      </div>
      <div className="channelrow__subs">
        <Button className="channelrow__subs__btn">
          <span>SUBSCRIBED</span>
        </Button>
        <NotificationsActiveIcon className="channelrow__subs__icon" />
      </div>
    </div>
  );
}

export default ChannelRow;
