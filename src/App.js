import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Select from './components/Select';

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
    <Select
      goodsFromServer={goodsFromServer}
    />
  </div>
);

export default App;
