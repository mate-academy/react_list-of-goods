import React from 'react';
import './App.css';
import { Goods } from './components/Goods';

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
    <h1>
      {goodsFromServer.length}
      &nbsp;
      Goods
    </h1>
    <Goods goods={goodsFromServer} />
  </div>
);

export default App;
