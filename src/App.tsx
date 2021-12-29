import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

const goodsFromServer: string[] = [
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
    <div className="App">
      <GoodsList goodsFromServer={goodsFromServer} />
    </div>
  );
};
