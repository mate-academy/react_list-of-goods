import React from 'react';
import Start from './component/Statr';

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
    <Start goods={goodsFromServer} />
  </div>
);

export default App;
