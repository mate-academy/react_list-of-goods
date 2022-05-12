import React from 'react';
import './App.scss';

import { SortList } from './Components/SortList/SortList';

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
  <div className="app">
    <SortList goods={goodsFromServer} />
  </div>
);

export default App;
