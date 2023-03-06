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
  sortType: SortType;
  isReversed: boolean;
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort();
      break;

    case SortType.LENGTH:
      visibleGoods.sort((firstGood, secondGood) => {
        return firstGood.length - secondGood.length;
      });
      break;

    default:
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortAlphabetically = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverse = () => {
    this.setState(state => {
      return {
        isReversed: !state.isReversed,
      };
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);
    const isSortedByAlphabet = sortType === SortType.ALPHABET;
    const isSortedByLength = sortType === SortType.LENGTH;
    const isNotInitial
      = isReversed !== false
      || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`
              button
              is-info
              ${isSortedByAlphabet
        ? ''
        : 'is-light'
      }
            `}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`
              button
              is-success
              ${isSortedByLength
        ? ''
        : 'is-light'
      }
            `}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`
              button
              is-warning
              ${isReversed
        ? ''
        : 'is-light'
      }
            `}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {isNotInitial && (
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
          {visibleGoods.map((good) => (
            <li key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
