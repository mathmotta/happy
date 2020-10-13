import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg';



function Landing (){
    return (
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy" />

          <main>
            <h1>
              Bring happiness to the world
            </h1>
            <p>Visit orphanages and change the world for a little one (even if for just a day)</p>

            <div className="location">
              <strong>Oeiras</strong>
              <span>Lisboa</span>
            </div>

            <Link to="/app" className="enter-app">
              <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
            </Link>
          </main>
        </div>
    </div>
    );
}

export default Landing;