import React from 'react';
import PropTypes from 'prop-types';

const GoodsSelectionItems = ({ digit }) => (
  <option
    className="selection__item"
  >
    {digit}
  </option>
);

GoodsSelectionItems.propTypes = {
  digit: PropTypes.number.isRequired,
};

export default GoodsSelectionItems;
