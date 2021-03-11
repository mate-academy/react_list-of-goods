import PropTypes from 'prop-types';

import React from 'react';

export function Goods({ goods }) {
  return (
    <li>{goods}</li>
  );
}

Goods.propTypes = {
  goods: PropTypes.string.isRequired,
}.isRequired;
