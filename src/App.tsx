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
  let visibleGoods = [...goods];

  document.getElementById('alphabet-button')?.classList.add('is-light');
  document.getElementById('reverse-button')?.classList.add('is-light');
  document.getElementById('length-button')?.classList.add('is-light');

  if (sortType === SortType.ALPHABET) {
    document.getElementById('alphabet-button')?.classList.remove('is-light');
    visibleGoods = [...visibleGoods].sort((a, b) => a.localeCompare(b));
  } else if (sortType === SortType.LENGTH) {
    document.getElementById('length-button')?.classList.remove('is-light');
    visibleGoods = [...visibleGoods].sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    document.getElementById('reverse-button')?.classList.remove('is-light');
    visibleGoods = [...visibleGoods].reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverseOrder = () => {
    this.setState(state => {
      return {
        isReversed: !state.isReversed,
      };
    });
  };

  sortAlphabetically = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            id="alphabet-button"
            type="button"
            className="button is-info is-light"
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            id="length-button"
            type="button"
            className="button is-success is-light"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            id="reverse-button"
            type="button"
            className="button is-warning is-light"
            onClick={this.reverseOrder}
          >
            Reverse
          </button>

          {this.state.isReversed || this.state.sortType !== SortType.NONE
            ? (
              <button
                id="reset-button"
                type="button"
                className="button is-danger is-light"
                onClick={() => this.setState(() => {
                  return {
                    sortType: SortType.NONE,
                    isReversed: false,
                  };
                })}
              >
                Reset
              </button>
            )
            : (undefined)}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, {
              sortType: this.state.sortType,
              isReversed: this.state.isReversed,
            }).map((element) => (
              <li
                data-cy="Good"
                key={element}
              >
                {element}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
