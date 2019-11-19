import React from 'react';
import './App.css';
import ListOfProducts from './components/ListOfProducts';

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
    <h1>Goods 1</h1>
    <section>
      <ListOfProducts
        goodsFromServer={goodsFromServer}
        labelStart="Start"
      />
    </section>
  </div>
);

export default App;
