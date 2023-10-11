import React from 'react';
import '../styles/styles.css';

const Port = () => {
  const portfolioData = [
    {
      id: 1,
      projectName: "Download Master-FullStack",
      imageSrc: 'img/downloadmaster.png',
      liveLink: 'https://downloadmaster.app',
      githubLink: '',
      text: 'Enabled seamless and efficient downloads of media (videos, reels, photos, music) from popular platforms such as Youtube, Facebook, and Instagram',
    },
    {
      id: 2,
      projectName: "Notes Grader-Backend",
      imageSrc: 'img/notesGrader.png',
      liveLink: '',
      githubLink: 'https://github.com/rahul86023/notes-grader',
      text: 'Developed a feature-rich educational management system with user authentication and role-based access, enabling students to enroll, submit assignments, and receive grades, while teachers manage classes and assignments effectively',
    },
    {
      id: 3,
      projectName: "HR-Onboarding-FullStack",
      imageSrc: 'img/hrOnboarding.png',
      liveLink: '',
      githubLink: 'https://github.com/rahul86023/HR-Onboarding',
      text: 'HR On-Boarding Management is a Website. For the Smooth On-Boarding Process of New Hires in any Company. The Purpose of Creating this Website is to make On-Boarding Process Easier For both Employee and HR. ',
    },
    // Add more project data as needed
  ];

  return (
    <section>
      <div className="main-title">
        <h2>
          My <span>Projects</span>
          <span className="bg-text">My Work</span>
        </h2>
      </div>
      <p className="port-text">
        Here is some of my projects that I've created using MERN Stack.
      </p>
      <div className="portfolios">
        {portfolioData.map((portfolio) => (
          <div className="portfolio-item" key={portfolio.id}>
            <h3 className="project-name">{portfolio.projectName}</h3>
            <div className="image">
              <img src={portfolio.imageSrc} alt="" />
            </div>
            <div className="project-links">
              {portfolio.liveLink && (
                <a href={portfolio.liveLink} className="live-link" target="_blank" rel="noreferrer">
                  Live Link
                </a>
              )}
              {portfolio.githubLink && (
                <a href={portfolio.githubLink} className="github-link" target="_blank" rel="noreferrer">
                  GitHub Link
                </a>
              )}
            </div>
            <div className="project-description">
              <p>{portfolio.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Port;



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload, faBriefcase } from '@fortawesome/free-solid-svg-icons';
// import '../styles/styles.css';

// const Port = () => {
//   const portfolioData = [
//     {
//       id: 1,
//       imageSrc: 'img/downloadmaster.png',
//       text: ' Enabled seamless and efficient downloads of media (videos, reels, photos, music) from popular platforms such as Youtube, Facebook, and Instagram',
//     },
//     {
//       id: 2,
//       imageSrc: 'img/port2.jpg',
//       text: 'Project 2 Description',
//     },
//     {
//       id: 3,
//       imageSrc: 'img/port3.jpg',
//       text: 'Project 3 Description',
//     }
    
//   ];

//   return (
//     <section>
//       <div className="main-title">
//         <h2>
//           My <span>Portfolio</span>
//           <span className="bg-text">My Work</span>
//         </h2>
//       </div>
//       <p className="port-text">
//         Here is some of my work that I've done in various programming languages.
//       </p>
//       <div className="portfolios">
//         {portfolioData.map(portfolio => (
//           <div className="portfolio-item" key={portfolio.id}>
//             <div className="image">
//               <img src={portfolio.imageSrc} alt="" />
//             </div>
//             <div className="hover-items">
//               <h3>Project Source</h3>
            
//               <div className="icons">
//                 <a href="#" className="icon">
//                   <FontAwesomeIcon icon={faDownload} />
//                 </a>
//                 <a href="#" className="icon">
//                   <FontAwesomeIcon icon={faBriefcase} />
//                 </a>
//               </div>
//             </div>
//             <div>
                
//                 <p>{portfolio.text}</p>
//               </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Port;

// // import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload, faBriefcase } from '@fortawesome/free-solid-svg-icons';
// import '../styles/styles.css';

// const Port = () => {
//   return (
//     <section>
//       <div className="main-title">
//         <h2>
//           My <span>Portfolio</span>
//           <span className="bg-text">My Work</span>
//         </h2>
//       </div>
//       <p className="port-text">
//         Here is some of my work that Ive done in various programming languages.
//       </p>
//       <div className="portfolios">
//         <div className="portfolio-item">
//           <div className="image">
//             <img src="img/port1.jpg" alt="" />
//           </div>
//           <div className="hover-items">
//             <h3>Project Source</h3>
//             <div className="icons">
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faDownload} />
//               </a>
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faBriefcase} />
//               </a>
             
//             </div>
//           </div>
//         </div>
//         <div className="portfolio-item">
//           <div className="image">
//             <img src="img/port2.jpg" alt="" />
//           </div>
//           <div className="hover-items">
//             <h3>Project Source</h3>
//             <div className="icons">
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faDownload} />
//               </a>
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faBriefcase} />
//               </a>
             
//             </div>
//           </div>
//         </div>
//         <div className="portfolio-item">
//           <div className="image">
//             <img src="img/port3.jpg" alt="" />
//           </div>
//           <div className="hover-items">
//             <h3>Project Source</h3>
//             <div className="icons">
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faDownload} />
//               </a>
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faBriefcase} />
//               </a>
             
//             </div>
//           </div>
//         </div>
//         <div className="portfolio-item">
//           <div className="image">
//             <img src="img/port4.jpg" alt="" />
//           </div>
//           <div className="hover-items">
//             <h3>Project Source</h3>
//             <div className="icons">
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faDownload} />
//               </a>
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faBriefcase} />
//               </a>
             
//             </div>
//           </div>
//         </div>
//         <div className="portfolio-item">
//           <div className="image">
//             <img src="img/port5.jpg" alt="" />
//           </div>
//           <div className="hover-items">
//             <h3>Project Source</h3>
            
//             <div className="icons">
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faDownload} />
//               </a>
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faBriefcase} />
//               </a>
             
//             </div>
            
//           </div>
//         </div>
//         <div className="portfolio-item">
//           <div className="image">
//             <img src="img/port2.jpg" alt="" />
//           </div>
//           <div className="hover-items">
//             <h3>Project Source</h3>
//             <div className="icons">
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faDownload} />
//               </a>
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faBriefcase} />
//               </a>
             
//             </div>
//           </div>
//         </div>
//         <div className="portfolio-item">
//           <div className="image">
//             <img src="img/port7.jpg" alt="" />
//           </div>
//           <div className="hover-items">
//             <h3>Project Source</h3>
//             <div className="icons">
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faDownload} />
//               </a>
//               <a href="#" className="icon">
//                 <FontAwesomeIcon icon={faBriefcase} />
//               </a>
             
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Port;
