import React from 'react';
import './App.css';
import Goods from './components/Goods/Goods';

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

const App = () => {
  const goods = goodsFromServer;

  return (
    <div className="App">
      <h1>{`Goods ${goodsFromServer.length}`}</h1>
      <Goods goods={goods} />
    </div>
  );
};

export default App;
