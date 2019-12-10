import React from 'react';
import GoodList from './components/GoodList';

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
    <h1>Goods 1</h1>
    <GoodList goods={goodsFromServer} />
  </div>
);

export default App;
