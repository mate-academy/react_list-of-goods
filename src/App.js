import React, { useState } from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList/GoodsList';

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

export function App() {
  const [startClicked, setStart] = useState(false);

  const clickHandler = (event) => {
    setStart(true);
    event.target.hidden = true;
  };

  return (
    <div className="App">
      <button
        className="start"
        type="button"
        onClick={clickHandler}
      >
        Start
      </button>
      {startClicked && <GoodsList initialGoods={goodsFromServer} />}
    </div>
  );
}
