import React from 'react';
import './App.css';
import { GoodsList } from './Components/GoodsList/GoodsList';

const goodsFromServer:string[] = [
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

const App:React.FC = () => {
  return (
    <div className="App">
      <GoodsList goodsFromServer={goodsFromServer} />
    </div>
  );
};

export default App;
