import PropTypes from "prop-types";

export default function Close ({ stateToHide, setStateToHide, isX }) {
  return (
    <button
      onClick={() => setStateToHide(stateToHide)}
      style={{
        background: "transparent",
        border: "none",
        display: 'grid'
      }}
      aria-label="Close Menu"
      className="close-button"
    >
      {isX ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" role="presentation" alt="" data-testid="XIcon" size="24" color="currentColor">
          <path fill="currentColor" d="M32 4.53L27.47 0 16 11.47 4.53 0 0 4.53 11.47 16 0 27.47 4.53 32 16 20.53 27.47 32 32 27.47 20.53 16 32 4.53z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          role="presentation"
          alt=""
          data-testid="CloseCircleIcon"
          size="24"
          color="currentColor"
        >
          <path
            d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm5.735 8L16 13.735 10.265 8 8 10.265 13.735 16 8 21.735 10.265 24 16 18.265 21.735 24 24 21.735 18.265 16 24 10.265 21.735 8z"
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
      )}
    </button>
  );
}

Close.propTypes = {
  stateToHide: PropTypes.bool,
  setStateToHide: PropTypes.func.isRequired,
  isX: PropTypes.bool
};
