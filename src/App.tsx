import React from 'react';
import className from 'classnames';
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
  NONE = 'NONE',
  ALPABET = 'ALPABET',
  LENGTH = 'LENGTH',
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

function GetReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoodsSort = [...goods];

  switch (sortType) {
    case 'ALPABET':
      visibleGoodsSort.sort((a, b) => a.localeCompare(b));
      break;

    case 'LENGTH':
      visibleGoodsSort.sort((a, b) => a.length - b.length);
      break;

    default:
      break;
  }

  if (isReversed === false) {
    return visibleGoodsSort;
  }

  return visibleGoodsSort.reverse();
}

export class App extends React.Component {
  state: Readonly<{
    sortType: SortType,
    isReversed: boolean,
  }> = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  render() {
    const { sortType, isReversed } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={className(
              'button',
              'is-info',
              { 'is-light': sortType !== SortType.ALPABET },
            )}
            onClick={() => {
              this.setState({ sortType: SortType.ALPABET });
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={className(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={() => {
              this.setState({ sortType: SortType.LENGTH });
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={className(
              'button',
              'is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={() => {
              this.setState({ isReversed: !isReversed });
            }}
          >
            Reverse
          </button>

          <button
            type="button"
            className={className(
              'button',
              'is-light',
              'is-danger',
              { 'is-hidden': sortType === SortType.NONE && !isReversed },
            )}
            onClick={() => {
              this.setState({ sortType: SortType.NONE });
              this.setState({ isReversed: false });
            }}
          >
            Reset
          </button>
        </div>

        <ul>
          {GetReorderedGoods(goodsFromServer, this.state)
            .map((product: string) => (
              <li data-cy="Good" key={product}>{product}</li>
            ))}
        </ul>
      </div>
    );
  }
}
