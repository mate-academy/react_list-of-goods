import React from 'react';
import './App.css';
import NewOrder from './components/btnCreateNewOrder/NewOrder';

// comment for TA, i a little bit change my task, i has other list for items
// which you want buy, Danylo allowed these changes.
// I hope you understood what i writed here, sorry for my english)))

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
    <section className="goodsSection">
      <NewOrder goods={goodsFromServer} />
    </section>
  </div>
);

export default App;
