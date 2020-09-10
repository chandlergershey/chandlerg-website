import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

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

function Navbar() {
  return (
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

    </div>
  );
}

export default Navbar;
