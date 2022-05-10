import React from 'react';
import { SortableList } from './components/SortableList/SortableList';

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
    <SortableList goods={goodsFromServer} />
  </div>
);

export default App;
