import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import goodsFromServer from './api/goodsFromServer';

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  let visibleGoods = [...goods];

  if (sortType === 0 && !isReversed) {
    visibleGoods = [...goods];
  }

  if (sortType === 1) {
    visibleGoods.sort((g1, g2) => g1.localeCompare(g2));
  }

  if (sortType === 2) {
    visibleGoods.sort((g1, g2) => g1.length - g2.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  resetSortType = () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.classList.add('is-light'));

    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              {
                'is-light': sortType !== 1,
              },
            )}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              {
                'is-light': sortType !== 2,
              },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              {
                'is-light': !isReversed,
              },
            )}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {sortType !== 0 || isReversed ? (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetSortType}
            >
              Reset
            </button>
          ) : ''}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(
              goodsFromServer,
              { sortType, isReversed },
            ).map((good) => (
              <li
                data-cy="Good"
                key={good}
              >
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}

export default App;
