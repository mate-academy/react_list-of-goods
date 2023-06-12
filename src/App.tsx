import React from 'react';
import classNames from 'classnames';
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

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case SortType.LENGTH:
        return a.length - b.length;

      case SortType.ALPHABET:
        return a.localeCompare(b);

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

export class App extends React.Component<{}, ReorderOptions> {
  state: ReorderOptions = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const {
      isReversed,
      sortType,
    } = this.state;

    const reoderedGoods = getReorderedGoods(goodsFromServer, this.state);
    const sortedByAlphabet = sortType === SortType.ALPHABET;
    const sortedByLength = sortType === SortType.LENGTH;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button', 'is-info', {
              'is-light': !sortedByAlphabet,
            })}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', 'is-success', {
              'is-light': !sortedByLength,
            })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button', 'is-warning', {
              'is-light': !isReversed,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {reoderedGoods.map(food => (
              <li
                key={food}
                data-cy="Good"
              >
                {food}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
