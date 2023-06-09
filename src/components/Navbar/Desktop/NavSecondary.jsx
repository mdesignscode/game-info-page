import { NavLink } from "react-router-dom";
import Store from "icons/Store";
import Games from "icons/Games";
import NintendoSwitch from "icons/NintendoSwitch";
import Notification from "icons/Notification";
import Play from "icons/Play";

export default function NavbarSecondary() {

  return (
    <nav className="navigation_secondary">
      <div className="navigation_secondary__link">
        <NavLink to="/">
          <Store />
          <span>My Nintendo Store</span>
        </NavLink>
      </div>

      <div className="navigation_secondary__link">
        <NavLink to="/">
          <Games />
          <span>Games</span>
        </NavLink>
      </div>

      <div className="navigation_secondary__link">
        <NavLink to="/">
          <NintendoSwitch />
          <span>Nintendo Switch</span>
        </NavLink>
      </div>

      <div className="navigation_secondary__link">
        <NavLink to="/">
          <Notification />
          <span>News & Events</span>
        </NavLink>
      </div>

      <div className="navigation_secondary__link">
        <NavLink to="/">
          <Play />
          <span>Play Nintendo</span>
        </NavLink>
      </div>
    </nav>
  );
}
