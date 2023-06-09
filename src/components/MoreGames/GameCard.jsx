import HeartsAndSparks from "icons/HeartsAndSparks";

export default function GameCard ({ cover, title, release, price, hasDemo }) {
  return (
    <div className="more_games__card">
      <div className="more_games__cardHero">
        <img src={cover} alt="" />
      </div>

      <div className="more_games__cardText">
        <div className="more_games__cardTextDetails">
          <h2>{title}</h2>
          <p>{release}</p>
        </div>
        {hasDemo && <span>Free demo</span>}
        <div className="more_games__cardTextPrice">${price}</div>
        <span className="more_games__cardTextPlatform">
          Nintendo Switch
        </span>
      </div>

      <HeartsAndSparks />
    </div>
  );
}

import PropTypes from 'prop-types';
GameCard.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  hasDemo: PropTypes.bool.isRequired,
};

