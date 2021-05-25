import React from 'react';
import './App.css';
import { ListGoods } from './components/ListGoods';

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
  <ListGoods goods={goodsFromServer} />
);

export default App;
