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

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  visibleGoods.sort((itemA, itemB) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return itemA.localeCompare(itemB);
      case SortType.LENGTH:
        return itemA.length - itemB.length;
      default:
        return 0;
    }
  });
  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);
  if (!isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const { isReversed, sortType } = this.state;
    const listOfItems = getReorderedGoods(goodsFromServer, this.state);
    const unSorted = !isReversed
      && sortType === SortType.NONE;

    return (
      <>
        <div className="section content">
          <div className="buttons">
            <button
              type="button"
              className={classNames('button is-info', {
                'is-light': sortType !== SortType.ALPHABET,
              })}
              onClick={() => {
                this.setState({ sortType: SortType.ALPHABET });
              }}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className={classNames('button is-success', {
                'is-light': sortType !== SortType.LENGTH,
              })}
              onClick={() => {
                this.setState({ sortType: SortType.LENGTH });
              }}
            >
              Sort by length
            </button>

            <button
              type="button"
              className={classNames('button is-warning', {
                'is-light': isReversed === false,
              })}
              onClick={() => {
                this.setState({ isReversed: !isReversed });
              }}
            >
              Reverse
            </button>

            {!unSorted && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={() => {
                  this.setState({
                    isReversed: false,
                    sortType: SortType.NONE,
                  });
                }}
              >
                Reset
              </button>
            )}
          </div>

          <ul>
            {listOfItems.map(item => {
              return <li key={item} data-cy="Good">{item}</li>;
            })}
          </ul>
        </div>
      </>
    );
  }
}
