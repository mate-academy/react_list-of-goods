import React from 'react';
import './App.scss';
import { ListOfGoods } from './components/ListOfGoods/ListOfGoods';

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
    <h1 className="App__title">List of goods:</h1>
    <ListOfGoods goodsFromServer={goodsFromServer} />
  </div>
);

export default App;
