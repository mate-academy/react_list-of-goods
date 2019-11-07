import React from 'react';
import PropTypes from 'prop-types';

export default function Goods({ product }) {
  return (
    <li>{product}</li>
  );
}

Goods.propTypes = {
  product: PropTypes.string.isRequired,
};
