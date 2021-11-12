import React from 'react';
import { uuid } from 'uuidv4';
import './App.css';

interface Good {
  key: string,
  value: string
}

const goodsFromServer: Good[] = [
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
].map(good => ({
  key: uuid(),
  value: good,
}));

export class App extends React.Component {
  state = {

  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {goodsFromServer.length}
      </div>
    );
  }
}
