import React from 'react';
import GoodsList from './components/goodsList/GoodsList';

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
    <GoodsList goodsFromServer={goodsFromServer} />
  </div>
);

export default App;
