/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from 'react';
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

enum sortType {
  NONE,
  NAME,
  LENGTH,
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortBy: sortType,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortBy: sortType.NONE,
  };

  getStart = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  sortByName = () => {
    this.setState({ sortBy: sortType.NAME });
  };

  sortByLength = () => {
    this.setState({ sortBy: sortType.LENGTH });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: sortType.NONE,
    });
  };

  render(): React.ReactNode {
    const { isReversed, isStarted, sortBy } = this.state;
    const visibleProduct = [...goodsFromServer];

    if (isReversed) {
      visibleProduct.reverse();
    }

    switch (sortBy) {
      case sortType.NAME:
        visibleProduct.sort(
          (prod1, prod2) => prod1.localeCompare(prod2),
        );
        break;

      case sortType.LENGTH:
        visibleProduct.sort(
          (prod1, prod2) => prod1.length - prod2.length,
        );
        break;

      default:
    }

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            className="button__start"
            onClick={this.getStart}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <div className="card">
              <h1 className="card__title">List of Product</h1>
              <ol className="list">
                {visibleProduct.map(product => (
                  <li className="card__product" key={product}>
                    <p>{product}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="card__button">
              <button
                type="button"
                className="button"
                onClick={this.sortByName}
              >
                Sort by name
              </button>

              <button
                type="button"
                className="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                className="button button__reset"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}
