import React from 'react';
import './App.css';

type State = {
  goods: string[]
};

const goodsFromServer: string[] = [
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

class App extends React.PureComponent<{}, State> {
  state = {
    goods: [...goodsFromServer],
  };

  reset = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
    }));
  };

  sort = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort(),
    }));
  };

  reverseList = () => {
    this.setState(state => {
      const reversedGoods = [...state.goods].reverse();

      return {
        goods: reversedGoods,
      };
    });
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort(
        (a, b) => a.length - b.length,
      ),
    }));
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        <button
          type="button"
          onClick={this.reverseList}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.reverseList}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <button
          type="button"
          onClick={this.sort}
        >
          Reset
        </button>

        <ul className="GoodsList">
          {goods.map((good) => (
            <li
              key={good}
              className="GoodsList__item"
            >
              <span>{good}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
