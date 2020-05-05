import React from 'react';
import './GoodsListItem.scss';
import PropTypes from 'prop-types';

const GoodsListItem = ({ name }) => (
  <li>{name}</li>
);

GoodsListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GoodsListItem;
