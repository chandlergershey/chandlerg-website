import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import $ from 'jquery';

// component imports
import Home from '../../home/Home';
import Design from '../../design/Design';
import Music from '../../music/Music';
import Store from '../../store/Store';
import Blog from '../../blog/Blog';
import Videos from '../../videos/Videos';
import AboutMe from '../../aboutme/AboutMe';

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

function Navbar() {

  var navBarDisplayed = true;

  function navBarButtonClicked() {
    if(navBarDisplayed){
      document.getElementById("nav").style.display = "none";
      navBarDisplayed = false;
    } else {
      document.getElementById("nav").style.display = "block";
      navBarDisplayed = true;
    }
  }

  function navBarOptionsClicked(){
    document.getElementById("nav").style.display = "none";
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
          <Link to='/design'><img src={DesignText} className="Nav-text" alt="Design tab" /></Link>
          <Link to='/store'><img src={StoreText} className="Nav-text" alt="Store tab" /></Link>
          <Link to='/blog'><img src={BlogText} className="Nav-text" alt="Blog tab" /></Link>
          <Link to='/videos'><img src={VideosText} className="Nav-text" alt="Videos tab" /></Link>
          <Link to='/aboutme'><img src={AboutMeText} className="Nav-text" alt="About me tab" /></Link>
        </div>

        <img onClick={navBarButtonClicked} src={DropdownIcon} className="Nav-dropdown-button" alt="drop down"></img>
      </div>
      <div id="nav" className="Nav-dropdown">
        <div className="Nav-dropdown-object-container">
          <Link to='/'><img src={HomeText} className="Nav-dropdown-text" onClick={navBarOptionsClicked} alt="Home tab" /></Link>
          <Link to='/music'><img src={MusicText} className="Nav-dropdown-text" onClick={navBarOptionsClicked} alt="Music tab" /></Link>
          <Link to='/design'><img src={DesignText} className="Nav-dropdown-text" onClick={navBarOptionsClicked} alt="Design tab" /></Link>
          <Link to='/store'><img src={StoreText} className="Nav-dropdown-text" onClick={navBarOptionsClicked} alt="Store tab" /></Link>
          <Link to='/blog'><img src={BlogText} className="Nav-dropdown-text" onClick={navBarOptionsClicked} alt="Blog tab" /></Link>
          <Link to='/videos'><img src={VideosText} className="Nav-dropdown-text" onClick={navBarOptionsClicked} alt="Videos tab" /></Link>
          <Link to='/aboutme'><img src={AboutMeText} className="Nav-dropdown-text" onClick={navBarOptionsClicked} alt="About me tab" /></Link>
        </div>
      </div>
    </div>
    
  );
}

export default Navbar;
