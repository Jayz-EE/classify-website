import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Tech_Support from "../assets/images/Tech_Support.png";
import CardComponent from "../components/card_components.jsx";
import EmpoweringComponent from "../components/empowering_section.jsx";
import StyledButton from "../components/styled_button.jsx";
import { CARDCONTENTS } from "../data/card_contents.jsx";
import { contents } from "../data/empowering_contents.jsx";
import ScrollAnimation from 'react-animate-on-scroll';
import Typewriter from 'typewriter-effect';
import "../styles/Home.scss";
import 'animate.css'
import Images from "../assets/images/image.jsx";
import Language from "../components/Language.jsx";
import { FRONTEND, FULLSTACK, OTHERS } from "../data/language";
import { Link } from 'react-router-dom';

export default function LandingHome({ scrollTop }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

  return (
    <div>
      <div id="landingHome">
        <div className="background-overlay">
          <Container className="overflowX-md-none">
            <Row className="justify-content-center align-items-center mb-5">
              <Col xs={12} sm={6} md={6} lg={6} className="intro-section-container mb-2">
                <h1 className="text-title w-100 mb-3">
                  <span>Empowered</span>
                  <span>Learning at</span>
                  <span>Your Fingertips</span>
                </h1>
                <p id="intro-paragraph" className={isVisible ? "visible" : ""}>
                Classify Inc. revolutionizes e-learning with innovative cloud-based solutions, empowering educators and learners to succeed. We’re dedicated to saving time, enhancing performance, and transforming education worldwide. Let’s shape the future together!
                </p>
                <Col className="d-flex justify-content-center button-demo">
                  <StyledButton button_name={"Learn More"} />
                </Col>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6} id="tech_support">
                <img src={Tech_Support} alt="Tech Support" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="cards-section">
        <div className="pb-5">
          <div className="cards-section-container container">
            <div className="row">
              <h1 className="text-center card-text-title text-md-2">Innovative IT Solutions for Your Business</h1>
            </div>
            <Row className="justify-content-evenly">
                {CARDCONTENTS.map((cardContent, index) => (
                  <CardComponent key={index} cardContent={cardContent} />
                ))}
            </Row>
          </div>
        </div>
      </div>
      <div className="empowering-section">
        <div className="pb-5">
          <div className="container">
            <div className="row">
              <h1 className="empowering-text-title text-md-2">Empowering Education with Classify's Innovative Solutions</h1>
            </div>
            <div>
                {contents.map((details, index) => {
                  if(details.type == "left"){
                    return (<EmpoweringComponent.LeftImageCard key={index} content={details} />)
                  } else if(details.type == "right")
                    return (<EmpoweringComponent.RightImageCard key={index} content={details} />)
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="simple-section">
        <div className="simple-section-overlay d-flex justify-content-center align-items-center">
          <ScrollAnimation animateIn="fadeIn">
            <div className="quote1">
              <h1>Simple yet </h1>
            </div>
            <div className="quote2">
              <h1>
                <Typewriter
                  options={{
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        '<strong class="text-center" style="color: #CDF1FE; font-family: Nulshock, sans-serif;">POWERFUL</strong>'
                      )
                      .deleteAll()
                      .start();
                  }}
                />
              </h1>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="tools-section">
          <div className="container d-flex flex-column justify-content-center">
            <h1 className="tools-section-title">Best Services for <span style={{color: '#f1750e'}}>Visual Perfection</span></h1>
            <div className="row justify-content-center">
                <div className="col-md-4 col-12 col-lg-6 col-xl-6">
                  <div className="figContainer">
                    <img
                      src={Images.Strategy}
                      alt="Strategy"
                      className="img-fluid"
                    />
                    <h2>Strategy</h2>
                  </div>
                </div>
                <div className="col-md-4 col-12 col-lg-6 col-xl-6">
                  <div className="figContainer">
                    <img
                      src={Images.Marketing}
                      alt="Marketing"
                      className="img-fluid"
                    />
                    <h2>Marketing</h2>
                  </div>
                </div>
                <div className="col-md-4 col-12 col-lg-6 col-xl-6">
                  <div className="figContainer">
                    <img
                      src={Images.Tech}
                      alt="Technology"
                      className="img-fluid"
                    />
                    <h2>Technology</h2>
                  </div>
                </div>
                <div className="col-md-4 col-12 col-lg-6 col-xl-6">
                  <div className="figContainer">
                    <img
                      src={Images.Ecommerce}
                      alt="Ecommerce"
                      className="img-fluid"
                    />
                    <h2>Ecommerce</h2>
                  </div>
                </div>
                <div className="col-md-4 col-12 col-lg-6 col-xl-6">
                  <div className="figContainer">
                    <img
                      src={Images.Branding}
                      alt="Branding"
                      className="img-fluid"
                    />
                    <h2>Branding</h2>
                  </div>
                </div>
                <div className="col-md-4 col-12 col-lg-6 col-xl-6">
                  <div className="figContainer">
                    <img src={Images.SEO} alt="SEO" className="img-fluid" />
                    <h2>SEO Identity</h2>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <div className="technologies-icons pb-5">
        <div className="container technologies-title d-flex flex-column justify-content-center pt-5">
          <h1 className="text-center"><strong>Our</strong> Technologies</h1>
          <p className="text-center">
            We use the combination of the following Programming Languages,
            Tools, and{"\n"}Frameworks to create web and mobile applications.
          </p>
          <div className="row d-flex justify-content-center mb-5 language-container">
            <h2 className="text-center mb-3 technologies-icon-title">Frontend</h2>
            {FRONTEND.map((language, index) => (
              <Language key={index} language={language} />
            ))}
          </div>  
          <div className="row d-flex justify-content-center mb-5 language-container">
            <h2 className="text-center mb-3 technologies-icon-title">Fullstack</h2>
            {FULLSTACK.map((language, index) => (
              <Language key={index} language={language} />
            ))}
          </div>
          <div className="row d-flex justify-content-center language-container">
            <h2 className="text-center mb-3 technologies-icon-title">Others</h2>
            {OTHERS.map((language, index) => (
              <Language key={index} language={language} />
            ))}
          </div>        
        </div>
      </div>
      <div className="news-section container">
        <div className="pb-5">
          <h1 className="mb-5 text-center pt-5">News</h1>
          <div>
            <div className="row">
              <div className="col-lg-6 mb-3">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/Lo9vLL6Tm4A"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/Rg4mOMZDqVk"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lms-benefits-section">
        <div className="lms-benefits-overlay">
          <div className="container-fluid" style={{height: '100%'}}>
            <div className="row" style={{height: '100%'}}>
              <div className="adsContainer">
                <ScrollAnimation animateIn="fadeIn">
                  <div>
                    <h1 className="ads-title">Real-time access on any device!</h1>
                    <ul>
                      <li>View your grades</li>
                      <li>Take online tests</li>
                      <li>Collaborate with classmates</li>
                      <li>Check your finances</li>
                      <li>
                        and more from <strong>anywhere.</strong>
                      </li>
                    </ul>
                    <Link to="/contact" className="btn lms-button" onClick={scrollToTop}>
                      Try ClassifyLMS Now!
                    </Link>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
