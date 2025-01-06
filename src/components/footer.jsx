import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaFacebookSquare, FaViber, FaInstagramSquare, FaEnvelopeSquare } from "react-icons/fa";

import Images from "../assets/images/image";

import "../styles/footer.scss";

const Footer = ({ scrollTop }) => {
  const location = useLocation();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
      // Check if there's a hash in the URL
      const hash = location.hash;
      if (hash) {
          const section = document.getElementById(hash.slice(1));
          if (section) {
              section.scrollIntoView({ behavior: "smooth" });
          }
      }
  }, [location]);

  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
  };

  return (
    <section id="footer">
      {location.pathname === "/" || location.pathname === "/Contact" ? (
        ""
      ) : (
        <div className={`container-fluid`}>
          <div className="row">
            <div className="col-12 demo">
              <h1>Schedule a Free Demo and Consultation.</h1>
              <div className="socmed">
                <a
                  href="https://www.facebook.com/classifyinc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare />
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <FaViber />
                </a>
                <a
                  href="https://www.instagram.com/classify.ph/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  href="mailto:marketing@classify.com.ph"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaEnvelopeSquare />
                </a>
              </div>
              <Link to="/contact" className="btn fs-5 p-4" onClick={scrollToTop}>
                Let's Connect!
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row footer">
          <div className="col-lg-3 footerLogo">
            <img src={Images.Logo} alt="Classify" className="img-fluid" />
          </div>
          <div className="footerContent col-lg-3 col-md-4">
            <div className="col-sm-12 col-xs-12 mb-3" style={{width: '100%'}}>
              <h2>Classify LMS</h2>
              <Link to="/Products#lms-section">Features</Link>
              {/* <Link to="#">Pricing</Link> */}
              <Link to="/Blogs#blog-section">Client Stories</Link>
            </div>
          </div>
          <div className="footerContent col-lg-3 col-md-4">
            <div className="col-sm-12 col-xs-12 mb-3" style={{width: '100%'}}>
              <h2>About Us</h2>
              <Link to="/Products#product-section">What we do</Link>
              <Link to="/About#about-section">Who we</Link>
              <Link to="/Blogs#blog-section">Client Stories</Link>
              <Link to="/Blogs#blog-section">Blogs</Link>
            </div>
          </div>
          <div className="footerContent col-lg-3 col-md-4 ">
            <div className="col-sm-12 col-xs-12 mb-3" style={{width: '100%'}}>
              <h2>Contact Us</h2>
              <Link to="/Contact" onClick={scrollToTop}>Demo</Link>
              <Link to="/Support" onClick={scrollToTop}>Help</Link>
              <Link to="/Contact" onClick={scrollToTop}>Contact</Link>
              <a style={{textDecoration: 'none'}} href="mailto:inquiries@classify.com.ph" target="_blank" rel="noreferrer">inquiries@classify.com.ph</a>
            </div>
          </div>
          <div className="col-12 footerSign">
            <p>
              &copy; 2021 - {currentYear} | Classify Inc. | All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;