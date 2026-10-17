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

type State = {
  sortType: SortType;
  isReversed: boolean;
};

type ReorderOptions = {
  sortType: SortType;
  isReversed: boolean;
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((item1, item2) => item1.localeCompare(item2));
  } else if (sortType === SortType.LENGTH) {
    visibleGoods.sort((item1, item2) => item1.length - item2.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends React.Component<{}, State> {
  state: State = {
    sortType: SortType.NONE,
    isReversed: false,
  };

  handleSortAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  handleSortLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handleToggleReverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  handleReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const visibleGoods = getReorderedGoods(goodsFromServer, {
      sortType,
      isReversed,
    });

    const isNotDefault = sortType !== SortType.NONE || isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info ${sortType !== SortType.ALPHABET ? 'is-light' : ''}`}
            onClick={this.handleSortAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success ${sortType !== SortType.LENGTH ? 'is-light' : ''}`}
            onClick={this.handleSortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning ${!isReversed ? 'is-light' : ''}`}
            onClick={this.handleToggleReverse}
          >
            Reverse
          </button>

          {isNotDefault && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handleReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visibleGoods.map(good => (
            <li key={good} data-cy="Good">
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// export const goodsFromServer = [
//   'Dumplings',
//   'Carrot',
//   'Eggs',
//   'Ice cream',
//   'Apple',
//   'Bread',
//   'Fish',
//   'Honey',
//   'Jam',
//   'Garlic',
// ];

// enum SortType {
//   NONE,
//   ALPHABET,
//   LENGTH,
// }

// type ReorderOptions = {
//   sortType: SortType;
//   isReversed: boolean;
// };

// // Use this function in the render method to prepare goods
// export function getReorderedGoods(
//   goods: string[],
//   { sortType, isReversed }: ReorderOptions,
// ) {
//   // To avoid the original array mutation
//   const visibleGoods = [...goods];

//   if (sortType === SortType.ALPHABET) {
//     visibleGoods.sort((item1, item2) => item1.localeCompare(item2));
//   } else if (sortType === SortType.LENGTH) {
//     visibleGoods.sort((item1, item2) => item1.length - item2.length);
//   }

//   if (isReversed) {
//     visibleGoods.reverse();
//   }

//   // eslint-disable-next-line no-console
//   console.log(sortType, isReversed);

//   return visibleGoods;
// }

// // DON'T save goods to the state
// // type State = {
// //   isReversed: boolean,
// //   sortType: SortType,
// // };

// export const App: React.FC = () => {
//   const [sortType, setSortType] = useState<SortType>(SortType.NONE);
//   const [isReversed, setIsReversed] = useState<boolean>(false);

//   const visibleGoods = getReorderedGoods(goodsFromServer, {
//     sortType,
//     isReversed,
//   });

//   // eslint-disable-next-line no-console
//   console.log(visibleGoods);

//   const isNotDefault = sortType !== SortType.NONE || isReversed;

//   return (
//     <div className="section content">
//       <div className="buttons">
//         <button
//           type="button"
//           className={`button is-info ${sortType !== SortType.ALPHABET ? 'is-light' : ''}`}
//           onClick={() => setSortType(SortType.ALPHABET)}
//         >
//           Sort alphabetically
//         </button>

//         <button
//           type="button"
//           className={`button is-success ${sortType !== SortType.LENGTH ? 'is-light' : ''}`}
//           onClick={() => setSortType(SortType.LENGTH)}
//         >
//           Sort by length
//         </button>

//         <button
//           type="button"
//           className={`button is-warning ${!isReversed ? 'is-light' : ''}`}
//           onClick={() => setIsReversed(!isReversed)}
//         >
//           Reverse
//         </button>

//         {isNotDefault && (
//           <button
//             type="button"
//             className="button is-danger is-light"
//             onClick={() => {
//               setSortType(SortType.NONE);
//               setIsReversed(false);
//             }}
//           >
//             Reset
//           </button>
//         )}
//       </div>

//       <ul>
//         {visibleGoods.map(good => (
//           <li key={good} data-cy="Good">
//             {good}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
