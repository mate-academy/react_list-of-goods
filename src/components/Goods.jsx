import React from 'react';
import PropTypes from 'prop-types';

export const Goods = ({ good }) => (
  <>
    {good}
  </>
);

Goods.propTypes = {
  good: PropTypes.string.isRequired,
};
