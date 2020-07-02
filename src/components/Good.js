import React from 'react';
import { GoodShape } from './GoodShape';

export const Good = ({ good }) => (
  <li key={good.id}>
    {good.name}
  </li>
);

Good.propTypes = GoodShape.isRequired;

export default Good;
