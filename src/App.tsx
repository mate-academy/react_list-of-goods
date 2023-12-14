import React from 'react';
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
  LENGTH = 'length',
  ALPHABETICAL = 'alphabetical',
  NONE = '',
}

interface ReorderOptions {
  sortType: SortType,
  isReversed: boolean,
}

export function getReorderedGoods(goods: string[],
  { sortType, isReversed }: ReorderOptions) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABETICAL:
      visibleGoods.sort();
      break;

    case SortType.LENGTH:
      visibleGoods.sort((a: string, b: string) => a.length - b.length);
      break;

    default:
      break;
  }

  return isReversed ? visibleGoods.reverse() : visibleGoods;
}

interface State {
  isReversed: boolean
  sortType: SortType
}

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  }

  sortAlphabetically() {
    this.setState({
      sortType: SortType.ALPHABETICAL,
    });
  }

  sortByLength() {
    this.setState({
      sortType: SortType.LENGTH,
    });
  }

  reverse() {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  }

  reset() {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  }

  render() {
    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={this.state.sortType === 'alphabetical'
              ? 'button is-info'
              : 'button is-info is-light'}
            onClick={() => this.sortAlphabetically()}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={this.state.sortType === 'length'
              ? 'button is-success'
              : 'button is-success is-light'}
            onClick={() => this.sortByLength()}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={this.state.isReversed
              ? 'button is-warning'
              : 'button is-warning is-light'}
            onClick={() => this.reverse()}
          >
            Reverse
          </button>

          {this.state.sortType !== '' || this.state.isReversed
            ? (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={() => this.reset()}
              >
                Reset
              </button>
            )
            : null}

        </div>

        <ul>
          <ul>
            {visibleGoods.map(item => (
              <li data-cy="Good">{item}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
