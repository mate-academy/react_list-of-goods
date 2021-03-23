import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul className="list">
    {
        goods.map(good => (
          <li key={good} className="list__item">
            {good}
          </li>
        ))
      }
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf.isRequired,
};
