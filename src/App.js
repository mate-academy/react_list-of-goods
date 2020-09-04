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
      ].sort(),
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

        <button
          className="button"
          type="button"
          onClick={this.showRevere}
          hidden={!goods.length}
        >
          Reverse
        </button>

        <button
          className="button"
          type="button"
          onClick={this.showAlphabetically}
          hidden={!goods.length}
        >
          Sort alphabetically
        </button>

        <button
          className="button"
          type="button"
          onClick={this.resetList}
          hidden={!goods.length}
        >
          Reset
        </button>

        <button
          className="button"
          type="button"
          onClick={this.showByLength}
          hidden={!goods.length}
        >
          Sort by length
        </button>

        <Goodlist goods={goods} />
      </div>
    );
  }
}

export default App;
