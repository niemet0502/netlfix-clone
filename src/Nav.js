import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./img/logo.png"
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

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
      <div>
      <CardGiftcardIcon />
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
