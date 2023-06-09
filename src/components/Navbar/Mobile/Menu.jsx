import 'styles/Navbar/Mobile/Menu.scss';
import { Link, NavLink } from 'react-router-dom';
import Close from 'icons/Close';
import Store from 'icons/Store';
import Games from 'icons/Games';
import NintendoSwitch from 'icons/NintendoSwitch';
import Notification from 'icons/Notification';
import Play from 'icons/Play';
import Support from 'icons/Support';

export default function Menu ({ setStateToHide, stateToHide }) {

  return (
    <div className="navigation_secondary__menu">
      <div className="navigation_secondary__menuHeader">
        <h1>Menu</h1>
        <Close setStateToHide={setStateToHide} stateToHide={stateToHide} />
      </div>

      <div className="navigation_secondary__menuBody">
        <nav>
          <div className="navigation_secondary__menuLink">
            <NavLink to="/">
              <Store />
              <span>My Nintendo Store</span>
            </NavLink>
          </div>
          <div className="navigation_secondary__menuLink">
            <NavLink to="/">
              <Games />
              <span>Games</span>
            </NavLink>
          </div>
          <div className="navigation_secondary__menuLink">
            <NavLink path="/">
              <NintendoSwitch />
              <span>Nintendo Switch</span>
            </NavLink>
          </div>
          <div className="navigation_secondary__menuLink">
            <NavLink to="/">
              <Notification />
              <span>News & Events</span>
            </NavLink>
          </div>
          <div className="navigation_secondary__menuLink">
            <NavLink to="/">
              <Play />
              <span>Play Nintendo</span>
            </NavLink>
          </div>
        </nav>

        <div className="navigation_secondary__menuFooter">
          <div className="navigation_secondary__menuLink">
            <Link to="/">
              <Support />
              <span>Support</span>
            </Link>
          </div>

          <div className="navigation_secondary__menuLink">
            <Link to="/">
              <img src="https://assets.nintendo.com/image/upload/c_scale,w_18,q_auto/ncom/global/flags/FlagUsaIcon.png" alt=""></img>
              <span>Change Region</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import PropTypes from 'prop-types';
Menu.propTypes = {
  stateToHide: PropTypes.bool.isRequired,
  setStateToHide: PropTypes.func.isRequired,
};
