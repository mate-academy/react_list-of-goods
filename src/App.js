import React from 'react';
import './App.css';
import Start from './Start';

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

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <Start goods={goodsFromServer} />
      </div>
    );
  }
}

export default App;
