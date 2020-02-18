import React from 'react';
import './App.css';
import List from './components/List/List';

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
    <List goods={goodsFromServer} />
  </div>
);

export default App;
