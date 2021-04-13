import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./img/logo.png"
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav_link_container">
        <img
          className="nav__logo"
          src={logo}
          alt="netflix_logo"
        />
        <a href="#!" className="active">Home</a>
        <a href="">TV Shows</a>
        <a href="">Movie</a>
        <a href="">Latest</a>
        <a href="">My List</a>
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
      <SearchIcon className="nav_icon"/>
      <a href="#!" style={{color: '#e5e5e5', textDecoration: 'none', marginRight: '15px'}}>DVD</a>
      <CardGiftcardIcon className="nav_icon" />
      <NotificationsIcon className="nav_icon" />
      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="netflix avatar"
      />
      </div>
    </div>
  );
}

export default Nav;
