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

// type ReorderOptions = {
//   sortType: SortType,
//   isReversed: boolean,
// };

// Use this function in the render to prepare goods
// export function getReorderedGoods(
//   goods: string[],
//   { sortType, isReversed }: ReorderOptions,
// ) {
//   // To avoid the original array mutation
//   const visibleGoods = [...goods];

//   // Sort and reverse goods if needed
//   // eslint-disable-next-line no-console
//   console.log(sortType, isReversed);

//   return visibleGoods;
// }

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
  goods: string[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const visibleGoods = [...this.state.goods];
    const { isReversed, sortType } = this.state;

    visibleGoods.sort((a, b): SortType => {
      switch (sortType) {
        case SortType.LENGTH:
          return a.length - b.length;

        case SortType.ALPHABET:
          return a.localeCompare(b);

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <>
        <div className="section content">
          <div className="buttons">
            <button
              type="button"
              className={`button is-info ${this.state.sortType !== SortType.ALPHABET ? 'is-light' : ''}`}
              onClick={
                () => {
                  this.setState({
                    sortType: SortType.ALPHABET,
                  });
                }
              }
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className={`button is-success ${this.state.sortType !== SortType.LENGTH ? 'is-light' : ''}`}
              onClick={
                (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                  this.setState({
                    sortType: SortType.LENGTH,
                  });
                  event.currentTarget.classList.remove('is-light');
                }
              }
            >
              Sort by length
            </button>

            <button
              type="button"
              className={`button is-warning ${this.state.isReversed !== true ? 'is-light' : ''}`}
              onClick={
                () => {
                  this.setState((state) => ({
                    isReversed: !state.isReversed,
                  }));
                }
              }
            >
              Reverse
            </button>

            {
              (visibleGoods[0] !== this.state.goods[0]) && (
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={() => {
                    this.setState(() => ({
                      sortType: SortType.NONE,
                      isReversed: false,
                    }));
                  }}
                >
                  Reset
                </button>
              )
            }
          </div>

          <ul>
            <ul>
              {
                visibleGoods.map((good) => (
                  <li data-cy="Good" key={good}>
                    {good}
                  </li>
                ))
              }
            </ul>
          </ul>
        </div>
      </>
    );
  }
}
