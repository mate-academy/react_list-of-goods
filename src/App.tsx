import React from 'react';
import './App.scss';

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
  none,
  alphabet,
  length,
}

type State = {
  goods: string[],
  isVisible: boolean,
  isReversed: boolean,
  isSorted: boolean,
  sortBy: SortType,
};

class App extends React.Component<{}, State> {
  state:Readonly<State> = {
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    isSorted: false,
    sortBy: SortType.none,
  };

  visibleGoodsList = () => {
    this.setState((state) => ({
      isVisible: !state.isVisible,
    }));
  };

  SortByLength = () => {
    this.setState({ isSorted: true, sortBy: SortType.length });
  };

  SortByAlphabet = () => {
    this.setState({ isSorted: true, sortBy: SortType.alphabet });
  };

  Reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  Reset = () => {
    this.setState(() => ({
      sortBy: SortType.none,
      isReversed: false,
      isSorted: false,
    }));
  };

  render():React.ReactNode {
    const {
      goods,
      isVisible,
      isReversed,
      isSorted,
      sortBy,
    } = this.state;

    const sortedGoods = [...goods];

    if (isSorted) {
      switch (sortBy) {
        case SortType.length:
          sortedGoods.sort((good, prevGood) => good.length - prevGood.length);
          break;

        case SortType.alphabet:
          sortedGoods.sort((good, prevGood) => good.localeCompare(prevGood));
          break;

        default:
      }
    }

    if (isReversed) {
      sortedGoods.reverse();
    }

    return (
      <div className="App">
        {!isVisible
          ? (
            <button
              className="button buttons__forSort-start"
              type="button"
              onClick={this.visibleGoodsList}
            >
              Start
            </button>
          )
          : (
            <div className="Goods">
              <ul className="Goods__list">
                {(sortedGoods.map((good) => (
                  <li className="Goods__item" key={good}>
                    {good}
                  </li>
                )))}
              </ul>

              <div className="buttons__forSort">
                <button
                  className="button buttons__forSort-reverse"
                  type="button"
                  onClick={this.Reverse}
                >
                  Reverse
                </button>

                <button
                  className="button buttons__forSort-length"
                  type="button"
                  onClick={this.SortByLength}
                >
                  Sort By Length
                </button>

                <button
                  className="button buttons__forSort-alphabet"
                  type="button"
                  onClick={this.SortByAlphabet}
                >
                  Sort alphabetically
                </button>

                <button
                  className="button buttons__forSort-reset"
                  type="button"
                  onClick={this.Reset}
                >
                  Reset
                </button>

              </div>
            </div>
          )}
      </div>
    );
  }
}

export default App;
