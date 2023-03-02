import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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

  switch (sortType) {
    case SortType.NONE:
      break;

    case SortType.ALPHABET:
      visibleGoods.sort();
      break;

    case SortType.LENGTH:
      visibleGoods.sort((a, b) => (a.length - b.length));
      break;

    default:
      // eslint-disable-next-line no-console
      console.log('error of sortType');
  }

  if (!isReversed) {
    return visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: true,
    sortType: SortType.NONE,
  };

  render() {
    const { isReversed, sortType } = this.state;
    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            onClick={() => this.setState({ sortType: SortType.ALPHABET })}
            className={classNames(
              'button',
              'is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}

          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={() => this.setState({ sortType: SortType.LENGTH })}
            className={classNames(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}

          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={() => this.setState({ isReversed: !isReversed })}
            className={classNames(
              'button',
              'is-warning',
              { 'is-light': isReversed === true },
            )}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || !isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => this.setState({
                sortType: SortType.NONE, isReversed: true,
              })}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visibleGoods.map(good => (
            <li
              data-cy="Good"
              key={good}
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
