import React from 'react';
import PropTypes from 'prop-types';

export const GoodItem = ({ good }) => (
  <li className="list__item">
    <span className="item__text">{good}</span>
  </li>
);

GoodItem.propTypes = PropTypes.string.isRequired;
