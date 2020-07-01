import React from 'react';
import PropTypes from 'prop-types';
import './GoodsItem.css';

const GoodsItem = ({ good }) => (
  <li className="goods__item">{ good }</li>
);

GoodsItem.propTypes = { good: PropTypes.string.isRequired };

export default GoodsItem;
