import React from 'react';
import './App.css';
import { GoodList } from './components/GoodLists/GoodList';

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
    <div className="buttons">
      <GoodList goods={goodsFromServer} />
    </div>
  </div>
);

export default App;
