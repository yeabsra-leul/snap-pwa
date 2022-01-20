import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.css';
import humburger from "../images/humburger.svg";
import exit from "../images/exit.svg";
import {Link} from 'react-router-dom';
import ImageButton from "./Buttons";
import settings from "../images/settings.svg";
import tag from "../images/tag.svg";
import groups from "../images/groups.svg";

export default props => {   // TODO: Change URIs, Prevent overlay scrolling behind sidebar
  return (
    <Menu width={'275px'} customBurgerIcon={<img src={humburger}/>} customCrossIcon={<img src={exit}/>} disableAutoFocus >
      <Link to="/">
        <ImageButton image={groups} cls={"hamburger-item"} alt={"Groups"}>
          Groups
        </ImageButton>
      </Link>

      <Link to="/">
        <ImageButton image={tag} cls={"hamburger-item"} alt={"Tags"}>
          Tags
        </ImageButton>
      </Link>

      <Link to="/">
        <ImageButton image={settings} cls={"hamburger-item"} alt={"Settings"}>
          Settings
        </ImageButton>
      </Link>
    </Menu>
  )
}