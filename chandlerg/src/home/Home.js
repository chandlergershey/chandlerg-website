import React from 'react';
import './Home.css';
import ChandlerHeadshot from '../assets/pngs/chandlergerstenslager.png';

function Home() {
  return (
    <div className="">
      <div className="padding"></div>
      <p className="Hello-text">Hi there!</p>
      {/* <img className="Chandler-headshot" src={ChandlerHeadshot} alt="Chandler Gerstenslager" /> */}
      <p className="test">My name is Chandler Gerstenslager and welcome to my website! Instead of building my site from a template, I've chosen to build it from scratch. It's built with React JS and hosted on Amazon Web Services. This site is far from done and I'm excited to continue building it up. My immediate focus is making the site mobile friendly, following best practices for file organization, and having clean design. My goal with the site is to show employers that I can bring tremendous value and vision to their company. The site will also be a portfolio of my work.</p>
      <p className="test">I'm a graduate of the Ohio State University. I received a Bachelor of Science in Computer & Information Science and a minor in Design. Click the About Me tab to learn more about my experience.</p>
      <p className="test">I'm currently looking for a web developer position in Charleston, South Carolina.</p>
    </div>
  );
}

export default Home;
