import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">
          YOUR CAMPUS, YOUR COMMUNITY
        </span>

        <h1>
          Make Your Campus
          <span>Experience Count.</span>
        </h1>

        <p>
          Discover exciting events, meet new people, and make the most of your
          college life.
        </p>

        <div className="hero-actions">
          <Link to="/events" className="hero-button">
            Explore Events
          </Link>
          <Link to="/registration" className="hero-button hero-button-secondary">
            Register for an Event
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
