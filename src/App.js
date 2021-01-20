import React from 'react';
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

class App extends React.Component {
  state = {
    goods: [...goodsFromServer],
    hiddenList: true,
  }

  getGoods = () => {
    this.setState({
      hiddenList: false,
    });
  }

  reverseList = () => {
    this.setState(state => ({
      goods: state.goods.reverse(),
    }));
  }

  sortList = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.localeCompare(b)),
    }));
  }

  resetList = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  }

  sortLength = () => {
    this.setState(state => ({
      goods: state.goods.sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { goods, hiddenList } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          onClick={this.getGoods}
          hidden={!hiddenList}
        >
          Start
        </button>

        <button
          type="button"
          onClick={this.reverseList}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortList}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.resetList}
        >
          Reset
        </button>

        <button
          type="button"
          onClick={this.sortLength}
        >
          Sort by length
        </button>

        <h1>Goods</h1>

        <ul hidden={hiddenList}>
          {goods.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
