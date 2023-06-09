import PropTypes from "prop-types";
import Heart from "icons/Heart";
import Cart from "icons/Cart";
import User from "icons/User";
import Search from "icons/Search";
import Close from "icons/Close";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Menu from "./Menu";

export default function NavbarSecondary({ navRef, setHideCloseSearch }) {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowSearchField() {
    navRef.current.classList.add("showSearchField");
    setHideCloseSearch(false);
  }

  return (
    <>
      <nav className="navigation_secondary">
        {showMenu ? (
          <span className="navigation_secondary-item">
            <Close stateToHide={false} setStateToHide={setShowMenu} />
          </span>
        ) : (
          <button
            className="navigation_secondary-item"
            aria-label="Open Menu"
            onPointerDown={() => setShowMenu(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              xmlSpace="preserve"
              width="24"
              role="presentation"
              alt=""
              data-testid="HamburgerMenuIcon"
              color="currentColor"
              size="24"
            >
              <path
                fill="currentColor"
                d="M0 12.8h32v6.4H0zM0 24h32v6.4H0zM0 1.6h32V8H0z"
              ></path>
            </svg>
          </button>
        )}
        <NavLink className="navigation_secondary-item">
          <Heart />
        </NavLink>
        <button
          id="search-icon"
          data-input=""
          onPointerDown={handleShowSearchField}
          className="navigation_secondary-item"
        >
          <Search />
        </button>
        <NavLink className="navigation_secondary-item">
          <Cart />
        </NavLink>
        <NavLink className="navigation_secondary-item">
          <User />
        </NavLink>
      </nav>
      {showMenu && <Menu setStateToHide={setShowMenu} stateToHide={false} />}
    </>
  );
}

NavbarSecondary.propTypes = {
  navRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
  setHideCloseSearch: PropTypes.func.isRequired,
};
