import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faSquareFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/styles.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uzvu95r', 'template_ram86kh', form.current, 'Wgt0TeDdFJEz2avow')
      .then((result) => {
        console.log(result.text);
        toast.success('Email Sent Successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error.text);
        toast.error('Failed to Send Email', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  return (
    <section>
      <div className="contact-container">
        <div className="main-title">
          <h2>
            Contact <span>Me</span>
            <span className="bg-text">Contact</span>
          </h2>
        </div>
        <div className="contact-content-con">
          <div className="left-contact">
            <h4>Contact me here</h4>
            <p>
              You can contact me here If you want to Hire me or you have any projects that you want to build by me.
            </p>
            <div className="contact-info">
            <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Location</span>
                </div>
                <p>: Chhatarpur,MP India</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                  <span>Email</span>
                </div>
                <p>: rahulchaurasia966@gmail.com</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-user-graduate"></i>
                  <span>Education</span>
                </div>
                <p>: MCA From NIT Raipur</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-mobile-alt"></i>
                  <span>Mobile Number</span>
                </div>
                <p>: 8982674643</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-globe-africa"></i>
                  <span>Languages</span>
                </div>
                <p>: Hindi,English</p>
              </div>
            </div>
            <div className="contact-icons">
              <div className="contact-icon">
              <a href="https://www.linkedin.com/in/rahul-chaurasia-997a56186/" target="_blank" rel="noreferrer">
                <span className="btn-icon"><FontAwesomeIcon icon={faLinkedin} bounce /></span>
                </a>
                <a href="https://github.com/rahul86023" target="_blank" rel="noreferrer">
                
                <span className="btn-icon"><FontAwesomeIcon icon={faGithub} bounce /></span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100026753812832&mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                <span className="btn-icon"><FontAwesomeIcon icon={faSquareFacebook} bounce /></span>
                </a>
                <a href="https://instagram.com/rahul_chaurasia_96?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noreferrer">
                <span className="btn-icon"><FontAwesomeIcon icon={faInstagram} bounce /></span>
                </a>
              </div>
            </div>
          </div>
          <div className="right-contact">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="input-control i-c-2">
                <input type="text" name="from_name" required placeholder="YOUR NAME" />
                <input type="email" name="from_email" required placeholder="YOUR EMAIL" />
              </div>
              <div className="input-control">
                <input type="text" name="subject" required placeholder="ENTER SUBJECT" />
              </div>
              <div className="input-control">
                <textarea name="message" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
              </div>
              <div className="submit-btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Contact;


