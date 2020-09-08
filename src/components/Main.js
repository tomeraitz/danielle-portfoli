import React from 'react';
import { IoIosPhoneLandscape } from "react-icons/io";
const NavBar = React.lazy(() => import('./NavBar'));
const Home = React.lazy(() => import('./Home'));



function Main() {
    return (
        <div>
          <div className="App" id="app" >
            <div className="main">
              <NavBar />
              <Home />
            </div>
          </div>
          <div id="rotate-app">
              <h1>Plese rotate Your device</h1>
              <IoIosPhoneLandscape className="phone-rotate"/>
          </div>
        </div>
    );
  }

  export default Main;