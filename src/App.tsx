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
  isStarted: boolean,
  goodsToSort: string[],
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    goodsToSort: [...goodsFromServer],
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  sortByAlph = () => {
    this.state.goodsToSort.sort((good1, good2) => {
      return good1.localeCompare(good2);
    });

    this.forceUpdate();
  };

  sortByLength = () => {
    this.state.goodsToSort.sort((good1, good2) => {
      return (good1.length - good2.length);
    });

    this.forceUpdate();
  };

  sortReverse = () => {
    return this.state.goodsToSort.reverse();
  };

  reset = () => {
    this.setState({ goodsToSort: [...goodsFromServer] });
  };

  render() {
    const { isStarted } = this.state;

    return (
      <div className="App">
        <h1>Goods list</h1>
        {
          !isStarted
            ? (
              <button
                type="button"
                onClick={() => {
                  this.start();
                }}
              >
                Start
              </button>
            )
            : null
        }

        {
          isStarted
            ? (
              <>
                <ul>
                  {this.state.goodsToSort.map(good => (
                    <li key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => {
                    this.sortByAlph();
                  }}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  onClick={() => {
                    this.sortByLength();
                  }}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  onClick={() => {
                    this.sortReverse();
                    this.forceUpdate();
                  }}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  onClick={() => {
                    this.reset();
                  }}
                >
                  Reset
                </button>
              </>
            )
            : null
        }
      </div>
    );
  }
}
