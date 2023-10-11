
import '../styles/styles.css';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section>
      <div className="main-title">
        <h2>
          About <span>me</span>
          <span className="bg-text">my stats</span>
        </h2>
      </div>
      <h4 className="stat-title">My Experience</h4>
      <div className="timeline">
        <div className="timeline-item">
          <div className="tl-icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <p className="tl-duration">Feb 2022 - April 2023</p>
          <h5>
            Associate Software Engineer<span> - Costrategix</span>
          </h5>
          <ul>
            <li>
              Developed and maintained web applications using React.js and Node.js technologies for 1.3 years as an Associate Software Engineer.
            </li>
            <li>
              Participated in code reviews, identifying and resolving bugs to improve overall application performance.
            </li>
            <li>
              Implemented new features and enhancements, resulting in increased user engagement and satisfaction.
            </li>
          </ul>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <p className="tl-duration">Jan 2021 - Jun 2021</p>
          <h5>
            Junior Software Engineer<span> - Probotiq Solutions</span>
          </h5>
          <ul>
            <li>
              Developed and implemented REST APIs using Node.js, Express.js, and MongoDB technologies for efficient data management.
            </li>
            <li>
              Implemented authentication and authorization mechanisms to ensure secure access to backend services.
            </li>
          </ul>
        </div>
      </div>
      <div className="about-stats">
        <h4 className="stat-title">My Skills</h4>
        <div className="about-icons">
          <img src="../../img/html.png" alt="" />
          <img src="../../img/css.png" alt="" />
          <img src="../../img/javascript.png" alt="" />
          <img src="../../img/bootstrap.png" alt="" />
          <img src="../../img/react.png" alt="" />
          <img src="../../img/nodejs.png" alt="" />
          <img src="../../img/express.png" alt="" />
          <img src="../../img/mongodb.png" alt="" />
          <img src="../../img/npm.png" alt="" />
          <img src="../../img/redux.png" alt="" />
          <img src="../../img/java.png" alt="" />
          <img src="../../img/aws.png" alt="" />
          <img src="../../img/git.png" alt="" />
          <img src="../../img/github.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;

// import '../styles/styles.css';


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload, faBriefcase } from '@fortawesome/free-solid-svg-icons';
// import '../styles/styles.css';
// const About = () => {
//   const iconStyle = {
//     fontSize: '24px', // Adjust the font size as needed
//     margin: '0 10px', // Add margin between icons
//   };
//   return (
    
//     <section>
//       <div className="main-title">
//         <h2>
//           About <span>me</span>
//           <span className="bg-text">my stats</span>
//         </h2>
//       </div>
//       <h4 className="stat-title">My Experience</h4>
//       <div className="timeline">
//         <div className="timeline-item">
//           <div className="tl-icon">
//             <FontAwesomeIcon icon={faBriefcase} />
//           </div>
//           <p className="tl-duration">Feb 2022 - April 2023</p>
//           <h5>
//             Associate Software Engineer<span> - Costrategix</span>
//           </h5>
//           <p> Developed and maintained web applications using React.js and Node.js technologies for 1.3 years
// as an Associate Software Engineer.
//  Participated in code reviews, identifying and resolving bugs to improve overall application performance.
//  Implemented new features and enhancements, resulting in increased user engagement and
// satisfaction.</p>
//         </div>
//         <div className="timeline-item">
//           <div className="tl-icon">
//             <FontAwesomeIcon icon={faBriefcase} />
//           </div>
//           <p className="tl-duration">Jan 2021 - Jun 2021</p>
//           <h5>
//            Junior Software Engineer<span> - Probotiq Solutions</span>
//           </h5>
//           <p>Developed and implemented REST APIs using Node.js, Express.js, and MongoDB technologies for
// efficient data management.
//  Implemented authentication and authorization mechanisms to ensure secure access to backend
// services</p>
//         </div>
        
//       </div>
//       <div className="about-stats">
//         <h4 className="stat-title">My Skills</h4>
//         <div className="about-icons">
      
//         <img src="../../img/html.png" alt="" />
        
//         <img src="../../img/css.png" alt="" />
        
//         <img src="../../img/javascript.png" alt="" />
//           <img src="../../img/bootstrap.png" alt="" />
        
//         <img src="../../img/react.png" alt="" />
        
//         <img src="../../img/nodejs.png" alt="" />
        
//         <img src="../../img/express.png" alt="" />
          
//         <img src="../../img/mongodb.png" alt="" />
//         <img src="../../img/npm.png" alt="" />
//         <img src="../../img/redux.png" alt="" />
//         <img src="../../img/java.png" alt="" />
//         <img src="../../img/aws.png" alt="" />
//         <img src="../../img/git.png" alt="" />
//         <img src="../../img/github.png" alt="" />
//     </div>
//       </div>
     
//     </section>
    
//   );
// };

// export default About;
