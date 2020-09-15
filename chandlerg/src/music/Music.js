import React from 'react';
import './Music.css';
import PageUnderConstruction from '../components/PageUnderConstruction';
import AwakenCover from '../assets/portfolio/awaken/awaken-promo.jpg'

function Music() {
  return (
    <div className="">
      <p className="Hello-text">Chandler G Music!</p>
      <img src={AwakenCover} className="Awaken-cover" alt="Awaken cover" />
      <PageUnderConstruction />
    </div>
  );
}

export default Music;
