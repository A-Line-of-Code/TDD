import React, {useState} from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Home} from "./Home"
import {About} from "./About"


export default function App() {


  return (
    <Router>
      <div>
        
      <nav class="navbar">
            <div class="brand-title"><Link to="/">Password Generator</Link></div>                   
            <div id="navbar-links" >
              <ul>
              <li>
              <Link to="/about">Testing</Link>
              </li>
              <li><a href="https://portfoliosky.azurewebsites.net/">
                Portfolio
              </a></li>           
              <li><a href="https://github.com/A-Line-of-Code/TDD" target="_blank">
                Source Code
              </a></li>
              </ul>
            </div>
      </nav>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
