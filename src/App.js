import React from 'react';
import './App.css';
import { Goods } from './Component/Goods';

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

function App() {
  return (
    <div className="App">
      <h1>Goods</h1>
      <Goods goods={goodsFromServer} />
    </div>
  );
}

export default App;
