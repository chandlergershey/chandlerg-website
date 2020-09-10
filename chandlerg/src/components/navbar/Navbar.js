import React from 'react';
import './Navbar.css';

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
        <img src={ChandlerGText} className="Nav-text" alt="logo" />
      </div>

      <div className="Nav-objects">
        <img src={MusicText} className="Nav-text" alt="logo" />
        <img src={DesignText} className="Nav-text" alt="logo" />
        <img src={StoreText} className="Nav-text" alt="logo" />
        <img src={BlogText} className="Nav-text" alt="logo" />
        <img src={VideosText} className="Nav-text" alt="logo" />
        <img src={AboutMeText} className="Nav-text" alt="logo" />
      </div>

    </div>
  );
}

export default Navbar;
