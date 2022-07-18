/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.scss';

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
  NONE = 'NONE',
  ALPABET = 'ALPABET',
  LENGTH = 'LENGTH',
  REVERSE = 'REVERSE',
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortBy: SortType,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isStarted: false,
    isReversed: false,
    sortBy: SortType.NONE,
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: SortType.NONE,
    });
  };

  startListView = () => {
    this.setState((state) => ({ isStarted: !state.isStarted }));
  };

  render() {
    const { isStarted, isReversed, sortBy } = this.state;
    const visibleGoods = [...goodsFromServer];

    visibleGoods.sort((good1, good2) => {
      switch (sortBy) {
        case SortType.ALPABET:
          return good1.localeCompare(good2);
        case SortType.LENGTH:
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {isStarted
          ? (
            <>
              <div className="buttons">
                <button
                  type="button"
                  className="button
                  is-primary
                  is-medium
                  is-responsive
                  is-focused"
                  onClick={() => this.setState({ sortBy: SortType.ALPABET })}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button
                  is-primary
                  is-medium
                  is-responsive
                  is-focused"
                  onClick={() => this.setState({ sortBy: SortType.LENGTH })}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="
                  button
                  is-primary
                  is-medium
                  is-responsive
                  is-focused"
                  onClick={() => this.setState({ isReversed: !isReversed })}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="
                  button
                  is-primary
                  is-medium
                  is-responsive
                  is-focused"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>

              <ol
                className="Goods"
              >
                {visibleGoods.map(good => (
                  <li
                    className="Goods__item"
                    key={good}
                  >
                    {good}
                  </li>
                ))}
              </ol>
            </>
          )
          : (
            <button
              type="button"
              className="button
              is-primary
              is-medium
              is-responsive
              is-focused"
              onClick={this.startListView}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}
