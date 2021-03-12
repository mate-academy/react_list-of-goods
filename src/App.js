import React from 'react';
import './App.css';
import { Goods } from './Component/Goods';

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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <Goods goods={this.state.goods} />
      </div>
    );
  }
}

export default App;
