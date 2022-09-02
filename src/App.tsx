/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';

const goodsFromServer = [
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

type SortType = 'none' | 'length' | 'name';

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  // Not to mutate the original array
  let visibleGoods = [...goods];

  // Sort and reverse goods if needed
  // ...

  switch (sortType) {
    case 'name':
      visibleGoods = visibleGoods.sort(
        (f1, f2) => f1.localeCompare(f2),
      );
      break;

    case 'length':
      visibleGoods = visibleGoods.sort(
        (f1, f2) => f1.length - f2.length,
      );
      break;

    default:
      break;
  }

  if (isReversed === true) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component <{}, State> {
  state: State = {
    isStarted: false,
    isReversed: false,
    sortType: 'none',
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    const newGoodsFromServer = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
    );

    return (
      <div className="App">
        {isStarted === false && (
          <button
            type="button"
            onClick={() => {
              this.setState({
                isStarted: true,
              });
            }}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <button
              type="button"
              onClick={() => (
                this.setState({
                  sortType: 'name',
                })
              )}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={() => (
                this.setState({
                  sortType: 'length',
                })
              )}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={() => (
                this.setState(state => ({
                  isReversed: !state.isReversed,
                }))
              )}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={() => (
                this.setState({
                  sortType: 'none',
                  isReversed: false,
                })
              )}
            >
              Reset
            </button>

            <ul className="Goods">
              {newGoodsFromServer.map(good => (
                <li
                  key={good}
                  className="Goods__item"
                >
                  {good}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
