import React from 'react';
import './Videos.css';
import PageUnderConstruction from '../components/PageUnderConstruction';
import '../components/YouTubeVideo';
import YouTube from 'react-youtube';

function Videos() {
  return (
    <div className="">
      <p className="Hello-text">My Videos!</p>
      <div className="YouTube-player-container">
        <YouTube videoId="dth148PBXl4"  />
      </div>
      <PageUnderConstruction />
    </div>
  );
}

export default Videos;
