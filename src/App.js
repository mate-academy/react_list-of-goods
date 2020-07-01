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
    <h1>Goods</h1>
    <h2>{goodsFromServer.length}</h2>
    <GoodsList goods={goodsFromServer} />
  </div>
);

export default App;
