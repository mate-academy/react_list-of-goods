import React from 'react';
import PropTypes from 'prop-types';

const GoodItem = ({ goodName }) => (
  <li className="goods__item">{goodName}</li>
);

GoodItem.propTypes = { goodName: PropTypes.string.isRequired };

export default GoodItem;
