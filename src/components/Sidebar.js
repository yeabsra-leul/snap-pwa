import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import ImageButton from "./Buttons";
import '../styles/sidebar.css';
import humburger from "../images/humburger.svg";
import exit from "../images/exit.svg";
import settings from "../images/settings.svg";
import tag from "../images/tag.svg";
import home from "../images/home.svg";

export default Sidebar => {   // TODO: Change URIs, Prevent overlay scrolling behind sidebar
  return (
    <Menu width={'275px'} customBurgerIcon={<img src={humburger}/>} customCrossIcon={<img src={exit}/>} disableAutoFocus >
      <Link to="/Schedules">
        <ImageButton image={home} cls={"hamburger-item"} alt={"Home"}>
          Home
        </ImageButton>
      </Link>

      <Link to="/">
        <ImageButton image={tag} cls={"hamburger-item"} alt={"Tags"}>
          Tags
        </ImageButton>
      </Link>

      <Link to="/Settings">
        <ImageButton image={settings} cls={"hamburger-item"} alt={"Settings"}>
          Settings
        </ImageButton>
      </Link>
    </Menu>
  )
}