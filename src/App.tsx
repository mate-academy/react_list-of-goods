/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
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

const ids = new Array<string>(goodsFromServer.length)
  .fill('')
  .map(el => el + uuidv4());
const minLengths = new Array(goodsFromServer.length)
  .fill('')
  .map((el, i) => ({ id: el + uuidv4(), option: i + 1 }));

enum SortType {
  NONE,
  ALPABET,
  LENGTH,
}

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  minLen: number,
  sortType: SortType,
  isReversed: boolean,
) {
  // Not to mutate the original array
  const visibleGoods = [...goods].filter(good => good.length >= minLen);

  if (sortType !== SortType.NONE) {
    visibleGoods.sort((a, b) => {
      if (sortType === SortType.ALPABET) {
        return a.localeCompare(b);
      }

      return a.length - b.length;
    });
  }

  // Sort and reverse goods if needed
  // ...
  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  selected: number,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    selected: 1,
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const {
      isStarted,
      selected,
      isReversed,
      sortType,
    } = this.state;
    const goods = getReorderedGoods(
      goodsFromServer,
      selected,
      sortType,
      isReversed,
    );

    return (
      <div className="App box">
        {!isStarted
          ? (
            <button
              className="button is-primary is-large"
              type="button"
              onClick={() => this.setState({ isStarted: true })}
            >
              Start
            </button>
          )
          : (
            <div className="App__content">
              <div className="App__buttons">
                <button
                  className="button is-primary"
                  type="button"
                  onClick={() => this.setState(
                    state => ({
                      sortType: SortType.ALPABET,
                      isReversed: state.sortType === SortType.ALPABET
                        ? !isReversed
                        : false,
                    }),
                  )}
                >
                  Sort alphabetically
                </button>

                <button
                  className="button is-primary"
                  type="button"
                  onClick={() => this.setState(
                    state => ({
                      sortType: SortType.LENGTH,
                      isReversed: state.sortType === SortType.LENGTH
                        ? !isReversed
                        : false,
                    }),
                  )}
                >
                  Sort by length
                </button>

                <button
                  className="button is-primary"
                  type="button"
                  onClick={() => this.setState(
                    state => ({ isReversed: !state.isReversed }),
                  )}
                >
                  Reverse
                </button>

                <button
                  className="button is-danger is-large is-reset"
                  type="button"
                  onClick={() => this.setState({
                    selected: 1,
                    isReversed: false,
                    sortType: SortType.NONE,
                  })}
                >
                  Reset
                </button>

                <select
                  className="select is-primary is-medium"
                  name="minLength"
                  value={selected}
                  onChange={(event) => this.setState(
                    { selected: +event.target.value },
                  )}
                >
                  {minLengths.map(({ id, option }) => (
                    <option value={option} key={id}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <ul className="Goods content is-medium">
                {goods.map((good, index) => (
                  <li className="Goods__item" key={ids[index]}>
                    {good}
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    );
  }
}
