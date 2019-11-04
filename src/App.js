import React from 'react';

import List from './components/List';

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
    <List arrOfGoods={goodsFromServer} />

  </div>
);

export default App;
