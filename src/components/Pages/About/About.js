import React from 'react';
import './About.css';import { Card, Col, Row } from 'react-bootstrap';

// import team1 from './team-1.jpg';
// import team2 from './team-2.jpg';
// import team3 from './team-3.jpg';
// import aboutBanner from '../../Pages/Images/about-banner.jpg';
import title from '../../Pages/Images/title-icon.png';
import Doctors from '../../Pages/Doctors/Doctors';

// Font Awesome useing.
import { FcAssistant } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";


const About = () => {
    return (
      <div>
        <div className="pt-5 pb-5 text-center">
          <div className="section-title">
             <h2 className="fs-1">OUR SPECIALITIES</h2>
             <div class="title-icon">
               <img class="mb-10" src={title} alt="title"/>
             </div>
             <p className="">Since its founding Delmont has been providing its patients with the full medical care, encompassing outpatients services, is neurology.</p>
          </div>
        </div>
          <div className="About-banner">
          <div className="Extra-course container">
         <Row xs={1} md={4} className="g-4 mt-4 text-center">
          <Col>
           <Card className="p-4 shadow-sm" text="dark">
              <div className="m-auto fs-3 text-success">
              <FcAssistant />
              </div>
              <h4>Orthopaedics</h4>
              <Card.Text>Orthopaedics is the medical specialty that focuses on injuries and disease.</Card.Text>
            </Card>
           </Col>
           <Col>
           <Card className="p-4 shadow-sm">
              <div className="m-auto fs-3 text-success">
              <FcBusinessman />
              </div>
              <h4>Cardiology</h4>
              <Card.Text>Cardiology is the study and treatment of disorders of the heart blood vessels.</Card.Text>
            </Card>
           </Col>
           <Col>
           <Card className="p-4" text="dark">
              <div className="m-auto fs-3 text-success">
                <FcCustomerSupport />
              </div>
              <h4>Neurology</h4>
              <Card.Text>Neurology is the branch of medicine concerned with the study and treatment.</Card.Text>
            </Card>
           </Col>
           <Col>
           <Card className="p-4" text="dark">
              <div className="m-auto fs-3 text-success">
                <FcCustomerSupport />
              </div>
              <h4>Dental</h4>
              <Card.Text>The field of dentistry or dental medicine includes teeth as well as other.</Card.Text>
            </Card>
           </Col>
         </Row>
        </div>
         </div>
         
       <Doctors></Doctors>

        {/* <div className="professional mt-5 mb-5">
          <div class="section-heading center-heading">
                    <span class="subheading">Best Expert Team</span>
                    <h3>Our Professional Team</h3>
                    <p>The ultimate planning solution for busy women who want to reach their personal goals</p>
                </div>
        </div>
        <div className="container Team-members mt-5 mb-5">
        <Row xs={1} md={3} className="g-4">
            <Col>
            <Card className="">
            <Card.Img className="cardImg" variant="top" src={team1} />
            <Card.Body>
              <Card.Title>Harish Ham</Card.Title>
              <p className="text-muted">CEO, Developer</p>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className="">
            <Card.Img className="cardImg" variant="top" src={team2} />
            <Card.Body>
              <Card.Title>Tanvir Hasan</Card.Title>
              <p className="text-muted">Market Researcher</p>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className="">
            <Card.Img className="cardImg" variant="top" src={team3} />
            <Card.Body>
              <Card.Title>Mikele John</Card.Title>
              <p className="text-muted">Market Researcher</p>
            </Card.Body>
          </Card>
          </Col>
         </Row>
        </div>
       */}

      </div>
    );
};

export default About;