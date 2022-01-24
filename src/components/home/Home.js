import './Home.css';

export default function Home() {
  return (
    <div className="home" id="home-section">
      <h1>Hi, I'm Joelle Lisondra</h1>
      <p>Full Stack Developer</p>
      <div className="btn-list">
        <button className="btn-contact">Contact Me</button>
        <button className="btn-resume">View Resume</button>
      </div>
      <div class="custom-shape-divider-bottom-164299312">
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
