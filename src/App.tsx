import React from 'react';
import 'bulma/css/bulma.min.css';
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

enum SortType {
  NONE,
  ALPABET,
  LENGTH,
}

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  if (sortType !== SortType.NONE) {
    visibleGoods.sort((a, b) => {
      switch (sortType) {
        case SortType.ALPABET:
          return a.localeCompare(b);
        case SortType.LENGTH:
          return a.length - b.length;
        default:
          return 0;
      }
    });
  }

  return isReversed ? visibleGoods.reverse() : visibleGoods;
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

  showList = () => {
    this.setState(state => ({ isStarted: !state.isStarted }));
  };

  setSortType = (type: SortType) => {
    this.setState({ sortType: type });
  };

  setReverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  setDefault = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    const goods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
    );

    return (
      <div className="App block box">
        {!isStarted
          ? (
            <button
              type="button"
              onClick={this.showList}
              className="button is-success is-rounded"
            >
              Start
            </button>
          )
          : (
            <div className="block">
              <button
                type="button"
                onClick={() => this.setSortType(SortType.ALPABET)}
                className="button is-primary is-light is-rounded mx-2"
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={() => this.setSortType(SortType.LENGTH)}
                className="button is-primary is-light is-rounded mx-2"
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={this.setReverse}
                className="button is-primary is-light is-rounded mx-2"
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.setDefault}
                className="button is-primary is-light is-rounded mx-2"
              >
                Reset
              </button>

              <ul className="Goods table">
                {goods.map(good => {
                  return (
                    <li key={good} className="Goods__item subtitle is-5">
                      {good}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
      </div>
    );
  }
}
