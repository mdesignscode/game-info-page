export default function Next ({ onClick, disabled, label, onMouseLeave, onMouseEnter }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
      className="next"
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" role="presentation" alt="" data-testid="ChevronRightIcon" size="32" color="white">
        <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M5.3 4.3L9.8 0l16.9 16L9.8 32l-4.5-4.3L17.7 16z" />
      </svg>
    </button>
  );
}

import PropTypes from 'prop-types';
Next.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};
