import { useContext, useRef } from "react";
import ESRB from "components/ESRB";
import useWindowWidth from "components/hooks/useWindowWidth";
import ImageLightbox from "./ImageLightbox";
import { ImageLightboxContext } from "components/hooks/useImageLightbox";

export default function ImageGallery () {
  const windowWidth = useWindowWidth();
  const containerRef = useRef();
  const { showLightbox, setShowLightbox } = useContext(ImageLightboxContext);

  function handleOpen () {
    const root = document.getElementById('root');
    const navigation = document.querySelector('.navigation')
    navigation.style.zIndex = '1'
    root.style.overflowY = 'hidden';
    setShowLightbox(true)
  }

  return (
    <div
      className="hero_container__sectionContainerGallery"
      ref={containerRef}
    >
      <ImageLightbox {...{ windowWidth, handleOpen, hideImage: showLightbox }} />

      {windowWidth > 768 && <ESRB />}
    </div>
  );
}
