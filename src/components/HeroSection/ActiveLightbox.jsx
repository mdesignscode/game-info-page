import Close from 'icons/Close';
import ImageLightbox from "./ImageLightbox";
import useWindowWidth from "components/hooks/useWindowWidth";
import { ImageLightboxContext } from "components/hooks/useImageLightbox";
import { useContext } from 'react';

export default function ActiveLightbox () {
  const windowWidth = useWindowWidth();
  const { setShowLightbox } = useContext(ImageLightboxContext);

  function handleClose () {
    const root = document.getElementById('root');
    root.style.overflowY = 'scroll';
    setShowLightbox(false);
    const navigation = document.querySelector('.navigation')
    navigation.style.zIndex = '10'
  }

  return (
    <div className="lightbox">
      <div className="lightboxContainer">
        <span className="close-button_container">
          <Close
            {...{ setStateToHide: handleClose, isX: true }}
          />
        </span>
        <ImageLightbox {...{ windowWidth }} />
      </div>
    </div>
  );
}
