import React from 'react';
import './AboutMe.css';
import '../Fonts.css';
import ChandlerHeadshot from '../assets/pngs/chandlergerstenslager.png';
import LinkedInLogo from '../assets/icons/linkedin-logo.png';


function AboutMe() {
  return (
    <div className="">
      <div className="padding"></div>
      <p className="Hello-text">Hi there!</p>
      <img className="Chandler-headshot" src={ChandlerHeadshot} alt="Chandler Gerstenslager" />
      <img className="Linkedin-logo" src={LinkedInLogo} alt="LinkedIn Logo" />
      <p className="text">My name is Chandler Gerstenslager and I'm a graduate of the Ohio State University. I received a Bachelor of Science in Computer & Information Science and a minor in Design.</p>
      <p className="text"> I am currently seeking a web developer job in the Chareston, SC area.</p>
    </div>
  );
}

export default AboutMe;
