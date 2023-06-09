import "styles/Navbar/Desktop/main.scss";
import NavbarPrimary from "./NavPrimary";
import NavbarSecondary from "./NavSecondary";

export default function NavbarDesktop() {
  return (
    <nav className="navigation-desktop">
      <NavbarPrimary />
      <NavbarSecondary />
    </nav>
  );
}
