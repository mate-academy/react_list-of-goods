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
  NONE,
  ALPABET,
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
      case SortType.ALPABET:
        return a.localeCompare(b);

      case SortType.LENGTH:
        return a.length - b.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  sortByAlph = () => {
    this.setState({
      sortType: SortType.ALPABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  goodsReversed = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={className('button is-info', {
              'is-light': sortType !== SortType.ALPABET,
            })}
            onClick={this.sortByAlph}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={className('button is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={className('button is-warning', {
              'is-light': !isReversed,
            })}
            onClick={this.goodsReversed}
          >
            Reverse
          </button>

          <button
            type="button"
            className={className('button is-danger is-light', {
              hiddenElement: sortType === SortType.NONE && !isReversed,
            })}
            onClick={this.reset}
          >
            Reset
          </button>
        </div>

        <ul>
          <ul>
            {goods.map(item => (
              <li data-cy="Good" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
