import React from 'react';
import { Goods } from './components/Goods/Goods';
import './App.css';

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
    <Goods
      goods={goodsFromServer}
    />
  </div>
);

export default App;
