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
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactPlayer from 'react-player';
import { SocialIcon } from 'react-social-icons';
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
          <Card.Img variant="top" src={visualizer} />
          <Card.Body>
            <Card.Title>Sorting Algorithm Visualizer</Card.Title>
            <Card.Text>
              Web application that allows you to browse through and view some famous sorting algorithms.
            </Card.Text>
            <Card.Text>
              Created using Python (Flask) for the backend and Javascript for the sorting algorithms and visualization.
            </Card.Text>
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
          <Card.Img variant="top" src={verticalscope} />
          <Card.Body>
            <Card.Title>VerticalScope - Software Engineering Intern</Card.Title>
            <Card.Text>
              Developed features and resolved issues for a platform serving 1 billion weekly requests from 100 million monthly active users
            </Card.Text>
            <Card.Text>
              Developed an automatic Jenkins environment cleanup system with fellow co-op students to save time and resources
            </Card.Text>
            <Card.Text>
              Worked with PHP, JavaScript, Python, Jenkins, MySQL, Kubernetes throughout the term
            </Card.Text>
            <Button variant="primary" href="https://www.avsforum.com/">View Demo</Button>
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
            <Card.Text>
              Fully developed a Question Bank web application from scratch with 3 other co-op students which is currently being used by professors at the University of Waterloo to create and store questions/assessments.
            </Card.Text>
            <Card.Text>
              Created using React on the frontend and Express for the backend, along with PostgreSQL.
            </Card.Text>
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
  