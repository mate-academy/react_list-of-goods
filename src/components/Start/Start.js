import React from 'react';
import { validHandler } from '../../validProps';

export function Start({ handler }) {
  return (
    <button type="button" onClick={handler}>Start!</button>
  );
}

Start.propTypes = {
  handler: validHandler.isRequired,
};
