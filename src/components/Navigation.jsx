import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faNewspaper, faEnvelopeOpen, faAdjust, faDownload } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';

const Navigation = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <>
      <div className={`controls ${isLightMode ? 'light-mode' : ''}`}>
        {/* Use Link components for navigation */}
        <Link to="/rahul-chaurasia-portfolio/" className="control">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to="about" className="control">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="portfolio" className="control">
          <FontAwesomeIcon icon={faBriefcase} />
        </Link>
       
        <Link to="contact" className="control">
          <FontAwesomeIcon icon={faEnvelopeOpen} />
        </Link>
      </div>
      <div className={`theme-btn ${isLightMode ? 'light-mode' : ''}`} onClick={toggleLightMode}>
        <FontAwesomeIcon icon={faAdjust} />
      </div>
      
    </>
  );
};

export default Navigation;
