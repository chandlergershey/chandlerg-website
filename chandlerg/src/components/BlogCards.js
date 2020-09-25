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

          <ul className='cards__items'>
              {/* With a card item, we pass in a image source, text for the card, a label, 
              and a path to the site clicked */}
            {/* <Link to={{ pathname: "https://www.linkedin.com/in/chandler-gerstenslager/" }} target="_blank">
              <img className="Linkedin-logo" src={LinkedInLogo} alt="LinkedIn Logo" />
            </Link> */}
            <CardItem
              src='images/blog/steve-jobs-design-brilliancy.jpeg'
              text='My Favorite Story Regarding Steve Jobs’ Design Brilliancy'
              label='Blog'
              path={{ pathname: "https://medium.com/@chandlergerstenslager/my-favorite-walter-isaacson-quote-regarding-steve-jobs-design-brilliancy-517bc4ab4ab6/" }}
              target='_blank'
            />
            <CardItem
              src='images/blog/kobe-bryant-quotes.jpeg'
              text='Reflecting on Kobe Bryant’s legacy through resonating quotes'
              label='Blog'
              path={{ pathname: "https://medium.com/@chandlergerstenslager/reflecting-on-kobe-bryants-legacy-through-resonating-quotes-712467983add/" }}
              target='_blank'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/blog/mvvm-architecture.png'
              text='SwiftUI for Beginners #1: How do I structure my Xcode project using MVVM architecture?'
              label='Blog'
              path={{ pathname: "https://medium.com/@chandlergerstenslager/swiftui-for-beginners-1-how-do-i-structure-my-xcode-project-files-using-mvvm-architecture-bdd7f9590060/" }}
              target='_blank'
            />
            <CardItem
              src='images/blog/why-i-became-a-writer.jpeg'
              text='Why I became a writer today.'
              label='Blog'
              path={{ pathname: "https://medium.com/@chandlergerstenslager/why-i-became-a-writer-today-ae3282d3915d/" }}
              target='_blank'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
