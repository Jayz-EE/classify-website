import { Col } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

const CardComponent = ({ cardContent }) => {
    const { image, title, details } = cardContent;
  
    return (
      <Col className="d-flex justify-content-center mb-2" xs={12} sm={12} md={6} lg={6} xl={4}>
        <ScrollAnimation animateIn="appearIn" animateOut="appearOut">
            <div className="overlay card-container">
                <img src={image} alt="Manage Services" className="img-fluid p-3" />
                <h1>{title}</h1>
                <p>{details}</p>
            </div>
        </ScrollAnimation> 
      </Col>
    );
  };
  
  export default CardComponent;
  