/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';

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

enum SortType {
  NONE = 'None',
  ALPHABET = 'Alphabet',
  LENGTH = 'Length',
}

function getReorderedGoods(
  goods: string[],
  sortBy: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  switch (sortBy) {
    case SortType.ALPHABET:
      visibleGoods.sort((goodA, goodB) => goodA.localeCompare(goodB));

      break;

    case SortType.LENGTH:
      visibleGoods.sort((goodA, goodB) => goodA.length - goodB.length);

      break;

    default:
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortBy: SortType,
};

export class App extends React.PureComponent<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortBy: SortType.NONE,
  };

  start = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  sortBy = (type: SortType) => {
    this.setState({ sortBy: type });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      sortBy: SortType.NONE,
      isReversed: false,
    });
  };

  render(): React.ReactNode {
    const sortedList = getReorderedGoods(
      goodsFromServer,
      this.state.sortBy,
      this.state.isReversed,
    );

    return (
      <div className="App">
        <h1 className="App__title">
          List of Goods
        </h1>

        {!this.state.isStarted && (
          <button
            className="
              button
              button--start
            "
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {this.state.isStarted && (
          <div className="App__content">
            <div className="buttons">
              <button
                className="
                  button
                  button--sort-name
                "
                type="button"
                onClick={() => this.sortBy(SortType.ALPHABET)}
              >
                Sort alphabetically
              </button>

              <button
                className="button"
                type="button"
                onClick={() => this.sortBy(SortType.LENGTH)}
              >
                Sort by length
              </button>

              <button
                className="button"
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                className="button"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>

            <ul
              className="Goods"
            >
              {sortedList.map(good => (
                <li className="Goods__item" key={good}>
                  <p>{good}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
