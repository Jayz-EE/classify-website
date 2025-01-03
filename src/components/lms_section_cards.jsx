import { Col } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

const CardComponent = ({ lms_data }) => {
    const { image, title, details } = lms_data;
  
    return (
      <Col className="d-flex justify-content-center mb-2" xs={12} md={12} lg={6} xl={4}>
        <ScrollAnimation animateIn="fadeIn">
            <div className="overlay card-cont">
                <img src={image} alt="Manage Services" className="card-img" />
                <div className="card-details">
                  <h1>{title}</h1>
                  <p>{details}</p>
                </div>
                <h1 className="cont-title d-none d-lg-block d-xl-block">{title}</h1>
            </div>
        </ScrollAnimation> 
      </Col>
    );
  };
  
  export default CardComponent;
  