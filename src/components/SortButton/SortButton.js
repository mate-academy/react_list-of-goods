import React from 'react';
import { validName, validHandler } from '../../validProps';

export function SortButton({ name, handler }) {
  return (
    <button type="button" onClick={handler}>{name}</button>
  );
}

SortButton.propTypes = {
  name: validName.isRequired,
  handler: validHandler.isRequired,
};
