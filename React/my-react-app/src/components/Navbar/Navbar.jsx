import "./Navbar.css";

function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <button
          className="logo"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Campus<span>Connect</span>
        </button>

        <nav className="nav-links">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Home
          </button>

          <button onClick={() => scrollTo("events")}>
            Events
          </button>

          <button onClick={() => scrollTo("about")}>
            About
          </button>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
