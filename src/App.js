import React from 'react';
import { Start } from './components/Start';
import './App.css';

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
  <div className="app">
    <Start goods={goodsFromServer} />
  </div>
);

export default App;
