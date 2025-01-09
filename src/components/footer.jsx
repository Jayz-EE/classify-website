import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaFacebookSquare, FaViber, FaEnvelopeSquare, FaPhoneAlt, FaCopy } from "react-icons/fa";

import Images from "../assets/images/image";
import "../styles/footer.scss";

const Footer = ({ scrollTop }) => {
  const location = useLocation();
  const [copied, setCopied] = useState(false);

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
      behavior: "smooth",
    });
  };

  const copyToClipboard = () => {
    const phoneNumber = "09667649509";
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
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
              <h1>Are you an Existing Customer?</h1>
              <h2 className="demo-title-2">
                You can Contact us via our support channels by clicking the icons below or you can call us directly at{" "}
                <span className="d-flex justify-content-center align-items-center mt-2">
                  <FaPhoneAlt className="me-2" />09667649509
                  <FaCopy
                    className="ms-3 copy-icon"
                    title="Copy to clipboard"
                    onClick={copyToClipboard}
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </h2>
              <span style={{ opacity: copied ? '1' : '0', color: '#a4f177e5' }}>Copied!</span>
              <div className="socmed">
                <a
                  href="https://www.facebook.com/classifyinc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare />
                </a>
                <a href="viber://chat?number=%2B639122698995" target="_blank" rel="noreferrer">
                  <FaViber />
                </a>
                <a
                  href="mailto:marketing@classify.com.ph"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaEnvelopeSquare />
                </a>
              </div>
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
            <div className="col-sm-12 col-xs-12 mb-3" style={{ width: "100%" }}>
              <h2>Classify LMS</h2>
              <Link to="/Products#lms-section">Features</Link>
            </div>
          </div>
          <div className="footerContent col-lg-3 col-md-4">
            <div className="col-sm-12 col-xs-12 mb-3" style={{ width: "100%" }}>
              <h2>About Us</h2>
              <Link to="/Products#product-section">What we do</Link>
              <Link to="/About#about-section">Who we are</Link>
              <Link to="/Blogs#blog-section">Client Stories</Link>
              <Link to="/Blogs#blog-section">Blogs</Link>
            </div>
          </div>
          <div className="footerContent col-lg-3 col-md-4 ">
            <div className="col-sm-12 col-xs-12 mb-3" style={{ width: "100%" }}>
              <h2>Contact Us</h2>
              <Link to="/Contact" onClick={scrollToTop}>
                Demo
              </Link>
              <Link to="/Support" onClick={scrollToTop}>
                Help
              </Link>
              <Link to="/Contact" onClick={scrollToTop}>
                Contact
              </Link>
              <a
                style={{ textDecoration: "none" }}
                href="mailto:inquiries@classify.com.ph"
                target="_blank"
                rel="noreferrer"
              >
                inquiries@classify.com.ph
              </a>
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
