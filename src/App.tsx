import React from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

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

  switch (sortType) {
    case SortType.ALPABET:
      visibleGoods.sort((a, b) => (
        a.goodName.localeCompare(b.goodName)
      ));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((a, b) => (
        a.goodName.length - b.goodName.length
      ));
      break;

    case SortType.NONE:
    default:
      break;
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

    const goods = getReorderedGoods(
      preparedGoods,
      sortType,
      isReversed,
    );

    return (
      <div className="App">
        <div className="box">
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
                onClick={() => this.setState(
                  { isStarted: true },
                )}
              >
                Start
              </button>
            )
            : (
              <>
                <div className="buttons">
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
                    onClick={() => this.setState(
                      { sortType: SortType.LENGTH },
                    )}
                  >
                    Sort by length
                  </button>

                  <button
                    type="button"
                    className="button"
                    onClick={() => this.setState(state => (
                      { isReversed: !state.isReversed }
                    ))}
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
                </div>

                <ul className="Goods">
                  {goods.map(good => (
                    <li
                      key={uuidv4()}
                      className="Goods__item"
                    >
                      {good.goodName}
                    </li>
                  ))}
                </ul>
              </>
            )}
        </div>
      </div>
    );
  }
}
