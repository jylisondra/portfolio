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
    <div className="skills">
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
    </div>
  );
}
