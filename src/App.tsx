import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList/GoodsList';

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
    <GoodsList goodsFromServer={goodsFromServer} />
  </div>
);

export default App;
