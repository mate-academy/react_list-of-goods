import React from 'react';
import { FuncType } from '../../types';

export const Start = ({ start }) => (
  <button
    type="button"
    onClick={() => {
      start();
    }}
  >
    Start
  </button>
);

Start.propTypes = {
  start: FuncType.isRequired,
};
