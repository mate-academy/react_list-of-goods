import React from 'react';
import './App.css';
import ListOfGoods from './ListOfGoods';

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
    {goodsFromServer.length}
    <ListOfGoods goods={goodsFromServer} />
  </div>
);

export default App;
