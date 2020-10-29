import React from 'react';
import { GoodShape } from '../shapes/GoodShape';

export const Good = ({ name }) => (
  <>
    {name}
  </>
);

Good.propTypes = GoodShape;
