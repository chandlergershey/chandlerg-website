/*
Cards.js - contains the cards to the portfolio.
A card item is a single card

*/

import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Websites I've built</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
              {/* With a card item, we pass in a image source, text for the card, a label, 
              and a path to the site clicked */}
            {/* <Link to={{ pathname: "https://www.linkedin.com/in/chandler-gerstenslager/" }} target="_blank">
              <img className="Linkedin-logo" src={LinkedInLogo} alt="LinkedIn Logo" />
            </Link> */}
            <CardItem
              src='images/sway-points-home-page.png'
              text='An informative site for a Slack tool that enables weighted voting'
              label='Website'
              path={{ pathname: "https://swaypoints.com/" }}
              target='_blank'
            />
            <CardItem
              src='images/benchmarking-energy-home-page.png'
              text='A sign up page to benchmark energy usage in buildings'
              label='Website'
              path={{ pathname: "https://benchmarking.energy/" }}
              target='_blank'
            />
          </ul>

          <ul className='cards__items'>
              {/* With a card item, we pass in a image source, text for the card, a label, 
              and a path to the site clicked */}
            <CardItem
              src='images/the-gauntlet-series-home-page.png'
              text='A landing page for the 3v3 soccer tournament my friends and I hosted'
              label='Website'
              path={{ pathname: "https://thegauntletseries.com" }}
              target='_blank'
            />
          </ul>

        <h1>My design work</h1>

          <ul className='cards__items'>
            <CardItem
              src='images/steve.jpg'
              text='A Steve Jobs drawing I made in my design class'
              label='Drawing'
              path='/design/steve'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
