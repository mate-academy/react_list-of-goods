import React from 'react';

import List from './components/List';

// eslint-disable-next-line no-unused-vars
import main from './styles/main.css';

const goodsFromServer = [
  'Punchal',
  'Hyams Beach',
  'Lyme Regis',
  'Beach with caves',
  'Kayhalulu',
  'Beach with seashells',
  'Glass beach',
  'Purple beach',
  'Papacolea',
  'Golden beach of Malta',
];

const App = () => (
  <div className="App">
    <List arrOfGoods={goodsFromServer} />
  </div>
);

export default App;
