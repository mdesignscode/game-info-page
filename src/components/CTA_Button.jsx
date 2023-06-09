export default function CTA_Button ({ child, label, id }) {
  return (
    <button className="cta_button" aria-label={label} id={id}>
      {child}
    </button>
  );
}

import PropTypes from 'prop-types';
CTA_Button.propTypes = {
  child: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string
}
