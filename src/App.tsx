import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
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
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

type State = {
  isReversed: boolean;
  sortType: SortType;
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortGoodsByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortGoodsByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverseGoods = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  resetGoods = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const {
      sortType,
      isReversed,
    } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              sortType === SortType.ALPHABET
                ? 'button is-info'
                : 'button is-info is-light'
            }
            onClick={this.sortGoodsByAlphabet}
          >
            Sort alphabetically

          </button>
          <button
            type="button"
            className={
              sortType === SortType.LENGTH
                ? 'button is-info'
                : 'button is-info is-light'
            }
            onClick={this.sortGoodsByLength}
          >
            Sort by length

          </button>
          <button
            type="button"
            className={
              isReversed === true
                ? 'button is-info'
                : 'button is-info is-light'
            }
            onClick={this.reverseGoods}
          >
            Reverse

          </button>
          {(sortType || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetGoods}
            >
              Reset

            </button>
          )}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, { sortType, isReversed }).map(
              (good) => (
                <li
                  key={good}
                  data-cy="Good"
                >
                  {good}
                </li>
              ),
            )}
          </ul>
        </ul>
      </div>
    );
  }
}
