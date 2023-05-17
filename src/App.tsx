import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
// import { render } from 'react-dom';

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

interface State {
  sortType: SortType,
  isReversed: boolean,
}

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: State,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((first, second) => first.localeCompare(second));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((first, second) => first.length - second.length);
      break;
    case SortType.NONE:
      break;
    default:
      throw new Error('Invalid SortType');
  }

  return isReversed ? visibleGoods.reverse() : visibleGoods;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleReverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  handleSortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleSortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleReset = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const isChanged = this.state.isReversed
    || this.state.sortType !== SortType.NONE;

    const display = getReorderedGoods(
      goodsFromServer, { sortType, isReversed },
    );

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${sortType !== SortType.ALPHABET && 'is-light'}`}
            onClick={this.handleSortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${sortType !== SortType.LENGTH && 'is-light'}`}
            onClick={this.handleSortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${!isReversed && 'is-light'}`}
            onClick={this.handleReverse}
          >
            Reverse
          </button>

          {
            isChanged
              && (
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={this.handleReset}
                >
                  Reset
                </button>
              )
          }
        </div>

        <ul>
          { display
            .map(good => (
              <li data-cy="Good" key={good}>{good}</li>
            ))}
        </ul>
      </div>
    );
  }
}
