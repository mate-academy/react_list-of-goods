import React from 'react';
import GoodsList from './Components/GoodsList';
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
  <div className="app">
    <h1>Goods</h1>
    {goodsFromServer.length}
    <GoodsList goodsList={goodsFromServer} />
  </div>
);

export default App;
