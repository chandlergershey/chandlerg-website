import React from 'react';
import './MyResume.css';

function MyResume() {
  return (
    <div className="Resume">
      <div className="Resume-container">

        <div className="Resume-header">
          <div className="Resume-header-myname">
            <h1>Chandler Gerstenslager</h1>
          </div>
          <div className="Resume-header-contact-information">
            <p><b>chandlergerstenslager@gmail.com | </b><i>Phone number and address not displayed for privacy</i></p> 
          </div>
          <div className="Resume-header-objective">
          <b>Objective</b> 
          <p>To use my computer science expertise and exceptional graphic design skills to obtain an entry-level software developer position in a company with great culture, people, and products.</p>
          </div>
        </div>

        <div className="Resume-work-experience">
          <h1>Work Experience</h1>
          <div className="Resume-job">
            <div className="Resume-job-header">
              <b>Nationwide Children’s Hospital - iOS Mobile Software Developer</b> | Columbus, OH | Jan 2020 - April 2020
            </div>
            <div className="Resume-job-description">
              <p>• Project manager of Agile driven team which developed a mood and voice tracking app for therapy patients</p>
              <p>• Programmed in SwiftUI creating the app’s navigation bar, settings, mood selection, audio recording functionality, login and signup, and trends page</p>
              <p>• Connected app backend to AWS Cloud Services: Cognito, Amplify, AppSync, DynamoDB, S3</p>
              <p>• Managed project tasks in Jira, code version control in GitHub, and conducted weekly meetings with stakeholders</p>
            </div>
          </div>

          <div className="Resume-job">
            <div className="Resume-job-header">
              <b>JadeTrack - Front End Web Developer</b> | Columbus, OH | May 2018 - August 2019
            </div>
            <div className="Resume-job-description">
              <p>• Developer on a .NET, C# team building front-end web services for clients and our business team</p>
              <p>• Redesigned the user interface of JadeTrack’s site with HTML, CSS, JavaScript, and jQuery to allow navigation bar and data tables to format to mobile views</p>
              <p>• Built new audit reporting functionality to give customers the option to resolve, edit, and delete audit issues</p>
              <p>• Built a sign-up portal for a customer, an informational site on energy usage for a client school district, and custom widgets such as a temperature controller, energy converter, and Air Quality Index with user-inputted zip code</p>
              <p>• Redesigned C# and SQL models to allow the assignment of JadeTrack program managers to our clients</p>
            </div>
          </div>

          <div className="Resume-job">
            <div className="Resume-job-header">
              <b>ETC TechSolutions - Script Automation Intern</b> | Doylestown, OH | May 2017 - August 2017
            </div>
            <div className="Resume-job-description">
              <p>• Designed PowerShell scripts in ConnectWise Automate to provide professional IT computer support to over 100 customers</p>
              <p>• Deployed professional IT scripts to install, uninstall, and update software; manipulate computer registry settings and power settings; collect data; and create notifications for all customer computers</p>
              <p>• Conducted research on computer processors to regain strategic business positioning in hardware sales</p>
            </div>
          </div>

          

        </div>

        <div className="Resume-education">
          <h1>Education</h1>
          <div className="Resume-education-header">
            <b>The Ohio State University, Columbus, OH</b>
          </div>
          <div className="Resume-education-description">
          • Bachelor of Science in Computer Science, May 2020 | GPA: 3.200
          </div>
          <div className="Resume-education-description">
          • Minor in Design Thinking
          </div>
          <div className="Resume-education-header">
          <b>Relevant Courses</b>
          </div>
          <div className="Resume-education-description">
          • Java Programming, Capstone with iOS project, Mobile Applications in Android Studio, Web Applications in Ruby on Rails, Computer Architecture, Calculus, Computer Algorithms, Agile, Software Requirements, Game Animation Techniques, Principles of Programming Languages, Ethics
          </div>
          <div className="Resume-education-header">
          <b>Professional Organizations and Clubs</b>
          </div>
          <div className="Resume-education-description">
          • Design Editor at The Lantern (Ohio State’s school newspaper); Innovation, Creativity, and Entrepreneur Scholars Program; Design, Deploy, Develop Startup Club
          </div>

        </div>

        <div className="Resume-projects">
          <h1>Projects</h1>
          <div className="Resume-projects-description">
          • Carpool Recycling Android App: Tracks an individual’s recycling metrics, send message other users, and create recycling groups with friends. Built with Java, Kotlin, and a Firebase backend
          </div>
          <div className="Resume-projects-description">
          • Swaypoints Website: A Slack application for team voting on issues within Slack; I built the website and designed graphics (www.swaypoints.com)
          </div>
          <div className="Resume-projects-description">
          • The Gauntlet Series: My friends and I founded and hosted a 3v3 soccer tournament. I built the website (www.thegauntletseries.com), designed merchandise, advertisements, logos, and videos
          </div>

        </div>

        <div className="Resume-links">
          <h1>Links</h1>
          <div className="Resume-links-description">
          GitHub: https://github.com/chandlergershey
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default MyResume
