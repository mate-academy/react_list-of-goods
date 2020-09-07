import React from 'react';
import './App.css';
import { Goodlist } from './GoodsList';

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
    goods: [],
  }

  showList = () => {
    this.setState({
      goods: [
        ...goodsFromServer,
      ],
    });
  }

  showRevere = () => {
    this.setState(state => ({
      goods: [
        ...state.goods,
      ].reverse(),
    }));
  }

  showAlphabetically = () => {
    this.setState(state => ({
      goods: [
        ...state.goods,
      ].sort((a, b) => a.localeCompare(b)),
    }));
  }

  resetList = () => {
    this.setState({
      goods: [
        ...goodsFromServer,
      ],
    });
  }

  showByLength =() => {
    this.setState(state => ({
      goods: [
        ...state.goods,
      ].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          className="button"
          type="button"
          onClick={this.showList}
          hidden={goods.length}
        >
          Start
        </button>

        <div hidden={!goods.length}>
          <button
            className="button"
            type="button"
            onClick={this.showRevere}
          >
            Reverse
          </button>

          <button
            className="button"
            type="button"
            onClick={this.showAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            className="button"
            type="button"
            onClick={this.resetList}
          >
            Reset
          </button>

          <button
            className="button"
            type="button"
            onClick={this.showByLength}
          >
            Sort by length
          </button>
        </div>

        <Goodlist goods={goods} />
      </div>
    );
  }
}

export default App;
