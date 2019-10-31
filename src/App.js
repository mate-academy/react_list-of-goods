import React from 'react';
import ListOfGoods from './components/ListOfGoods/ListOfGoods';

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
    <ListOfGoods listFromServer={goodsFromServer} />
  </div>
);

export default App;
