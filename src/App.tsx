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

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => {
    // eslint-disable-next-line
    return a > b ? 1 : a < b ? -1 : 0;
    });
  }

  if (sortType === SortType.LENGTH) {
    visibleGoods.sort((a, b) => {
      return a.length - b.length;
    });
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
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  componentDidMount = () => {
    const buttons = document.querySelector('.buttons');

    buttons?.addEventListener('click', ({ target }) => {
      if (target) {
        const button = target as HTMLButtonElement;

        if (buttons) {
          Array.from(buttons.children).forEach(el => {
            el.classList.add('is-light');
          });
        }

        if (button.matches('.button')) {
          button.classList.remove('is-light');
        }
      }
    });
  };

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className="button is-info is-light"
            onClick={() => {
              this.setState({ sortType: SortType.ALPHABET });
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button is-success is-light"
            onClick={() => {
              this.setState({ sortType: SortType.LENGTH });
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="button is-warning is-light"
            onClick={() => {
              this.setState((state) => ({ isReversed: !state.isReversed }));
            }}
          >
            Reverse
          </button>

          {(this.state.sortType !== SortType.NONE || this.state.isReversed)
          && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => {
                this.setState({ isReversed: false, sortType: SortType.NONE });
              }}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, this.state).map((good, i) => {
              const key = i;

              return (
                <li data-cy="Good" key={key}>{good}</li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  }
}
