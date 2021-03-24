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

  displayList = (clickEvent) => {
    this.setState(({
      isButtonsVisible: true,
      goods: goodsFromServer,
    }));
    clickEvent.target.classList.add('hidden');
  }

  reverseList = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].reverse(),
    }));
  }

  sortListByDefault = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods].sort(),
    }));
  }

  resetList = () => {
    this.setState(({
      goods: goodsFromServer,
    }));
  }

  sortListByLength = () => {
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
            onClick={this.displayList}
          >
            Start
          </button>
          {this.state.isButtonsVisible && (
          <>
            <button
              type="button"
              onClick={this.reverseList}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sortListByDefault}
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
              onClick={this.sortListByLength}
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
