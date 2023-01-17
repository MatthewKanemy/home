import React, { useEffect } from "react";
import background from "../images/background.png";
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactjs-popup/dist/index.css';
import { SocialIcon } from 'react-social-icons';
import Typewriter from "typewriter-effect";
import Typing from 'react-typing-animation';

function Home() {
  
  return (
    <html>
          <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
          </head>
          <div style={{
              height: '100vh',
              width: '100vw',
              backgroundImage: `url("${background}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
          }}>

            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
              <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                  <ul class="navbar-nav mr-auto">
                      <li class="nav-item">
                          <a class="nav-link active" href="../home/#/">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="../home/#/portfolio">Portfolio</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="../home/#/resume">Resume</a>
                      </li>
                  </ul>
              </div>
              <div class="mx-auto order-0">
                  <a class="navbar-brand mx-auto" href="../home/#/">Matthew Kanemy</a>
              </div>
              <div class="navbar-collapse collapse w-100 order-2 dual-collapse2">
                  <ul class="navbar-nav ml-auto">
                    <div style={{
                      display: 'inline-grid',
                      gridTemplateColumns: 'repeat(3, auto)',
                      columnGap: '16px'
                    }}>
                      <li class="nav-item">
                          <SocialIcon url="https://www.linkedin.com/in/matthewkanemy/" style={{height: 35, width: 35}}/>
                      </li>
                      <li class="nav-item">
                        <SocialIcon url="https://github.com/MatthewKanemy" bgColor="white" fgColor="rgb(51, 58, 64)" style={{height: 35, width: 35}}/>
                      </li>
                      <li class="nav-item">
                        <SocialIcon url="mailto:mkanemy@uwaterloo.ca" className="email" style={{height: 35, width: 35}}/>
                      </li>
                    </div>
                  </ul>
              </div>
          </nav>

            <div style={{
              height: '75vh',
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              color: 'white',
              alignItems: 'center',
              fontSize: '4em'
            }}>
              <Typewriter
  
              onInit={(typewriter)=> {
                typewriter
                .typeString("Hi, I'm Matt!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Welcome to my <a href='./#/portfolio'>portfolio!</a>")
                .start();
              }}

              />
            </div>
          </div>
        </html>
  );
}

export default Home;