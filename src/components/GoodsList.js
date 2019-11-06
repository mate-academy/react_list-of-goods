import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GoodsList;
