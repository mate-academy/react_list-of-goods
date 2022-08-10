/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';

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

enum SortType {
  NONE,
  ALPABET,
  LENGTH,
}

// Use this function in the render method

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
  activeSortByAlphabet: boolean | null,
  activeSortByLength: boolean | null
};

export class App extends React.Component <{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: 0,
    activeSortByAlphabet: false,
    activeSortByLength: false,
  };

  start = () => {
    this.setState({ isStarted: true });
    this.forceUpdate();
  };

  sortByAlphabet = () => {
    this.setState(state => ({
      sortType: SortType.ALPABET,
      activeSortByAlphabet: !state.activeSortByAlphabet,
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      sortType: SortType.LENGTH,
      activeSortByLength: !state.activeSortByLength,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: 0,
    });
  };

  render() {
    const {
      isStarted,
      isReversed,
      sortType,
      activeSortByAlphabet,
      activeSortByLength,
    } = this.state;
    const goods = [...goodsFromServer];

    goods.sort((item1, item2) => {
      switch (sortType) {
        case SortType.ALPABET:
          return item1.localeCompare(item2);
        case SortType.LENGTH:
          return (item1.length - item2.length);
        default:
          return 0;
      }
    });

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            className="
              button
              is-success
              is-rounded
            "
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <div className="container">
              <button
                type="button"
                className={`
                  button
                  ${activeSortByAlphabet ? 'active' : ''}
                  is-warning
                  is-rounded
                `}
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className={`
                  button
                  ${activeSortByLength ? 'active' : ''}
                  is-warning
                  is-rounded
                `}
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                className={`
                  button
                  ${isReversed ? 'active' : ''}
                  is-warning
                  is-rounded
                `}
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                className="
                  button
                  is-danger
                  is-rounded
                "
                onClick={this.reset}
              >
                Reset
              </button>
            </div>

            <ul className="Goods">
              {goods.map(good => (
                <li className="Goods__item" key={good}>{good}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
