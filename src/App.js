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
    isButtonsVisible: false,
    goods: [],
  }

  start = () => {
    if (this.state.goods.length === 0) {
      this.setState({
        isButtonsVisible: true,
        goods: goodsFromServer,
      });
    }

    this.setState(prevState => ({
      goods: prevState.goods,
    }));
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sort = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  reset = () => {
    this.setState(({
      goods: goodsFromServer,
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((first, second) => first.length - second.length),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <ul className="goodsList">
          {this.state.goods.map(product => (
            <li key={product}>
              {product}
            </li>
          ))}
        </ul>
        <div>
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
          {this.state.isButtonsVisible && (
          <>
            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sort}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
          </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
