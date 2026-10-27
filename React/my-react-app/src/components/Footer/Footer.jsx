import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <div className="footer-logo">
            Campus<span>Connect</span>
          </div>

          <p>
            Connect. Participate. Experience campus life.
          </p>
        </div>

        <div className="footer-links">
          <a href="#events">Events</a>
          <a href="#about">About</a>
          <a href="#events">Community</a>
        </div>

        <div className="copyright">
          © 2026 CampusConnect
        </div>

      </div>
    </footer>
  );
}

export default Footer;
