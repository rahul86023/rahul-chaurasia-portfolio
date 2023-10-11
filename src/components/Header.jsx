
import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const handleDownload = () => {
    const cvPath = '../../img/Resume.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'rahul chaurasia.pdf';
    link.target = '_blank';
    link.click();
  };
  return (
    <header className="container header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src="../../img/Rahul.jpeg" alt="" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span> Rahul Chaurasia.</span>
              A Full Stack Developer
          </h1>
          <p>
          I am a passionate full-stack MERN developer with a deep love for crafting comprehensive web applications that offer valuable services to users. My expertise spans the entire stack, from server-side logic to creating engaging user interfaces. If you'd like to learn more about my work, please explore my portfolio.
          </p>
          <div className="btn-con">
          <button  onClick={handleDownload}>
          <span className="btn-text">Download CV</span>
          <span className="btn-icon"><FontAwesomeIcon icon={faDownload} /></span>
        </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

