import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodList';

const goodsFromServer = [
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

const App = () => (
  <div className="App">
    <h1 className="title">Goods</h1>
    <GoodsList goods={goodsFromServer} />
  </div>
);

export default App;
