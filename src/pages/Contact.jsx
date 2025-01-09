import { useState, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AiOutlineMail, AiOutlineEnvironment } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";
import Cookies from "js-cookie";
import { Modal, Button } from "react-bootstrap";  // Import React-Bootstrap components
import "../styles/Contact.scss";
import StyledButton from "../components/styled_button_4.jsx";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  // Create a ref for the ReCAPTCHA component
  const recaptchaRef = useRef();

  const isFormValid = () => {
    if (!name || !email || !number || !message) {
      toast.error("All fields are required!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!isFormValid()) {
      return;
    }
  
    // Get the CAPTCHA value
    const captchaValue = recaptchaRef.current.getValue();
  
    if (!captchaValue) {
      toast.error("Please verify that you're human.");
      return;
    }
  
    const emailData = {
      customer_name: name,
      customer_email: email,
      customer_number: number,
      customer_message: message,
      captcha_response: captchaValue,
    };
  
    try {
      // const response = await fetch("http://localhost:5000/send-email", {
      const response = await fetch("http://172.16.30.42:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });
  
      if (response.ok) {
        const responseData = await response.json();  // Ensure we parse the response correctly
        if (responseData.status === "success") {
          setModalOpen(true);  // Open the modal on success
        } else {
          toast.error(responseData.message || "Failed to send message. Please try again later.");
        }
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to send message. Please try again later.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. error: "+ error);
    } finally {
      recaptchaRef.current.reset(); // Reset CAPTCHA after form submission
    }
  
    // Clear the form fields
    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div id="contact">
      <div id="landingContact">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 col-lg-9 contentContainer">
              <ScrollAnimation initiallyVisible animateIn="fadeIn">
                <div>
                  <h1>We'd love to hear from you!</h1>
                  <div>
                    <h2>Contact Us</h2>
                    <div className="contactContainer">
                      <div className="iconContainer">
                        <AiOutlineMail size={30} className="me-3" />
                        <p>inquiries@classify.com.ph</p>
                      </div>
                      <div className="iconContainer">
                        <AiOutlineEnvironment size={30} className="me-3" />
                        <p>
                          18th Floor, BPI Cebu Corporate Center<br />
                          Archbishop Reyes Ave. corner Luzon Avenue,<br />
                          Cebu Business Park, Cebu City 6000
                        </p>
                      </div>
                    </div>
                    <div className="formContainer">
                      <form
                        className="row g-2 needs-validation"
                        onSubmit={handleSubmit}
                      >
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            aria-label="Name"
                            required
                            name="customer_name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="col">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            aria-label="Email"
                            required
                            name="customer_email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Number"
                            aria-label="Number"
                            required
                            name="customer_number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            className="form-control"
                            placeholder="Message"
                            rows="3"
                            required
                            name="customer_message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
                        </div>

                        {/* CAPTCHA */}
                        <div className="col-12">
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LdZYLEqAAAAAHwS8LI4Vuf14-c0tvfmY8cM-wpk" // Your site key
                          />
                        </div>

                        <button className="btn" type="submit">
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* React-Bootstrap Modal */}
      <Modal
        show={isModalOpen}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header style={{background: "azure"}}>
          <Modal.Title style={{color: "#064199"}} className="fs-2 fw-bolder text-center w-100">Message Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{background: "#cdf1fe"}}>
          <p style={{color: "#014a65", fontWeight: "600"}} className="text-center">
            Thank you for contacting Classify. One of our representatives will contact you as soon as possible. If this is urgent, you can contact us through our social media support channel.
          </p>
          <div className="d-flex justify-content-center">
            <StyledButton button_name={"Click here"} close={closeModal}/>
          </div>
        </Modal.Body>
        <Modal.Footer style={{background: "azure"}} className="d-flex justify-content-center">
          <Button variant="primary" className="w-25" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
