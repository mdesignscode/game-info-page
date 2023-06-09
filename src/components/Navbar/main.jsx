import NavbarMobile from "./Mobile/main";
import NavbarDesktop from "./Desktop/main";
import { SearchTextProvider } from "./SearchTextContext";
import "styles/Navbar/main.scss";
import useWindowWidth from 'components/hooks/useWindowWidth';

export default function Navbar() {
  const windowWidth = useWindowWidth()

  return (
    <SearchTextProvider>
      <div className="navigation">
        {windowWidth < 1025 ? <NavbarMobile /> : <NavbarDesktop />}
      </div>
    </SearchTextProvider>
  );
}
