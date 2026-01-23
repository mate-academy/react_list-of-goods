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
  sortType: SortType;
  isReversed: boolean;
};

const sortStrategies: Record<SortType, (data: string[]) => string[]> = {
  [SortType.NONE]: data => [...data],
  [SortType.ALPHABET]: data => [...data].sort((a, b) => a.localeCompare(b)),
  [SortType.LENGTH]: data => [...data].sort((a, b) => a.length - b.length),
};

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const sorted = sortStrategies[sortType](goods);

  return isReversed ? [...sorted].reverse() : sorted;
}

type State = {
  set: ReorderOptions;
};

type Props = {};

// DON'T save goods to the state
// type State = {
//   isReversed: boolean,
//   sortType: SortType,
// };

export class App extends React.Component<Props, State> {
  state: State = {
    set: {
      sortType: SortType.NONE,
      isReversed: false,
    },
  };

  reset = () => {
    this.setState({
      set: {
        sortType: SortType.NONE,
        isReversed: false,
      },
    });
  };

  clickAlphabet = () => {
    this.setState(prev => ({
      set: {
        ...prev.set,
        sortType: SortType.ALPHABET,
      },
    }));
  };

  clickLength = () => {
    this.setState(prev => ({
      set: {
        ...prev.set,
        sortType: SortType.LENGTH,
      },
    }));
  };

  clickRevers = () => {
    this.setState(prev => ({
      set: {
        ...prev.set,
        isReversed: !prev.set.isReversed,
      },
    }));
  };

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              this.state.set.sortType === SortType.ALPHABET
                ? 'button is-info'
                : 'button is-info is-light'
            }
            onClick={this.clickAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              this.state.set.sortType === SortType.LENGTH
                ? 'button is-success'
                : 'button is-success is-light'
            }
            onClick={this.clickLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              this.state.set.isReversed === true
                ? 'button is-warning'
                : 'button is-warning is-light'
            }
            onClick={this.clickRevers}
          >
            Reverse
          </button>
          {!(
            this.state.set.sortType === SortType.NONE &&
            this.state.set.isReversed === false
          ) && (
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
          {getReorderedGoods(goodsFromServer, this.state.set).map(good => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
