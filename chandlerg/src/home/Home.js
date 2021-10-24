import React from 'react';
import './Home.css';
import AppleLogo from '../assets/chandlergmusic/apple-logo.png';
import SpotifyLogo from '../assets/chandlergmusic/spotify-logo.png';
import SoundCloudLogo from '../assets/chandlergmusic/soundcloud-logo.png';
import ChandlerGLogo from '../assets/chandlergmusic/chandlerg-logo.png';
import DivinityCover from '../assets/chandlergmusic/divinity-cover.jpg';
import AwakenCover from '../assets/chandlergmusic/awaken-cover.jpg';
import InterstellarCover from '../assets/chandlergmusic/interstellar-cover.jpg';
import ConceptsCover from '../assets/chandlergmusic/concepts-cover.jpg';

function Home() {
  return (
    <>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div class="page-container">
        <div class="screen-container">
          <div class="header-text">
            <img class="chandlerg-logo" src={ChandlerGLogo} />
          </div>

          <div class="music-container">
            <div class="description-container">
              <h1 class="music-text song-title">
                Divinity
              </h1>
              <p class="music-text song-artist">
                Chandler G
              </p>
              <a href="https://soundcloud.com/chandler_g/divinity1?si=46c8824360604e5d9ddb557f9efb04a9">
                <img class="streaming-logo soundcloud-logo" src={SoundCloudLogo} />
              </a>
            </div>
            <div class="cover-container">
              <img class="cover" src={DivinityCover} />
            </div>
          </div>
          <div class="music-container">
            <div class="description-container">
              <h1 class="music-text song-title">
                Interstellar
              </h1>
              <p class="music-text song-artist">
                Chandler G
              </p>
              <a href="https://open.spotify.com/track/5trco32KWsEstbJuW0VKp5?si=e18f40ef5fed49da">
                <img class="streaming-logo spotify-logo" src={SpotifyLogo} />
              </a>
              <a href="https://music.apple.com/us/album/interstellar/1562591095?i=1562591096">
                <img class="streaming-logo apple-logo" src={AppleLogo} />
              </a>
              <a href="https://soundcloud.com/chandler_g/interstellar?si=d6c3a094282a47059140a0616a631a18">
                <img class="streaming-logo soundcloud-logo" src={SoundCloudLogo} />
              </a>
            </div>
            <div class="cover-container">
              <img class="cover" src={InterstellarCover} />
            </div>
          </div>
          <div class="music-container">
            <div class="description-container">
              <h1 class="music-text song-title">
                Concepts
              </h1>
              <p class="music-text song-artist">
                Chandler G
              </p>
              <a href="https://open.spotify.com/track/4Qo3woPeswg41rjEr8SLyN?si=e2bab35f6a2c4166">
                <img class="streaming-logo spotify-logo" src={SpotifyLogo} />
              </a>
              <a href="https://music.apple.com/us/album/concepts/1548223978?i=1548223979">
                <img class="streaming-logo apple-logo" src={AppleLogo} />
              </a>
              <a href="https://soundcloud.com/chandler_g/concepts?si=b3387b3c2cb64fa09d014daf97fa5059">
                <img class="streaming-logo soundcloud-logo" src={SoundCloudLogo} />
              </a>
            </div>
            <div class="cover-container">
              <img class="cover" src={ConceptsCover} />
            </div>
          </div>
          <div class="music-container">
            <div class="description-container">
              <h1 class="music-text song-title">
                Awaken
              </h1>
              <p class="music-text song-artist">
                Chandler G
              </p>
              <a href="https://open.spotify.com/track/4t9ICFZkpANhaBEOYlnhgu?si=8ee541e1f3664fcc">
                <img class="streaming-logo spotify-logo" src={SpotifyLogo} />
              </a>
              <a href="https://music.apple.com/us/album/awaken/1529772581?i=1529772583">
                <img class="streaming-logo apple-logo" src={AppleLogo} />
              </a>
              <a href="https://soundcloud.com/chandler_g/awaken?si=5b87d5053b8448ba896319385bcd4734">
                <img class="streaming-logo soundcloud-logo" src={SoundCloudLogo} />
              </a>
            </div>
            <div class="cover-container">
              <img class="cover" src={AwakenCover} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
