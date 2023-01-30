import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { GoodsBlock } from './components/goodsBlock';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App: React.FC = () => {
  return (
    <div className="section content">
      <GoodsBlock goods={goodsFromServer} />
    </div>
  );
};
