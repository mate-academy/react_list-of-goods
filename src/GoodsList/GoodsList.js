import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ list }) => (
  <ul>
    {list.map(goods => <li>{goods}</li>)}
  </ul>
);

GoodsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
