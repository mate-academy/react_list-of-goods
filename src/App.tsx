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
  NONE,
  ALPHABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };


  getReorderedGoods = (
    goods: string[],
    { sortType, isReversed }: ReorderOptions,
  ) => {
    // To avoid the original array mutation
    const visibleGoods = [...goods];

    visibleGoods.sort((a, b) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return a.localeCompare(b);

        case SortType.LENGTH:
          return a.length - b.length;

        default:
          break;

      }
    });
    if (isReversed) {
      visibleGoods.reverse();
    }

    console.log(sortType, isReversed);

    return visibleGoods;
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  alphabeticSort = () => {
    this.setState({ sortType: SortType.ALPHABET });
  }

  lengthSort = () => {
    this.setState({ sortType: SortType.LENGTH });
  }

  reset = () => {
    this.setState({sortType: SortType.NONE, isReversed: false});
  }

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={this.state.sortType === SortType.ALPHABET
              ? "button is-info"
              : "button is-info is-light"
            }
            onClick={this.alphabeticSort}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={this.state.sortType === SortType.LENGTH
              ? "button is-success"
              : "button is-success is-light"
            }
            onClick={this.lengthSort}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={this.state.isReversed === true
              ? "button is-warning"
              : "button is-warning is-light"
            }
            onClick={this.reverse}
          >
            Reverse
          </button>

          {this.state.isReversed || this.state.sortType !== SortType.NONE
            ? <button
                type="button"
                className="button is-danger is-light"
                onClick={this.reset}
              >
                Reset
              </button>

            : ''
          }
        </div>

        <ul>
          <ul>
            {this.getReorderedGoods(goodsFromServer, this.state).map(good => (
              <li key={good} data-cy="good">
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
};
