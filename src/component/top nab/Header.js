import React, { useState } from "react";
import "./Header.css";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="header__left__icon" />
        <Link to="/">
          <img className="header__logo" src="./images/youtube.png" />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link
          className="header__input__icon__main"
          to={`/search/${inputSearch}`}
        >
          <SearchIcon className="header__input__icon" />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallIcon className="header__right__icon" />
        <AppsIcon className="header__right__icon" />
        <NotificationsIcon className="header__right__icon" />
        <Avatar
          className="header__right__icon__avtar"
          alt="shan mis"
          src="./images/shan.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
