import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((item1, item2) => item1.length - item2.length);
  }

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort();
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverseList = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  resetToDefault = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });
    const isVisibleReset = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={cn(
              'button',
              'is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={cn(
              'button',
              'is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={cn(
              'button',
              'is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.reverseList}
          >
            Reverse
          </button>

          {(isVisibleReset)
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetToDefault}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {goods.map(item => (
              <li
                key={item}
                data-cy="Good"
              >
                {item}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
