import React from 'react';
import './style.css';
import Enz from './enz';

export default function App() {
  return (
    <div>
          <nav class="navbar">
            <div class="brand-title">Testing</div>        
            <div class="navbar-links">
              <ul>
                <li><a href="https://github.com/A-Line-of-Code/TDD" target="_blank">
                  Source Code
                </a></li>
              </ul>
            </div>
          </nav>
      <Enz />
    </div>  
  );
}

