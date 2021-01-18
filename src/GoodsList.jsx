import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods, visibility }) => (
  <ul className={visibility ? 'visible' : 'hidden'}>
    {goods.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  visibility: PropTypes.bool.isRequired,
};
