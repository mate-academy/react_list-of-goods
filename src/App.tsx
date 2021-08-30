import React from 'react';
import GoodsListContainer from './components/GoodsListContainer';

import './App.scss';

const goodsFromServer: string[] = [
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

const App: React.FC = () => (
  <div className="App">
    <h1>Goods</h1>
    {goodsFromServer.length}

    <GoodsListContainer
      goods={goodsFromServer}
    />
  </div>
);

export default App;
