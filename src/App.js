import React from 'react';
import './App.scss';
import { ListGoods } from './components/ListGoods/ListGoods';

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
    <ListGoods listOfGoods={goodsFromServer} />
  </div>
);

export default App;
