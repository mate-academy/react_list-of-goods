import React from 'react';
import GoodsList from './GoodsList';
import './Styles/Main.scss';

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
  <div className="good-list">
    <GoodsList goods={goodsFromServer} />
  </div>
);

export default App;
