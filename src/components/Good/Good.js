import React from 'react';
import { goodType } from '../../types';

export const Good = props => (
  <span>{props.good}</span>
);

Good.propTypes = {
  good: goodType.isRequired,
};
