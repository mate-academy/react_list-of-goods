/* eslint-disable no-plusplus */
import React from 'react';
import { ShapeGoodsItem } from './Shapes';
import { Option } from './Option';

export const OptionsList = (props) => {
  const list = [];

  for (let i = 0; i < props.i; ++i) {
    list.push(i + 1);
  }

  return (
    <select
      style={{ display: props.display }}
      value={props.selected}
      onChange={ev => props.choose(ev)}
    >
      {
        list.map(digit => (<Option digit={digit} key={digit} />))
      }
    </select>
  );
};

OptionsList.propTypes = ShapeGoodsItem.isRequired;
