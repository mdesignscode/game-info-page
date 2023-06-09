import { useRef, useState } from "react";
import "styles/Navbar/Mobile/main.scss";
import NavbarPrimary from "./NavPrimary";
import NavbarSecondary from "./NavSecondary";

export default function NavbarMobile() {
  const navRef = useRef()
  const [hideCloseSearch, setHideCloseSearch] = useState(true)

  return (
    <nav className="navigation-mobile">
      <NavbarPrimary {...{ navRef, hideCloseSearch, setHideCloseSearch }} />
      <NavbarSecondary {...{ navRef, hideCloseSearch, setHideCloseSearch }} />
    </nav>
  );
}
