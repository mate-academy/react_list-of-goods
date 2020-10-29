import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Show from './components/Content';

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
    <Show
      goodsFromServer={goodsFromServer}
    />
  </div>
);

export default App;
