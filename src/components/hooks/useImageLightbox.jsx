import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const ImageLightboxContext = createContext();

export function ImageLightboxProvider ({ children }) {
  const [showLightbox, setShowLightbox] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ImageLightboxContext.Provider value={{
      showLightbox, setShowLightbox, activeIndex, setActiveIndex
    }}>
      {children}
    </ImageLightboxContext.Provider>
  );
}

ImageLightboxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
