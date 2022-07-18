/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, ReactNode } from 'react';
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

const selectValues = Array.from(Array(10), (_, index) => index + 1);

enum SortType {
  NONE,
  ALPABET,
  LENGTH,
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
  minLength: string,
};

export class App extends Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
    minLength: '1',
  };

  render(): ReactNode {
    const {
      isStarted,
      isReversed,
      sortType,
      minLength,
    } = this.state;

    function getReorderedGoods(
      goods: string[],
      sortTypeInFuntion: SortType,
      isReversedInFunction: boolean,
    ) {
      const visibleGoods = [...goods].filter(good => good.length
        >= parseInt(minLength, 10));

      switch (true) {
        case sortTypeInFuntion === SortType.ALPABET:
          visibleGoods.sort();
          break;
        case sortTypeInFuntion === SortType.LENGTH:
          visibleGoods.sort((g1, g2) => g1.length - g2.length);
          break;
        default:
          break;
      }

      if (isReversedInFunction) {
        visibleGoods.reverse();
      }

      return visibleGoods;
    }

    return (
      <div className="App">
        <button
          type="button"
          onClick={() => {
            this.setState(prevState => {
              return {
                isStarted: !prevState.isStarted,
              };
            });
          }}
          hidden={isStarted}
        >
          Start
        </button>

        {isStarted && (
          <>
            <select
              name="length-num"
              id="lengthNum"
              onChange={(event) => {
                this.setState({ minLength: event.target.value });
              }}
            >
              {selectValues.map(value => (
                <option
                  value={value}
                  key={value}
                >
                  {value}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => {
                this.setState({ sortType: SortType.ALPABET });
              }}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState({ sortType: SortType.LENGTH });
              }}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState(prevState => {
                  return {
                    isReversed: !prevState.isReversed,
                  };
                });
              }}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState({
                  sortType: SortType.NONE,
                  isReversed: false,
                });
              }}
            >
              Reset
            </button>

            <ul className="Goods">
              {getReorderedGoods(goodsFromServer, sortType, isReversed)
                .map(good => (
                  <li
                    className="Goods__item"
                    key={good}
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
