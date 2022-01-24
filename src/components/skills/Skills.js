import './Skills.css';
import jsLogo from '../../assets/js-logo.png';
import htmlLogo from '../../assets/html-logo.png';
import cssLogo from '../../assets/css-logo.png';
import reactLogo from '../../assets/react-logo.png';
import nodeLogo from '../../assets/node-logo.png';
import expressLogo from '../../assets/express-logo.png';
import mongoLogo from '../../assets/mongo-logo.png';
import gitLogo from '../../assets/git-logo.png';
import reduxLogo from '../../assets/redux-logo.png';

export default function Skills() {
  return (
    <div className="skills" id="skills-section">
      <h1>My skillset includes</h1>
      <ul className="skills-list">
        <li className="skill">
          <img src={jsLogo} alt="javascript-logo" />
          <span>Javascript</span>
        </li>
        <li className="skill">
          <img src={htmlLogo} alt="html-logo" />
          <span>HTML</span>
        </li>
        <li className="skill">
          <img src={cssLogo} alt="css-logo" />
          <span>CSS</span>
        </li>
        <li className="skill">
          <img src={reactLogo} alt="react-logo" />
          <span>React</span>
        </li>
        <li className="skill">
          <img src={reduxLogo} alt="redux-logo" />
          <span>Redux</span>
        </li>
        <li className="skill">
          <img src={nodeLogo} alt="node-logo" />
          <span>Node</span>
        </li>
        <li className="skill">
          <img src={mongoLogo} alt="mongoDB-logo" />
          <span>MongoDB</span>
        </li>
        <li className="skill">
          <img src={gitLogo} alt="git-logo" />
          <span>Git</span>
        </li>
      </ul>
      <div class="custom-shape-divider-bottom-1642993123">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
