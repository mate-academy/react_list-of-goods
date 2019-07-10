import React from 'react';
import PropTypes from 'prop-types';

const GoodsInfo = ({ good }) => (
  <li className="App__all">
    {good}
  </li>
);

GoodsInfo.propTypes = {
  good: PropTypes.shape({
    good: PropTypes.string.isRequired,
  }).isRequired,
};

export default GoodsInfo;
