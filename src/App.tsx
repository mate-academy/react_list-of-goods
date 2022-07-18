import React from 'react';
import './App.css';

const goodsFromServer: string[] = [
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

type State = {
  goods: string[];
  isVisible: boolean;
  isReversed: boolean,
  isSorted: boolean,
  sortBy: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    isSorted: false,
    sortBy: SortType.NONE,
  };

  visibleGoodsList = () => {
    this.setState((state) => ({
      isVisible: !state.isVisible,
    }));
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState(() => ({
      sortBy: SortType.NONE,
      isReversed: false,
      isSorted: false,
    }));
  };

  sortByHandler = (sortBy: SortType) => {
    this.setState({
      isSorted: true,
      sortBy,
    });
  };

  render() {
    const {
      isVisible,
      goods,
      isReversed,
      sortBy,
      isSorted,
    } = this.state;

    const newGoods = [...goods];

    if (isSorted) {
      newGoods.sort((good1, good2): number => {
        switch (sortBy) {
          case SortType.LENGTH:
            return good1.length - good2.length;

          case SortType.ALPABET:
            return good1.localeCompare(good2);

          default: return 0;
        }
      });
    }

    if (isReversed) {
      newGoods.reverse();
    }

    return (
      <div className="App">
        <div className="App__start">
          {!isVisible && (
            <button
              type="button"
              className="App__button"
              onClick={this.visibleGoodsList}
            >
              Start
            </button>
          )}
        </div>

        {isVisible && (
          <div className="App__container">
            <ul className="App__list">
              {(newGoods.map((good) => (
                <li
                  key={good}
                  className="App__item"
                >
                  {good}
                </li>
              )))}
            </ul>

            <button
              className="App__button"
              onClick={this.reverse}
              type="button"
            >
              Reverse
            </button>

            <button
              className="App__button"
              onClick={this.reset}
              type="button"
            >
              Reset
            </button>

            <button
              className="App__button"
              onClick={() => this.sortByHandler(SortType.LENGTH)}
              type="button"
            >
              Sort by length
            </button>

            <button
              className="App__button"
              onClick={() => this.sortByHandler(SortType.ALPABET)}
              type="button"
            >
              Sort alphabetically
            </button>
          </div>
        )}
      </div>
    );
  }
}
