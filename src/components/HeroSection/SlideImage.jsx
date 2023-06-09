export default function SlideImage ({ src, index, activeIndex, setActiveIndex, navRef }) {
  const trailer = index === 1 ? "trailer" : "";
  const active = index === activeIndex ? "active" : "";
  return (
    <span
      onPointerDown={() => setActiveIndex(index)}
      className={`${trailer} ${active}`}
      onMouseEnter={() => navRef.current.classList.add('showNav')}
      onMouseLeave={() => navRef.current.classList.remove('showNav')}
    >
      <img src={src} alt="" aria-label={`See slide image - ${index}`} />
      {index === 1 && (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(255, 255, 255, 1)", transform: "msFilter" }}>
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
          <path d="m9 17 8-5-8-5z" />
        </svg>
      )}
    </span>
  );
}

import PropTypes from 'prop-types';
SlideImage.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  navRef: PropTypes.instanceOf(Object).isRequired
};
