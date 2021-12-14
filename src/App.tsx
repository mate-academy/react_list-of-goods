import React from 'react';
import './App.scss';

type State = {
  goods: string[],
  onStart: boolean,
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
    onStart: true,
  };

  reset = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
    }));
  };

  getStarted = () => {
    this.setState(() => ({
      onStart: false,
    }));
  };

  sort = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((prev, cur) => prev.localeCompare(cur)),
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
    const { goods, onStart } = this.state;

    return (
      <div className="App">
        {onStart
          ? (
            <>
              <button
                className="App__button--start"
                type="button"
                onClick={this.getStarted}
              >
                START
              </button>
            </>
          )
          : (
            <>
              <h1 className="App__title">Goods</h1>
              <div className="App__buttons">
                <button
                  className="App__button--reverse"
                  type="button"
                  onClick={this.reverseList}
                >
                  Reverse
                </button>
                <button
                  className="App__button--sortAlpha"
                  type="button"
                  onClick={this.sort}
                >
                  Sort alphabetically
                </button>
                <button
                  className="App__button--sortLength"
                  type="button"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>
                <button
                  className="App__button--reset"
                  type="button"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>
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
            </>
          )}
      </div>
    );
  }
}

export default App;
