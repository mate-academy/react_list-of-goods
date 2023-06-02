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
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((good1, good2) => {
        return good1.localeCompare(good2);
      });
      break;

    case SortType.LENGTH:
      visibleGoods.sort((good1, good2) => {
        return good1.length - good2.length;
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

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
  isVisible: boolean,
};

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
    isVisible: false,
  };

  deleteClass = (button: HTMLElement) => {
    button.classList.remove('is-light');
  };

  addClasstoOthersButton = (clickedButton: HTMLElement) => {
    Array.from(document.querySelectorAll('button'))
      .filter(button => button !== clickedButton)
      .map(button => button.classList.add('is-light'));
  };

  sortByAlphabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
      isVisible: true,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
      isVisible: true,
    });
  };

  reverseArray = (button: HTMLElement) => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      isVisible: true,
    }));

    return this.state.isReversed
      ? button.classList.add('is-light')
      : button.classList.remove('is-light');
  };

  resetArray = () => {
    this.setState({
      sortType: SortType.NONE,
      isVisible: false,
    });

    Array.from(document.querySelectorAll('button'))
      .map(button => button.classList.add('is-light'));
  };

  render() {
    const { isVisible } = this.state;

    const newGoodsArray = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className="button is-info is-light"
            onClick={(e) => {
              this.deleteClass(e.currentTarget);
              this.addClasstoOthersButton(e.currentTarget);

              return this.sortByAlphabet();
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button is-success is-light"
            onClick={(e) => {
              this.deleteClass(e.currentTarget);
              this.addClasstoOthersButton(e.currentTarget);

              return this.sortByLength();
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="button is-warning is-light"
            onClick={(e) => {
              this.deleteClass(e.currentTarget);

              return this.reverseArray(e.currentTarget);
            }}
          >
            Reverse
          </button>

          {isVisible
            && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={(e) => {
                  this.deleteClass(e.currentTarget);

                  return this.resetArray();
                }}
              >
                Reset
              </button>
            )}
        </div>

        <ul>
          <ul>
            {newGoodsArray.map(good => (
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
