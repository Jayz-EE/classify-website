import { Col } from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

const RightImageCard = ({ content }) => {
    const { image, title, paragraphs, lists } = content;
  
    return (
        <div className="row align-items-center m-2">
            <Col className="d-flex justify-content-center mb-2" xs={12} md={6} lg={6} xl={6}>
                <img src={image} alt="Manage Services" className="img-fluid p-3" />
            </Col>
            <Col className="d-flex flex-column" xs={12} md={6} lg={6} xl={6}>
                <div className="empowering-card mb-2">
                    <h1>{title}</h1>
                </div>
                <div className="empowering-card-body">
                    {paragraphs.map(text => (
                        <p className="mb-3">{text}</p>
                    ))}
                </div>
                {lists.length > 0 ? 
                    <ul className="empowering-card-list">
                        {lists.map(list => (
                            <li>{list}</li>
                        ))}
                    </ul>
                    :
                    <></>
                }
            </Col>
        </div>
    );
  };

  const LeftImageCard = ({ content }) => {
    const { image, title, paragraphs, lists } = content;
  
    return (
        <div className="row align-items-center m-2">
            <Col className="d-flex flex-column md-order-2" xs={12} md={6} lg={6} xl={6}>
                <div className="empowering-card mb-2">
                    <h1>{title}</h1>
                </div>
                <div className="empowering-card-body">
                    {paragraphs.map(text => (
                        <p className="mb-3">{text}</p>
                    ))}
                </div>
                {lists.length > 0 ? 
                    <ul className="empowering-card-list">
                        {lists.map(list => (
                            <li>{list}</li>
                        ))}
                    </ul>
                    :
                    <></>
                }
            </Col>
            <Col className="d-flex justify-content-center mb-2 md-order-1" xs={12} md={6} lg={6} xl={6}>
                <img src={image} alt="Manage Services" className="img-fluid p-3" />
            </Col>
        </div>
    );
  };
  
  export default {RightImageCard, LeftImageCard};
  