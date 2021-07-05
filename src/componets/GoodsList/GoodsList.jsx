import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ list }) => (
  <ul>
    {list.map(unit => <li key={unit}>{unit}</li>)}
  </ul>
);

GoodsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
