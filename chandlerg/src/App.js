import React from 'react';
import Navbar from './components/navbar/Navbar';

import Home from './home/Home';
import Design from './design/Design';
import Music from './music/Music';
import Store from './store/Store';
import Blog from './blog/Blog';
import Videos from './videos/Videos';
import AboutMe from './aboutme/AboutMe';

import Steve from './design/portfolio_pages/Steve';
import OdellBeckham from './design/portfolio_pages/OdellBeckham';
import PatentTroll from './design/portfolio_pages/PatentTroll';

import Resume from './aboutme/MyResume';

// npm run deploy

import './App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <div className="Navbar-overlap-padding">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/design" exact component={Design}/>
            <Route path="/music" exact component={Music}/>
            <Route path="/store" exact component={Store}/>
            <Route path="/blog" exact component={Blog}/>
            <Route path="/videos" exact component={Videos}/>
            <Route path="/aboutme" exact component={AboutMe}/>
            <Route path="/design/steve" exact component={Steve}/>
            <Route path="/design/odell" exact component={OdellBeckham}/>
            <Route path="/design/patent-troll" exact component={PatentTroll}/>
            <Route path="/design/the-gauntlet-series-2018" exact component={Steve}/>
            <Route path="/design/the-gauntlet-series-2019" exact component={Steve}/>
            <Route path="/design/awaken-painting" exact component={Steve}/>
            <Route path="/design/gerstenslager-properties" exact component={Steve}/>
            <Route path="/design/the-801-vibe" exact component={Steve}/>
            <Route path="/aboutme/resume" exact component={Resume}/>
          </Switch>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
