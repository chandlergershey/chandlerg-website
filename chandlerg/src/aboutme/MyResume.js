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
            <p>chandlergerstenslager@gmail.com</p>
          </div>
          <div className="Resume-header-objective">
          Objective: To use my computer science expertise and exceptional graphic design skills to obtain an entry-level software developer position in a company with great culture, people, and products.
          </div>
        </div>

        <div className="Resume-work-experience">
          <h1>Work Experience</h1>
          <div className="Resume-job">
            <div className="Resume-job-header">
              Nationwide Children’s Hospital - iOS Mobile Software Developer | Columbus, OH | Jan 2020 - April 2020
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
              Nationwide Children’s Hospital - iOS Mobile Software Developer | Columbus, OH | Jan 2020 - April 2020
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
              ETC TechSolutions - Script Automation Intern | Doylestown, OH | May 2017 - August 2017
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
            The Ohio State University, Columbus, OH
          </div>
          <div className="Resume-education-description">
          • Bachelor of Science in Computer Science, May 2020 | GPA: 3.200
          </div>
          <div className="Resume-education-description">
          • Minor in Design Thinking
          </div>
          <div className="Resume-education-header">
          Relevant Courses
          </div>
          <div className="Resume-education-description">
          • Java Programming, Capstone with iOS project, Mobile Applications in Android Studio, Web Applications in Ruby on Rails, Computer Architecture, Calculus, Computer Algorithms, Agile, Software Requirements, Game Animation Techniques, Principles of Programming Languages, Ethics
          </div>
          <div className="Resume-education-header">
          Professional Organizations and Clubs
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
