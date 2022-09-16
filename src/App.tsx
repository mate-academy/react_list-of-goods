import { Component } from 'react';
import classNames from 'classnames';
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

export enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

export type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  visibleGoods.sort((item1, item2) => {
    switch (sortType) {
      case (SortType.ALPHABET):
        return item1.localeCompare(item2);

      case (SortType.LENGTH):
        return item1.length - item2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

type Props = {};

export class App extends Component<Props, State> {
  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLegth = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reset = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    this.state = {
      isReversed: false,
      sortType: SortType.NONE,
    };

    const { isReversed, sortType } = this.state;

    const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    return (

      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button', 'is-info', {
                'is-light': this.state.sortType !== SortType.ALPHABET,
              },
            )}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button', 'is-success', {
                'is-light': this.state.sortType !== SortType.LENGTH,
              },
            )}
            onClick={this.sortByLegth}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button', 'is-warning', {
                'is-light': !this.state.isReversed,
              },
            )}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(this.state.sortType !== SortType.NONE
          || this.state.isReversed === true)
          && (
            <button
              type="button"
              className="button is-warning is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {goods
            .map((item) => <li data-cy="Good" key={item}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

// export const App: React.FC = () => {
//   return (
//     <div className="section content">
//       <div className="buttons">
//         <button
//           type="button"
//           className="button is-info is-light"
//         >
//           Sort alphabetically
//         </button>

//         <button
//           type="button"
//           className="button is-success is-light"
//         >
//           Sort by length
//         </button>

//         <button
//           type="button"
//           className="button is-warning is-light"
//         >
//           Reverse
//         </button>

//         <button
//           type="button"
//           className="button is-danger is-light"
//         >
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
