import React from 'react';
import './Music.css';
import PageUnderConstruction from '../components/PageUnderConstruction';
import AwakenCover from '../assets/portfolio/awaken/awaken-promo.jpg'
import ReactPlayer from "react-player"

function Music() {
  return (
    <div className="">
      <p className="Hello-text">Chandler G Music!</p>
      {/* <img src={AwakenCover} className="Awaken-cover" alt="Awaken cover" /> */}

      <div className="React-player-container">
        <ReactPlayer url="https://soundcloud.com/chandler_g/awaken" width="100%" style={{margin: "0 auto"}}/>
      </div>

      {/* <PageUnderConstruction /> */}
    </div>
  );
}

export default Music;
