import React from 'react';
import PropTypes from 'prop-types';
import './GoodsItem.css';

export const GoodsItem = ({ good }) => (
  <li className="list-group-item">{good}</li>
);

GoodsItem.propTypes = {
  good: PropTypes.string,
};

GoodsItem.defaultProps = {
  good: '',
};
