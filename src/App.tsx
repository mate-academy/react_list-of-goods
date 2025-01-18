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

type Props = {
  goods: string[];
};

type State = {
  sortType: SortType;
  isReversed: boolean;
};

export class App extends React.PureComponent<Props, State> {
  state = {
    sortType: 0,
    isReversed: false,
  };

  sortAlphabet = () => {
    this.setState({ sortType: 1 });
  };

  sortLength = () => {
    this.setState({ sortType: 2 });
  };

  reverseOrder = () => {
    this.setState({ isReversed: !this.state.isReversed });
  };

  reset = () => {
    this.setState({ sortType: 0, isReversed: false });
  };

  render() {
    const goods = [...goodsFromServer];
    const { sortType, isReversed } = this.state;

    if (sortType === 1) {
      goods.sort((a, b) => a.localeCompare(b));
    }

    if (sortType === 2) {
      goods.sort((a, b) => a.length - b.length);
    }

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            onClick={this.sortAlphabet}
            type="button"
            className={
              sortType === 1 ? 'button is-info ' : 'button is-info is-light'
            }
          >
            Sort alphabetically
          </button>

          <button
            onClick={this.sortLength}
            type="button"
            className={
              sortType === 2
                ? 'button is-success'
                : 'button is-success is-light'
            }
          >
            Sort by length
          </button>

          <button
            onClick={this.reverseOrder}
            type="button"
            className={
              isReversed ? 'button is-warning' : 'button is-warning is-light'
            }
          >
            Reverse
          </button>

          {isReversed || sortType !== 0 ? (
            <button
              onClick={this.reset}
              type="button"
              className="button is-danger is-light"
            >
              Reset
            </button>
          ) : null}
        </div>

        <ul>
          <ul>
            {goods.map(good => {
              return (
                <li key={`${good}`} data-cy="Good">
                  {good}
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
    );
  }
}

// Use this function in the render method to prepare goods
// export function getReorderedGoods(
//   goods: string[],
//   { sortType, isReversed }: ReorderOptions,
// ) {
// To avoid the original array mutation
// const visibleGoods = [...goods];

// Sort and reverse goods if needed
// eslint-disable-next-line no-console
// console.log(sortType, isReversed);

// return visibleGoods;
// }

// DON'T save goods to the state
// type State = {
//   isReversed: boolean,
//   sortType: SortType,
// };

// export const App: React.FC = () => {
//   return (
//     <div className="section content">
//       <div className="buttons">
//         <button type="button" className="button is-info is-light">
//           Sort alphabetically
//         </button>

//         <button type="button" className="button is-success is-light">
//           Sort by length
//         </button>

//         <button type="button" className="button is-warning is-light">
//           Reverse
//         </button>

//         <button type="button" className="button is-danger is-light">
//           Reset
//         </button>
//       </div>

//       <ul>
//         <ul>
//           <li data-cy="Good">Dumplings</li>
//           <li data-cy="Good">Carrot</li>
//           <li data-cy="Good">Eggs</li>
//           <li data-cy="Good">Ice cream</li>
//           <li data-cy="Good">Apple</li>
//           <li data-cy="Good">...</li>
//         </ul>
//       </ul>
//     </div>
//   );
// };
