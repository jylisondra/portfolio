import { Link, animateScroll as scroll } from 'react-scroll';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link className="brand">JYL</Link>
        <ul className="nav-items">
          <Link className="nav-item">Projects</Link>
          <Link className="nav-item">Contact</Link>
        </ul>
      </div>
    </nav>
  );
}
