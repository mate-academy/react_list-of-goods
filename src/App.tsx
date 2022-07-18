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

type State = {
  status: string;
  goods: string[];
  sortAlphabetically: boolean;
  sortByLength: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    status: 'not started',
    goods: goodsFromServer,
    sortAlphabetically: false,
    sortByLength: false,
  };

  sortAlphabetically = () => {
    const goodsCopy = [...this.state.goods];

    goodsCopy.sort((word1, word2) => {
      return this.state.sortAlphabetically
        ? word2.localeCompare(word1)
        : word1.localeCompare(word2);
    });

    this.setState(prevState => (
      {
        goods: goodsCopy,
        sortAlphabetically: !prevState.sortAlphabetically,
      }
    ));
  };

  sortByLength = () => {
    const goodsCopy = [...this.state.goods];

    goodsCopy
      .sort((word1: string, word2: string) => {
        return this.state.sortByLength
          ? word2.length - word1.length
          : word1.length - word2.length;
      });

    this.setState(prevState => (
      {
        goods: goodsCopy,
        sortByLength: !prevState.sortByLength,
      }
    ));
  };

  reverse = () => {
    this.setState((prevState) => ({ goods: [...prevState.goods].reverse() }));
  };

  reset = () => {
    this.setState(({ goods: goodsFromServer }));
  };

  render() {
    const { status, goods } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          className={
            status === 'not started'
              ? 'button-start--visible'
              : 'button-start--unvisible'
          }
          onClick={() => this.setState({ status: 'was started' })}
        >
          Start
        </button>

        <div
          className={
            status === 'not started'
              ? 'main-part--unvisible'
              : 'main-part--visible'
          }
        >
          <button
            type="button"
            onClick={this.sortAlphabetically}
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
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>

          <ul className="Goods">
            {goods.map(good => (
              <li
                key={good}
                className="Goods__item"
              >
                {good}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
