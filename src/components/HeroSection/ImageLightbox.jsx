import Previous from "icons/Previous";
import Next from "icons/Next";
import SlideImage from "./SlideImage";
import { useRef, useState } from "react";
import GalleryImages from "./GalleryImages";
import { ImageLightboxContext } from "components/hooks/useImageLightbox";
import { useContext } from 'react';

export default function ImageLightbox ({ handleOpen, windowWidth, hideImage }) {
  const [showButton, setShowButton] = useState(false);
  const thumbnailsRef = useRef();
  const activeNavRef = useRef();
  const containerRef = useRef();
  const { activeIndex, setActiveIndex } = useContext(ImageLightboxContext);

  return (
    <div
      className="image_lightBox"
      ref={containerRef}
    >
      <div className="image_lightBox__display">
        <img
          style={{ opacity: hideImage ? '0' : '1' }}
          src={windowWidth < 769 ? GalleryImages[activeIndex].mobile.display : GalleryImages[activeIndex].desktop.display}
          alt=""
          onClick={handleOpen}
        />

        <div
          className="image_lightBox__displayNavigation"
          ref={activeNavRef}
        >
          <Previous
            disabled={!activeIndex}
            label='See previous slide'
            onClick={() => setActiveIndex(activeIndex - 1)}
          />
          <Next
            disabled={activeIndex === GalleryImages.length - 1}
            onClick={() => setActiveIndex(activeIndex + 1)}
            label='See next slide'
          />
        </div>
      </div>

      <div
        className="image_lightBoxSlide"
      >
        <Previous
          disabled={!showButton}
          onClick={() => {
            setShowButton(false);
            thumbnailsRef.current.scrollLeft = 0;
          }}
          label='View previous thumbnails'
          onMouseEnter={() => activeNavRef.current.classList.add('showNav')}
          onMouseLeave={() => activeNavRef.current.classList.remove('showNav')}
        />
        <Next
          disabled={showButton}
          onClick={() => {
            setShowButton(true);
            thumbnailsRef.current.scrollLeft = thumbnailsRef.current.scrollWidth;
          }}
          label='View next thumbnails'
          onMouseEnter={() => activeNavRef.current.classList.add('showNav')}
          onMouseLeave={() => activeNavRef.current.classList.remove('showNav')}
        />
        <div
          className="image_lightBoxSlideThumbnails"
          ref={thumbnailsRef}
        >
          {GalleryImages.map((image, index) => {
            const { slide: src } = windowWidth < 769 ? image.mobile : image.desktop;
            return <SlideImage
              key={`slideImage_${index}`}
              {...{
                src, index, activeIndex, setActiveIndex, navRef: activeNavRef
              }}
            />;
          })}
        </div>
      </div>
    </div>
  );
}

import PropTypes from 'prop-types';
ImageLightbox.propTypes = {
  handleOpen: PropTypes.func,
  windowWidth: PropTypes.number.isRequired,
  hideImage: PropTypes.bool
};
