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
            <Route path="/aboutme/resume" exact component={Resume}/>
          </Switch>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
