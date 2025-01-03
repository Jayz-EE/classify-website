import { Container } from "react-bootstrap";
import '../styles/About.scss';
import images from '../assets/images/image';

export default function About(){
    return (
        <div>
            <div id="about-section" className="about-hero-section">
                <div className="about-hero-layer">
                </div>
                <Container className="about-content-container d-flex align-items-center justify-content-center" style={{width: '100%', flexWrap: 'wrap'}}>
                    <div className="d-flex row justify-content-center">
                        <h1 className="text-center" style={{width: '100%'}}>About Classify Inc.</h1>
                        <div className="about-hero-title d-flex flex-column col-xl-6 col-lg-10 col-md-12 col-sm-12 col-12">
                            <p style={{width: '100%'}}>
                                Classify inc. is a diverse software platform that aims to improve e-learning
                                by introducing enhanced cloud-based solutions and embodying upgraded
                                features that facilitate online educational advancements.
                            </p>
                        </div>
                        <div className="about-hero-image col-5">
                            <img src={images.about_image} alt="" />
                        </div>
                    </div>
                </Container>
            </div>
            <div className="about-mission-vision">
                <div className="container">
                    <div className="d-flex flex-column align-items-center">
                        <h2 className="text-center">Our Mission & Vision</h2>
                        <p className="text-center">
                            We leverage cost-efficient and cutting-edge technology to revolutionize learning and development in the Philippines.
                        </p>
                        <div className="mission-vision">
                            <div className="mission-vission-overlay">
                                <p>Classify inc. is a diverse software platform that aims to improve e-learning by introducing enhanced cloud-based solutions and embodying upgraded features that facilitate online educational advancements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}