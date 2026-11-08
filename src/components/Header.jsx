
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          <span className="logo-mark">R</span>
          RecipeFinder
        </NavLink>

        <nav className="navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
