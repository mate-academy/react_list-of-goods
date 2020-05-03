import React from 'react';
import PropTypes from 'prop-types';

const GoodsItem = ({ good }) => (
  <li>{good}</li>
);

GoodsItem.propTypes = {
  good: PropTypes.string.isRequired,
};

export default GoodsItem;
