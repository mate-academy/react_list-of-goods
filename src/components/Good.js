import React from 'react';
import './Good.css';
import { goodPropTypes } from './PropTypes';

const Good = ({ good }) => (
  <li className="list-of-goods__item">{good}</li>
);

Good.propTypes = goodPropTypes;

export default Good;
