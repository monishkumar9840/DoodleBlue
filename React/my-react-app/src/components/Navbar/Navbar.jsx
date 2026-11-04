import { NavLink } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";
import "./Navbar.css";

function Navbar() {
  const { favoriteIds } = useFavorites();

  return (
    <header className="navbar">
      <div className="nav-container">
        <NavLink className="logo" to="/">
          Campus<span>Connect</span>
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/registration">Register</NavLink>
          <NavLink className="favorites-link" to="/favorites">
            Favorites <span>({favoriteIds.length})</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
