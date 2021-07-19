import React from 'react';
import { GoodType } from '../../types';

export const Good = ({ good }) => (
  <span>{good}</span>
);

Good.propTypes = {
  good: GoodType.isRequired,
};
