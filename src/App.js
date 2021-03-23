import React from 'react';
import './App.css';
import { ProductList } from './components/ProductList/ProductList';

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

    <ProductList products={goodsFromServer} />

  </div>
);

export default App;
