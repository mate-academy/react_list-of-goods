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

const App: React.FC = () => (
  <div className="App content">
    <h1 className="title">List of Goods</h1>
    <GoodsList goods={goodsFromServer} />
  </div>
);

export default App;
