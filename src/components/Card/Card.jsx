import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

export const Card = ({ goodImage, good }) => (
  <>
    <div className="card">
      <img className="goodImg" src={goodImage[good]} alt="missingImg" />
      <h2>{good}</h2>
    </div>
  </>
);

Card.propTypes = {
  goodImage: PropTypes.objectOf(PropTypes.object).isRequired,
  good: PropTypes.string.isRequired,
};
