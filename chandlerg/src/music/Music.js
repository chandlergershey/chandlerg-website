import React from 'react';
import './Music.css';
import PageUnderConstruction from '../components/PageUnderConstruction';
import AwakenCover from '../assets/portfolio/awaken/awaken-promo.jpg'

function Music() {
  return (
    <div className="">
      <p className="Hello-text">Chandler G Music!</p>
      {/* <img src={AwakenCover} className="Awaken-cover" alt="Awaken cover" /> */}

      <div>
        <iframe width="100%" height={300} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/884358778&color=%23e4c0d8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" /><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/chandler_g" title="Chandler G" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Chandler G</a> · <a href="https://soundcloud.com/chandler_g/awaken" title="Awaken" target="_blank" style={{color: '#cccccc', textDecoration: 'none'}}>Awaken</a></div>
      </div>

      <PageUnderConstruction />
    </div>
  );
}

export default Music;
