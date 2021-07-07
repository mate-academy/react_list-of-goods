import React from 'react';
import { validName } from '../../validProps';

export function GoodItem({ name }) {
  return (
    <span>{name}</span>
  );
}

GoodItem.propTypes = {
  name: validName.isRequired,
};
