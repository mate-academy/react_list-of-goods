import React from 'react';
import PropTypes from 'prop-types';

const Goods = ({ product }) => <li>{product}</li>;

Goods.propTypes = {
  product: PropTypes.string.isRequired,
};

export default Goods;
