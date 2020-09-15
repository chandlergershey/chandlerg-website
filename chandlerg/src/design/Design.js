import React from 'react';
import './Design.css';
import PageUnderConstruction from '../components/PageUnderConstruction';
import SteveJobsImage from '../assets/portfolio/steve/steve.jpg';

function Design() {
  return (
    <div className="">
      <p className="Hello-text">My Design!</p>
      <img src={SteveJobsImage} className="Steve-jobs-drawing" alt="Steve Jobs drawing" />
      <PageUnderConstruction />
      
    </div>
  );
}

export default Design;
