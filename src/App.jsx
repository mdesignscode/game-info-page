import "styles/App.scss";
import "styles/globals.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar/main";
import Home from "components/Home";
import Footer from 'components/Footer/main';
import ActiveLightbox from 'components/HeroSection/ActiveLightbox';
import { useContext } from "react";
import { ImageLightboxContext } from "components/hooks/useImageLightbox";

function App () {
  const { showLightbox } = useContext(ImageLightboxContext);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            {showLightbox && <ActiveLightbox />}
            <Home />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
