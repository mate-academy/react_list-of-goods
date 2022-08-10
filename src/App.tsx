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

interface Good {
  goodName: string,
  id: number,
}

const preparedGoods: Good[] = goodsFromServer.map((good, index) => {
  return {
    goodName: good,
    id: index,
  };
});

enum SortType {
  NONE,
  ALPABET,
  LENGTH,
}

function getReorderedGoods(
  goods: Good[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  if (sortType !== SortType.NONE) {
    visibleGoods.sort((goodA, goodB): number => {
      const firstGood = goodA.goodName;
      const secondGood = goodB.goodName;

      switch (sortType) {
        case SortType.ALPABET:
          return firstGood.localeCompare(secondGood);

        case SortType.LENGTH:
          return firstGood.length - secondGood.length;

        default:
          return 0;
      }
    });
  }

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const {
      isStarted,
      isReversed,
      sortType,
    } = this.state;

    return (
      <div className="App">
        <div className="box">
          <div className="buttons">
            {!isStarted
              ? (
                <button
                  type="button"
                  className="
                    button
                    is-primary
                    is-large
                    is-light
                  "
                  onClick={() => this.setState({ isStarted: true })}
                >
                  Start
                </button>
              )
              : (
                <>
                  <button
                    type="button"
                    className="button"
                    onClick={() => this.setState(
                      { sortType: SortType.ALPABET },
                    )}
                  >
                    Sort alphabetically
                  </button>

                  <button
                    type="button"
                    className="button"
                    onClick={() => this.setState({ sortType: SortType.LENGTH })}
                  >
                    Sort by length
                  </button>

                  <button
                    type="button"
                    className="button"
                    onClick={() => this.setState(state => ({
                      isReversed: !state.isReversed,
                    }))}
                  >
                    Reverse
                  </button>

                  <button
                    type="button"
                    className="
                      button
                      is-danger
                      is-light
                    "
                    onClick={() => this.setState({
                      isReversed: false,
                      sortType: SortType.NONE,
                    })}
                  >
                    Reset
                  </button>
                </>
              )}
          </div>

          {isStarted && (
            <ul className="Goods">
              {getReorderedGoods(
                preparedGoods,
                sortType,
                isReversed,
              ).map(good => (
                <li
                  key={good.id}
                  className="Goods__item"
                >
                  {good.goodName}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
