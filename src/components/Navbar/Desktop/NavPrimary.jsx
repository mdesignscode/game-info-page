import { NavLink } from "react-router-dom";
import Nintendo from "icons/Nintendo";
import Support from "icons/Support";
import Heart from "icons/Heart";
import Cart from "icons/Cart";
import User from "icons/User";
import Close from "icons/Close";
import Search from "icons/Search";
import { useRef } from "react";
import SearchResultsField from "../SearchResultsField";
import { useContext, useState } from "react";
import { SearchTextContext } from "../SearchTextContext";

export default function NavbarPrimary() {
  const primaryNavRef = useRef();
  const { setSearchText } = useContext(SearchTextContext);
  const [hideCloseSearch, setHideCloseSearch] = useState(true);

  function handleShowSearchField () {
    primaryNavRef.current.classList.add("showSearchField");
    setHideCloseSearch(false);
  }

  function handleHideSearchField () {
    primaryNavRef.current.classList.remove("showSearchField");
    setHideCloseSearch(true);
    setSearchText('');
  }

  return (
    <div className="navigation_primary" ref={primaryNavRef}>
      <div className="navigation_primary__left">
        <div className="navigation_primary__leftLogo">
          <NavLink to="/">
            <Nintendo />
          </NavLink>
        </div>
        <div className="navigation_primary__leftSearch">
        <div className="navigation_primary__leftSearchForm">
          <button
            onPointerDown={handleShowSearchField}
            className="navigation_primary__leftSearchForm-button"
          >
            <Search />
            {hideCloseSearch ? (
              <span data-input="">
                Search games, hardware, news, etc
              </span>
            ) : (
              <input
                aria-label="search input"
                onChange={(e) => setSearchText(e.target.value)}
              />
            )}
          </button>
          <select name="searchCategory">
            <option value="all categories">All categories</option>
            <option value="games">Games</option>
            <option value="hardware">Hardware</option>
            <option value="merchandise">Merchandise</option>
            <option value="news and events">News & Events</option>
            <option value="support">Support</option>
          </select>
        </div>
      </div>
      {hideCloseSearch ? (
        ""
      ) : (
        <>
          <span
            onPointerDown={handleHideSearchField}
            style={{ cursor: "pointer" }}
          >
            <Close />
          </span>
          <SearchResultsField />
        </>
      )}
      </div>

      <div className="navigation_primary__links">
        <div className="navigation_primary__linksLink">
          <NavLink to="/">
            <Support />
            <span>Support</span>
          </NavLink>
        </div>

        <div className="navigation_primary__linksLink">
          <NavLink to="/">
            <Heart />
            <span>Wish List</span>
          </NavLink>
        </div>

        <div className="navigation_primary__linksLink">
          <NavLink to="/">
            <Cart />
            <span>Cart</span>
          </NavLink>
        </div>

        <div className="navigation_primary__linksLink">
          <NavLink to="/">
            <User />
            <span>Log in / Sign up</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
