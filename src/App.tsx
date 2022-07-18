/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
  SortAlphabetically: boolean;
  SortByLength: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    status: 'not started',
    goods: goodsFromServer,
    SortAlphabetically: false,
    SortByLength: false,
  };

  SortAlphabetically = () => {
    const goodsCopy = [...this.state.goods];

    if (this.state.SortAlphabetically) {
      goodsCopy.sort((word1, word2) => word2.localeCompare(word1));
    } else {
      goodsCopy.sort();
    }

    this.setState(prevState => (
      {
        goods: goodsCopy,
        SortAlphabetically: !prevState.SortAlphabetically,
      }
    ));
  };

  SortByLength = () => {
    const goodsCopy = [...this.state.goods];

    if (this.state.SortByLength) {
      goodsCopy
        .sort((word1: string, word2: string) => word2.length - word1.length);
    } else {
      goodsCopy
        .sort((word1: string, word2: string) => word1.length - word2.length);
    }

    this.setState(prevState => (
      {
        goods: goodsCopy,
        SortByLength: !prevState.SortByLength,
      }
    ));
  };

  Reverse = () => {
    const goodsCopy = [...this.state.goods];

    this.setState(({ goods: goodsCopy.reverse() }));
  };

  Reset = () => {
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
            onClick={this.SortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.SortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.Reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.Reset}
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
