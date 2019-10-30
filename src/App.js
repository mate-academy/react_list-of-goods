import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Init from './components/init/Init';

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
    <Init goods={goodsFromServer} />
  </div>
);

export default App;
