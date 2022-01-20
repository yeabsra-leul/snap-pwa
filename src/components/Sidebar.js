import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/Sidebar.css';
import humburger from "../images/humburger.svg"
import {Link} from 'react-router-dom';

export default props => {   // TODO: Prevent overlay scrolling behind sidebar
  return (
    <Menu width={'275px'} customBurgerIcon={<img src={humburger}/>} disableAutoFocus >
      <Link to="/Schedule">Groups</Link>
      <Link to="/Schedule">Tags</Link>
      <Link to="/Schedule">Settings</Link>
      <div className="scroll-preventer"></div>
    </Menu>
  )
}