import React from 'react';
import './App.css';
import { ShowGoodsList } from './ShowGoodsList';

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
  <div className="app">
    <ShowGoodsList goods={goodsFromServer} />
  </div>
);

export default App;
