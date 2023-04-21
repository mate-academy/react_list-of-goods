import React from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
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

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

export class App extends React.Component<{}, ReorderOptions> {
  state: ReorderOptions = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  handleClick = (sortMethod: string) => {
    switch (sortMethod) {
      case 'reverce':
        return this.setState(state => ({
          isReversed: !state.isReversed,
        }));

      case 'sortByAlphabet':
        return this.setState({ sortType: SortType.ALPHABET });

      case 'sortByLength':
        return this.setState({ sortType: SortType.LENGTH });

      case 'reset':
        return this.setState({
          sortType: SortType.NONE,
          isReversed: false,
        });

      default:
        throw new Error('Incorrect sort method');
    }
  };

  render(): React.ReactNode {
    const { sortType, isReversed } = this.state;
    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    visibleGoods.sort((goodA, goodB) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return goodA.localeCompare(goodB);

        case SortType.LENGTH:
          return goodA.length - goodB.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            onClick={this.handleClick.bind(this, 'sortByAlphabet')}
            className={classNames(
              'button is-info',
              {
                'is-light': this.state.sortType !== SortType.ALPHABET,
              },
            )}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.handleClick.bind(this, 'sortByLength')}
            className={classNames(
              'button is-success',
              {
                'is-light': this.state.sortType !== SortType.LENGTH,
              },
            )}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.handleClick.bind(this, 'reverce')}
            className={classNames(
              'button is-warning',
              {
                'is-light': (!this.state.isReversed),
              },
            )}
          >
            Reverse
          </button>

          {sortType !== SortType.NONE || isReversed ? (
            <button
              type="button"
              onClick={this.handleClick.bind(this, 'reset')}
              className="button is-danger is-light"
            >
              Reset
            </button>
          ) : null}
        </div>

        <ul>
          <ul>
            {visibleGoods.map(good => (
              <li key={good} data-cy="Good">
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
