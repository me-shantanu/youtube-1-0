import React from "react";

import SidebarRow from "./SidebarRow";
import Channel from "./Channel";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TheatersIcon from "@material-ui/icons/Theaters";
import SportsEsportsRoundedIcon from "@material-ui/icons/SportsEsportsRounded";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import ShopIcon from "@material-ui/icons/Shop";
import SchoolIcon from "@material-ui/icons/School";
import SettingsIcon from "@material-ui/icons/Settings";
import ReportIcon from "@material-ui/icons/Report";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} text="Home" />
      <SidebarRow Icon={WhatshotIcon} text="Tranding" />
      <SidebarRow Icon={SubscriptionsIcon} text="Subsciptions" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} text="Libary" />
      <SidebarRow Icon={HistoryIcon} text="History" />
      <SidebarRow Icon={OndemandVideoIcon} text="Your videos" />
      <SidebarRow Icon={WatchLaterIcon} text="watch Latter" />
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} text="Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} text="Show more" />
      <hr />
      <h4>SUBSCRIPTIONS</h4>
      <Channel image="./images/video1/shan.webp" title="shantanu" />
      <Channel image="./images/video1/shan.webp" title="shantanu" />
      <Channel image="./images/video1/shan.webp" title="shantanu" />
      <Channel image="./images/video1/shan.webp" title="shantanu" />
      <Channel image="./images/video1/shan.webp" title="shantanu" />
      <Channel image="./images/video1/shan.webp" title="shantanu" />
      <Channel image="./images/video1/shan.webp" title="shantanu" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} text="Show more" />
      <hr />
      <h4>MORE FROM YOUTUBE</h4>
      <SidebarRow Icon={YouTubeIcon} text="Youtube Premium" />
      <SidebarRow Icon={TheatersIcon} text="Movies" />
      <SidebarRow Icon={SportsEsportsRoundedIcon} text="Gaming" />
      <SidebarRow Icon={LiveTvIcon} text="Live" />
      <SidebarRow Icon={ShopIcon} text="Fashion & Beauty" />
      <SidebarRow Icon={SchoolIcon} text="Learning" />
      <hr />
      <SidebarRow Icon={SettingsIcon} text="Settings" />
      <SidebarRow Icon={ReportIcon} text="Report History" />
      <SidebarRow Icon={HelpIcon} text="Help" />
      <SidebarRow Icon={FeedbackIcon} text="Send Feedback" />
    </div>
  );
}

export default Sidebar;
