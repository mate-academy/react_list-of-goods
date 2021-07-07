import React from 'react';
import './App.css';
import { GoodList } from './components/GoodList/GoodList';

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
    <h1 className="heading">
      {`Goods of ${goodsFromServer.length} items`}
    </h1>
    <GoodList goods={goodsFromServer} />
  </div>
);

export default App;
