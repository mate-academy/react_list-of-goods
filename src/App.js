import React from 'react';
import Goodlist from './Goodlist';
import LoadButton from "./LoadButton";

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
    <LoadButton />
    <Goodlist  goods ={goodsFromServer}/>
  </div>
);

export default App;
