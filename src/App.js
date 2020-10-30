import React, { useState } from 'react';
import { StartButton } from './components/StartButton';
import { List } from './components/List';
import './App.css';

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

const App = () => {
  const [start, setStart] = useState(false);

  function changeStart() {
    setStart(true);
  }

  return (
    <div className="App">
      {start
        ? <List goodsList={goodsFromServer} />
        : <StartButton onStart={changeStart} />}
    </div>
  );
};

export default App;
