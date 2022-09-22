import { Component } from 'react';
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

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  visibleGoods.sort((a, b) => {
    switch (sortType) {
      case SortType.LENGTH:
        return a.length - b.length;

      case SortType.ALPABET:
        return a.localeCompare(b);

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByName = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              this.state.sortType !== SortType.ALPABET
                ? 'button is-info is-light'
                : 'button is-info'
            }
            onClick={this.sortByName}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              this.state.sortType !== SortType.LENGTH
                ? 'button is-success is-light'
                : 'button is-success'
            }
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              this.state.isReversed !== true
                ? 'button is-warning is-light'
                : 'button is-warning'
            }
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(this.state.sortType !== SortType.NONE
          || this.state.isReversed === true)
            && (
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
            {getReorderedGoods(goodsFromServer, this.state)
              .map(good => <li data-cy="Good">{good}</li>)}
          </ul>
        </ul>
      </div>
    );
  }
}
