import React from 'react';
import './AboutMe.css';
import '../Fonts.css';
import ChandlerHeadshot from '../assets/pngs/chandlergerstenslager.png';
import LinkedInLogo from '../assets/icons/linkedin-logo.png';
import { Link } from 'react-router-dom';


function AboutMe() {
  return (
    <div className="">
      <div className="padding"></div>
      <p className="Hello-text">Hi there!</p>
      <img className="Chandler-headshot" src={ChandlerHeadshot} alt="Chandler Gerstenslager" />
      <div>
        <Link to={{ pathname: "https://www.linkedin.com/in/chandler-gerstenslager/" }} target="_blank">
          <img className="Linkedin-logo" src={LinkedInLogo} alt="LinkedIn Logo" />
        </Link>
        <h3 className="aboutme-text-linkedin">Click the icon to see my LinkedIn profile</h3>
        <Link to='/aboutme/resume'><h1 className="resume-text-link">Click here to see my resume</h1></Link>
        
      </div>
      
      {/* <p className="text">My name is Chandler Gerstenslager and I'm a graduate of the Ohio State University. I received a Bachelor of Science in Computer & Information Science and a minor in Design.</p> */}
    </div>
  );
}

export default AboutMe;
