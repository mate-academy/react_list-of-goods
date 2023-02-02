import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classnames from 'classnames';

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

  visibleGoods.sort((first, next) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return first.localeCompare(next);

      case SortType.LENGTH:
        return first.length - next.length;

      case SortType.NONE:
        return 0;

      default:
        throw new Error('Wrong sort type');
        break;
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
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverseList = () => {
    this.setState(state => (
      { isReversed: !state.isReversed }
    ));
  };

  resetList = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const reorderedGoods = getReorderedGoods(goodsFromServer, this.state);
    const isResetBtnClicked = Boolean(sortType !== SortType.NONE || isReversed);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classnames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={this.sortAlphabetically}

          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classnames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classnames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.reverseList}
          >
            Reverse
          </button>

          { isResetBtnClicked && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.resetList}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {reorderedGoods.map(good => (
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
