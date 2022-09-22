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
      case (SortType.ALPABET):
        return a.localeCompare(b);

      case SortType.LENGTH:
        return a.length - b.length;

      default: return 0;
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

  handleSorting = (name: string) => {
    switch (name) {
      case 'Sort alphabetically':
        return this.setState({ sortType: SortType.ALPABET });

      case 'Sort by length':
        return this.setState({ sortType: SortType.LENGTH });

      case 'Reverse':
        return this.setState(state => ({ isReversed: !state.isReversed }));

      default:
        break;
    }

    return this.state;
  };

  render() {
    const {
      isReversed,
      sortType,
    } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              { 'is-light': sortType !== SortType.ALPABET },
            )}
            onClick={state => {
              this.handleSorting(state.currentTarget.innerText);
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={state => {
              this.handleSorting(state.currentTarget.innerText);
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button',
              'is-info',
              { 'is-light': !isReversed },
            )}
            onClick={state => {
              this.handleSorting(state.currentTarget.innerText);
            }}
          >
            Reverse
          </button>

          <button
            type="button"
            style={{
              display: (isReversed || sortType !== SortType.NONE)
                ? 'block'
                : 'none',
            }}
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
        </div>
        <ul>
          {getReorderedGoods(
            goodsFromServer,
            { sortType, isReversed },
          ).map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
