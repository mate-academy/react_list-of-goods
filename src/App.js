import React, { useState } from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

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

function App() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="App">
      {
        isStarted
          ? <GoodsList goods={goodsFromServer} />
          : (
            <button
              type="button"
              onClick={() => setIsStarted(true)}
            >
              Start
            </button>
          )
      }
    </div>
  );
}

export default App;
