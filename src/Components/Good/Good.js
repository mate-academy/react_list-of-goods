import React from 'react';
import { GoodShape } from '../../Shapes/GoodShape';
import './Good.css';

export const Good = ({ good }) => (
  <li
    className="good"
  >
    {good}
  </li>
);

Good.propTypes = GoodShape;
