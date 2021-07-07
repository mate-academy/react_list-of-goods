import React from 'react';
import { GoodItem } from '../GoodItem/GoodItem';

export function GoodsList({ names }) {
  return (
    <ul>
      {names.map(name => <li key={name}><GoodItem name={name} /></li>)}
    </ul>
  );
}
