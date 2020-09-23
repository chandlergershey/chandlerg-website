import React from 'react';
import YouTube from 'react-youtube';
 
class YouTubeVideo extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
 
    return <YouTube videoId="dth148PBXl4" opts={opts} onReady={this._onReady} />;
    //https://youtu.be/dth148PBXl4
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}