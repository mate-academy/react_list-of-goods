import React from 'react';
import './Good.css';
import PropTypes from 'prop-types';

export const Good = props => (
  <li className="goods__item">{props.children}</li>
);

Good.propTypes = {
  children: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
