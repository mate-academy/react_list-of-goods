import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(stuff => (
      <li key={stuff}>
        {stuff}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
