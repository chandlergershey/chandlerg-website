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
      <p className="text">Hi, I'm Chandler Gerstenslager (pictured in the white tee above) and welcome to my website! Instead of building my site from a template, I've chosen to build it from scratch. It's built with React JS and hosted on AWS Amplify. This site is far from done and I'm excited to continue building it up. My immediate focus is making the site mobile friendly (please view it on a phone), retaining a clean UI/UX, and continue adding my work to the portfolio. If you're an employer, my #1 goal with the site is to show you that I can bring value and vision to their company.</p>
      <p className="text">I'm a Spring 2020 graduate of the Ohio State University. I received a Bachelor of Science in Computer & Information Science and a minor in Design. Click the About Me tab to learn more about my experience.</p>
      <p className="text">I'm currently looking for a web developer position in Charleston, South Carolina! I would also be happy to take a job anywhere in the country including Columbus or Akron, Ohio. </p>
      <hr className="hr-element"/>
      <div className="bugs-container">
        <p className=""><i>Current bugs with my site as of 09/25/2020 for employer reference:</i></p>
        <p className="">(GitHub project - https://github.com/chandlergershey/chandlerg-website)</p>
        <p className="">• Navbar element not formatted correctly in Internet Explorer. (Solution: Continue tweaking CSS)</p>
        <p className="">• Refreshing the page hosted in AWS Amplify sometimes causes the page to not load. (Potential solution: Add API to Amplify backend and continue configuring React JS extension in my project)</p>
        <p className="">• Going from mobile view to desktop view keeps the dropdown menu icon in navbar. (Solution: Use Javascript DOM features to control the display of the icon)</p>
      </div>
      
    </div>
  );
}

export default Home;
