import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import background from "../images/background.png";
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import visualizer from "../images/visualizer.png";
import infobase from "../images/infobase.jpg"
import donatr from "../images/donatr.png"
import questionbank from "../images/questionbank.png"
import verticalscope from "../images/verticalscope.png"
import fordPro from "../images/fordPro.png"
import msai from "../images/msai.png"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactPlayer from 'react-player';
import { SocialIcon } from 'react-social-icons';
import Descartes from "../images/descartes.png"
import CS50x from '../images/CS50x.png';

class Header extends Component {
  render() {
    return(
      <div style={{
        width: '100vw',
        height: '7vh',
        backgroundColor: 'rgb(51, 58, 64)'
      }}>

      </div>
    );
  }
}

export default class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

    state = {
      goToSlide: 0,
      offsetRadius: 2,
      showNavigation: true,
      config: config.gentle
    };

    slides = [
      {
        key: uuidv4(),
        content: 
        <Card style={{ width: '50vw' }}>
          <Card.Img variant="top" src={msai} />
          <Card.Body>
            <Card.Title>AI Stock Analyzer</Card.Title>
            <Card.Text>Production Level Application utilizing AI and Chat GPT API to analyze recent news and give a real-time opinion on thousands of stocks</Card.Text>
            <Card.Text>Developed using OpenAI API, React, Express and Heroku</Card.Text>
            <Button variant="primary" href="https://my-stock-ai-frontend.vercel.app/">View Demo</Button>
            <Button variant="primary" className="buttonCode" href="https://github.com/mkanemy/my-stock-ai-backend">Backend Code</Button>
            <Button variant="primary" className="buttonCode" href="https://github.com/mkanemy/my-stock-ai-frontend">Frontend Code</Button>
          </Card.Body>
        </Card>
      },
      {
        key: uuidv4(),
        content: 
        <Card style={{ width: '50vw' }}>
          <Card.Img variant="top" src={visualizer} />
          <Card.Body>
            <Card.Title>Algorithm Visualizer</Card.Title>
            <Card.Text>
              React web application that allows you to visualize various famous algorithms
            </Card.Text>
            <Card.Text>
            Currently includes Sorting (Bubble, Selection, Insertion, Merge, Quick) and Path Finding (Dijkstras)
            </Card.Text>
            <Button variant="primary" href="https://master--gorgeous-custard-1f55cc.netlify.app/">Try it out</Button>
            <Button variant="primary" className="buttonCode" href="https://github.com/mkanemy/Visualizer">Code</Button>
          </Card.Body>
        </Card>
      },
      {
        key: uuidv4(),
        content: 
        <Card style={{ width: '50vw' }}>
          <Card.Img variant="top" src={verticalscope} />
          <Card.Body>
            <Card.Title>VerticalScope - Software Engineering Intern</Card.Title>
            <Card.Text>Developed features and resolved issues for a platform serving 1 billion weekly requests from 100 million monthly active users</Card.Text>
            <Card.Text>Developed a ’Guest Reply’ feature deployed on over 2000 sites that has boosted sign up rates by allowing guests of a forum to reply and sign up in one go</Card.Text>
            <Card.Text>Developed an automatic environment cleanup system using Jenkins to save time and resources</Card.Text>
            <Card.Text>Worked with PHP, JavaScript, Python, Jenkins, MySQL and Kubernetes throughout the term</Card.Text>
            <Button variant="primary" href="https://www.avsforum.com/">View Demo</Button>
          </Card.Body>
        </Card>
      },
      {
        key: uuidv4(),
        content: 
        <Card style={{ width: '50vw' }}>
          <Card.Img variant="top" src={ Descartes } />
          <Card.Body>
            <Card.Title>Descartes Systems Group</Card.Title>
            <Card.Text>Developed features and resolved issues on a B2B Global Logistics Network connecting over 160 countries</Card.Text>
            <Card.Text>Developed a Health Monitoring application that has decreased downtime by ensuring that all applications and their dependencies are healthy on all servers</Card.Text>
            <Card.Text>Developed a favourites feature for the main homepage that has increased user satisfaction by allowing users to favourite applications so they are more accessible</Card.Text>
            <Card.Text>Worked with Model-View-Controller in the .NET environment using C#, SQL, Razor and JavaScript</Card.Text>
            <Popup trigger={<Button variant="primary">View Demo</Button> } modal >
              <ReactPlayer url='https://youtu.be/92XJTfT1-pw' />
            </Popup>
          </Card.Body>
        </Card>
      },
      {
        key: uuidv4(),
        content: 
        <Card style={{ width: '50vw' }}>
          <Card.Img variant="top" src={infobase} />
          <Card.Body>
            <Card.Title>InfoBase</Card.Title>
            <Card.Text>
              Web application to allow family members to stay connected during World War 2.
            </Card.Text>
            <Card.Text>
              Recieved third place overall at ByteHacks 2020!
            </Card.Text>
            <Button variant="primary" href="https://devpost.com/software/infobase">View Demo</Button>
          </Card.Body>
        </Card>
      },
      {
        key: uuidv4(),
        content: 
        <Card style={{ width: '50vw' }}>
          <Card.Img variant="top" src={donatr} />
          <Card.Body>
            <Card.Title>Donatr</Card.Title>
            <Card.Text>
              Web application that matches user with charities from whatever country they desire.
            </Card.Text>
            <Card.Text>
              Received first place in the humanitarianism track of Hack the World 2020!
            </Card.Text>
            <Button variant="primary" href="https://devpost.com/software/donatr">View Demo</Button>
          </Card.Body>
        </Card>
      },
      {
        key: uuidv4(),
        content: 
        <Card style={{ width: '50vw' }}>
          <Card.Img variant="top" src={questionbank} />
          <Card.Body>
            <Card.Title>University of Waterloo - Online Learning Assistant</Card.Title>
            <Card.Text>Fully developed an Assessment Creation Web Application that is currently being used throughout the faculty of Mathematics to create and store LaTeX assessments</Card.Text>
            <Card.Text>Worked with React, Node, Express, PostgreSQL, LaTeX and Git throughout the term</Card.Text>
            <Popup trigger={<Button variant="primary">View Demo</Button> } modal>
              <ReactPlayer url='https://youtu.be/YQUCUO5i510' />
            </Popup>
          </Card.Body>
        </Card>
      },
      {
        key: uuidv4(),
        content: 
        <Card style={{ width: '50vw' }}>
          <Card.Img variant="top" src={fordPro} />
          <Card.Body>
            <Card.Title>Ford Motor Company - Software Developer</Card.Title>
            <Card.Text>Developed Full Stack Business Tools used by vehicle dealers to manage and make large orders of vehicles</Card.Text>
            <Card.Text>Developed a deployment pipeline utilizing GCP CloudRun that promotes deployment revisions and sends automatic messages to slack of which features have been deployed </Card.Text>
            <Card.Text>Worked with Spring, React, Tekton, GCP, Akamai, Kubernetes, Docker, Shell and Postgres throughout the term</Card.Text>
            <Button variant="primary" href="https://www.fordpro.com/en-us/">View Demo</Button>
          </Card.Body>
        </Card>
      }
    ].map((slide, index) => {
      return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });
  
    onChangeInput = e => {
      this.setState({
        [e.target.name]: parseInt(e.target.value, 10) || 0
      });
    };
  
    render() {

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
                          <a class="nav-link" href="../home/#/">Home</a>
                      </li>
                      <li class="nav-item active">
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
                        <SocialIcon url="https://github.com/mkanemy" bgColor="white" fgColor="rgb(51, 58, 64)" style={{height: 35, width: 35}}/>
                      </li>
                      <li class="nav-item">
                        <SocialIcon url="mailto:mkanemy@uwaterloo.ca" className="email" style={{height: 35, width: 35}}/>
                      </li>
                    </div>
                  </ul>
              </div>
          </nav>

            <div style={{
              width: '85vw',
              height: '93vh', 
              margin: '0 auto',
              marginTop: '-3vh'
            }}>
                <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius={this.state.offsetRadius}
                    showNavigation={this.state.showNavigation}
                    animationConfig={this.state.config}
                />
              </div>
          </div>
        </html>
      );
    }
  }
  