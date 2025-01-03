import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import react-icons
import { AiOutlineMail, AiOutlineEnvironment } from "react-icons/ai";

import "../styles/Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      // emailjs
      emailjs
        .sendForm(
          "smtp",
          "template_x5m2pv8",
          event.target,
          "user_U26cFOJrGexRHzYwviLU2"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setName("");
      setEmail("");
      setNumber("");
      setMessage("");

      toast.success("Message sent successfully! 🚀", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

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
                          18th Floor, BPI Cebu Corporate Center{"\n"}
                          Archbishop Reyes Ave. corner Luzon Avenue,{"\n"}
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
                            name="name"
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
                            name="email"
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
                            name="number"
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
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
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
    </div>
  );
};

export default Contact;
