import React from 'react';
import './Home.css';
import ChandlerHeadshot from '../assets/pngs/chandlergerstenslager.png';
import ChandlerAndZack from '../assets/jpgs/chandler-and-zack.jpg';

function Home() {
  return (
    <div className="">
      <div className="padding"></div>
      <p className="Hello-text">Hi there!</p>
      <div className="image-container">
        <img className="Chandler-and-zack-image" src={ChandlerAndZack} alt='Chandler and Zack' />
      </div>
      
      {/* <img className="Chandler-headshot" src={ChandlerHeadshot} alt="Chandler Gerstenslager" /> */}
      <p className="text">Hi, my name is Chandler Gerstenslager and I am a software developer in Charleston, South Carolina.</p>
      <p className="text">I graduated from the Ohio State University in the Spring of 2020. I received a Bachelor of Science in Computer & Information Science and a minor in Design.</p>
      <p className="text">I am very passionate in the art world. I am a music producer, web developer, writer, and graphic designer. I have interests in fine arts and fashion too. I hope one day to create art that inspires people and interactive tools that improve people's lives.</p>
      <p className="text"></p>
      {/* <hr className="hr-element"/> */}
      {/* <div className="bugs-container">
        <p className=""><i>Current bugs with my site as of 09/25/2020 for employer reference:</i></p>
        <p className="">(GitHub project - https://github.com/chandlergershey/chandlerg-website)</p>
        <p className="">• Navbar element not formatted correctly in Internet Explorer. (Solution: Continue tweaking CSS)</p>
        <p className="">• Refreshing the page hosted in AWS Amplify sometimes causes the page to not load. (Potential solution: Add API to Amplify backend and continue configuring React JS extension in my project)</p>
        <p className="">• Going from mobile view to desktop view keeps the dropdown menu icon in navbar. (Solution: Use Javascript DOM features to control the display of the icon)</p>
      </div> */}
      
    </div>
  );
}

export default Home;
