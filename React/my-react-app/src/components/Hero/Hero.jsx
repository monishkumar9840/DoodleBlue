import "./Hero.css";

function Hero() {
  const exploreEvents = () => {
    document.getElementById("events")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <div className="hero-content">

        <span className="eyebrow" style={{ color: "#8613ea" }}>
          YOUR CAMPUS, YOUR COMMUNITY
        </span>

        <h1>
          Make Your Campus
          <span>Experience Count.</span>
        </h1>

        <p>
          Discover exciting events, meet new people, and
          make the most of your college life.
        </p>

        <button
          className="hero-button"
          onClick={exploreEvents}
        >
          Explore Events →
        </button>

      </div>
    </section>
  );
}

export default Hero;
