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
      <h1>Checkout my website portfolio!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
              {/* With a card item, we pass in a image source, text for the card, a label, 
              and a path to the site clicked */}
            <CardItem
              src='images/sway-points-home-page.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Website'
              path='www.google.com'
            />
            <CardItem
              src='images/benchmarking-energy-home-page.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Website'
              path='/benchmarking-energy'
            />
          </ul>

          <ul className='cards__items'>
              {/* With a card item, we pass in a image source, text for the card, a label, 
              and a path to the site clicked */}
            <CardItem
              src='images/the-gauntlet-series-home-page.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Website'
              path='/the-gauntlet-series'
            />
          </ul>

        <h1>My design work</h1>

          <ul className='cards__items'>
            <CardItem
              src='images/steve.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
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