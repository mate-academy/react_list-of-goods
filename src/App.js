import React from 'react';
import './App.css';
import { ListOfGoods } from './ListOfGoods';

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
    visibility: false,
  };

  start = () => {
    this.setState(state => ({
      visibility: !state.visibility,
    }));
  };

  render() {
    const { visibility } = this.state;

    return (
      <div
        className="App"
      >
        <h1>Goods</h1>
        <button
          className="button"
          type="button"
          onClick={this.start}
        >
          {visibility ? 'Close' : 'Start !'}
        </button>
        {visibility && (<ListOfGoods goods={goodsFromServer} />)}
      </div>
    );
  }
}
export default App;
