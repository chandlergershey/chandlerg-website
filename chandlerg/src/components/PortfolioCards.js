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
      
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <h1 className="Portfolio-section-header">Websites</h1>
          <ul className='cards__items'>
              {/* With a card item, we pass in a image source, text for the card, a label, 
              and a path to the site clicked */}
            {/* <Link to={{ pathname: "https://www.linkedin.com/in/chandler-gerstenslager/" }} target="_blank">
              <img className="Linkedin-logo" src={LinkedInLogo} alt="LinkedIn Logo" />
            </Link> */}
            <CardItem
              src='images/spacex-website.jpg'
              text='A SpaceX website to display rocket launch historical data'
              label='Website'
              path={{ pathname: "https://spacex.chandlerg.com/" }}
              target='_blank'
            />
            <CardItem
              src='images/sway-points-home-page.png'
              text='A landing page for Sway Points - a Slack tool that enables weighted voting'
              label='Website'
              path={{ pathname: "https://www.swaypoints.chandlerg.com/" }}
              target='_blank'
            />
            <CardItem
              src='images/the-gauntlet-series-home-page.png'
              text='Landing page for The Gauntlet Series'
              label='Website'
              path={{ pathname: "https://thegauntletseries.com" }}
              target='_blank'
            />
          </ul>

          <ul className='cards__items'>
              {/* With a card item, we pass in a image source, text for the card, a label, 
              and a path to the site clicked */}
            
          </ul>

        <h1 className="Portfolio-section-header">Designs</h1>

          <ul className='cards__items'>
            <CardItem
              src='images/steve.jpg'
              text='Steve Jobs'
              label='Drawing'
              path='/design/steve'
            />
            <CardItem
              src='images/obj.jpg'
              text='Odell Beckham Jr.'
              label='Drawing'
              path='/design/obj'
            />
            <CardItem
              src='images/patent-troll.jpg'
              text='Patent troll drawing'
              label='Drawing'
              path='/design/patent-troll'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/thegauntletseries2018.jpg'
              text='The Gauntlet Series 2018 Poster'
              label='Poster'
              path='/design/steve'
            />
            <CardItem
              src='images/thegauntletseries2019.jpg'
              text='The Gauntlet Series 2019 Poster'
              label='Poster'
              path='/design/steve'
            />
            <CardItem
              src='images/awaken-painting.jpg'
              text='Promo painting for my song "Awaken"'
              label='Painting'
              path='/design/steve'
            />
          </ul>

        <h1 className="Portfolio-section-header">Logos</h1>

          <ul className='cards__items'>
            <CardItem
              src='images/the801vibe-black-background.png'
              text='The 801 Vibe logo'
              label='Logo'
              path='/design/steve'
            />
            <CardItem
              src='images/gp_jpeg_white_background.jpg'
              text='Gerstenslager Properties logo'
              label='Logo'
              path='/design/steve'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
