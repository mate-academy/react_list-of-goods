import React from 'react';
import './App.css';
import GoodList from './components/GoodList';
import 'semantic-ui-css/semantic.min.css';

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
    <GoodList
      goodsFromServer={goodsFromServer}
    />
  </div>
);

export default App;
