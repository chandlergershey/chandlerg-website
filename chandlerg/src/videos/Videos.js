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
        {/* <YouTube videoId="dth148PBXl4"  /> */}
        <div
          className="video"
          style={{
            position: "relative",
            paddingBottom: "100%" /* 16:9 */,
            paddingTop: 25,
            height: 0
          }}>
          <iframe className="iframe-div"
            style={{
              position: "absolute",
              top: 0,
              left: 0
            }}
            src='https://www.youtube.com/embed/dth148PBXl4'
            frameBorder="0"
          />
        </div>
      </div>
      x
      {/* <PageUnderConstruction /> */}
    </div>
  );
}

export default Videos;
