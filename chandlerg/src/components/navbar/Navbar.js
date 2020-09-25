import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

// Text imports
import ChandlerGText from '../../assets/text_images/text_chandler_g.svg';
import MusicText from '../../assets/text_images/text_music.svg';
import DesignText from '../../assets/text_images/text_design.svg';
import StoreText from '../../assets/text_images/text_store.svg';
import BlogText from '../../assets/text_images/text_blog.svg';
import VideosText from '../../assets/text_images/text_videos.svg';
import AboutMeText from '../../assets/text_images/text_about_me.svg';
import HomeText from '../../assets/text_images/text_home.svg';
import DropdownIcon from '../../assets/icons/dropdown.png';
import CloseIcon from '../../assets/icons/close.svg';
import PortfolioText from '../../assets/text_images/text_portfolio.svg';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

  var navBarDisplayed = false;

  function navBarButtonClicked() {
    if(navBarDisplayed){
      document.getElementById("nav").style.display = "none";
      document.getElementById("nav-menu").style.display = "block";
      document.getElementById("nav-menu-exit").style.display = "none";
      navBarDisplayed = false;
    } else {
      document.getElementById("nav").style.display = "block";
      document.getElementById("nav-menu").style.display = "none";
      document.getElementById("nav-menu-exit").style.display = "block";
      navBarDisplayed = true;
    }
  }

  function navBarOptionsClicked(){
    document.getElementById("nav").style.display = "none";
    document.getElementById("nav-menu").style.display = "block";
    document.getElementById("nav-menu-exit").style.display = "none";
    navBarDisplayed = false;
  }

  return (
    
    <div>
      
      <div className="Nav-component">

        <div className="Nav-logo">
          <Link to='/'><img src={ChandlerGText} className="Nav-text" alt="Chandler G website" /></Link>
        </div>

        <div className="Nav-objects">
          <Link to='/music'><img src={MusicText} className="Nav-text" alt="Music tab" /></Link>
          <Link to='/design'><img src={PortfolioText} className="Nav-text" alt="Portfolio tab" /></Link>
          <Link to='/store'><img src={StoreText} className="Nav-text" alt="Store tab" /></Link>
          <Link to='/blog'><img src={BlogText} className="Nav-text" alt="Blog tab" /></Link>
          <Link to='/videos'><img src={VideosText} className="Nav-text" alt="Videos tab" /></Link>
          <Link to='/aboutme'><img src={AboutMeText} className="Nav-text" alt="About me tab" /></Link>
        </div>

        <img id="nav-menu" onClick={navBarButtonClicked} src={DropdownIcon} className="Nav-dropdown-button" alt="drop down"></img>
        <img id="nav-menu-exit" onClick={navBarButtonClicked} src={CloseIcon} className="Nav-dropdown-button-exit" alt="close drop down"></img>
        {/* <FontAwesomeIcon id="nav-menu-exit" onClick={navBarButtonClicked} icon={faTimes} className="Nav-dropdown-button-exit"/> */}

      </div>
      <div id="nav" className="Nav-dropdown">
        <div className="Nav-dropdown-object-container" onClick={navBarOptionsClicked}>
          <Link to='/'><img src={HomeText} className="Nav-dropdown-text"  alt="Home tab" /></Link>
          <Link to='/music'><img src={MusicText} className="Nav-dropdown-text" alt="Music tab" /></Link>
          <Link to='/design'><img src={PortfolioText} className="Nav-dropdown-text" alt="Portfolio tab" /></Link>
          <Link to='/store'><img src={StoreText} className="Nav-dropdown-text" alt="Store tab" /></Link>
          <Link to='/blog'><img src={BlogText} className="Nav-dropdown-text" alt="Blog tab" /></Link>
          <Link to='/videos'><img src={VideosText} className="Nav-dropdown-text" alt="Videos tab" /></Link>
          <Link to='/aboutme'><img src={AboutMeText} className="Nav-dropdown-text" alt="About me tab" /></Link>
        </div>
      </div>
    </div>
    
  );
}

export default Navbar;
