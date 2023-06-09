export default function Previous ({ onClick, disabled, label }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
      className="previous"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" role="presentation" alt="" data-testid="ChevronLeftIcon" size="32" color="white">
        <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M14.3 16l12.4 11.7-4.5 4.3L5.3 16 22.2 0l4.5 4.3z" />
      </svg>
    </button>
  );
}

import PropTypes from 'prop-types';
Previous.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired
};
