import React from 'react';
import { Good } from './Good';
import { GoodsListProps } from '../props/GoodsListProps';

export const GoodsList = ({ goods }) => (
  <ul className="ui inverted teal large segment">
    {goods.map(({ name, id }) => (
      <li key={id} className="list-item">
        <Good name={name} />
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = GoodsListProps;
