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
  NONE,
  ALPABET,
  LENGTH,
}

type State = {
  isVisible: boolean,
  isReversed: boolean,
  sortBy: SortType,
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
    isReversed: false,
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
      isVisible: false,
      isReversed: false,
      sortBy: SortType.NONE,
    }));
  };

  sortBy = (sortType: SortType) => {
    this.setState({
      sortBy: sortType,
    });
  };

  getReorderedGoods = (visibleGoods: string[]) => {
    const { sortBy, isReversed } = this.state;

    switch (sortBy) {
      case SortType.LENGTH:
        visibleGoods.sort((good, prevGood) => good.length - prevGood.length);
        break;

      case SortType.ALPABET:
        visibleGoods.sort((good, prevGood) => good.localeCompare(prevGood));
        break;

      default:
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  };

  render():React.ReactNode {
    const {
      isVisible,
    } = this.state;

    return (
      <div className="App">
        {!isVisible && (
          <button
            className="button buttons__forSort-start"
            type="button"
            onClick={this.visibleGoodsList}
          >
            Start
          </button>
        )}

        {isVisible && (
          <div className="Goods">
            <ul className="Goods__list">
              {(this.getReorderedGoods(goodsFromServer).map((good) => (
                <li className="Goods__item" key={good}>
                  {good}
                </li>
              )))}
            </ul>

            <div className="buttons__forSort">
              <button
                className="button buttons__forSort-reverse"
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                className="button buttons__forSort-reset"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>

              <button
                className="button buttons__forSort-length"
                type="button"
                onClick={() => this.sortBy(SortType.LENGTH)}
              >
                Sort By Length
              </button>

              <button
                className="button buttons__forSort-alphabet"
                type="button"
                onClick={() => this.sortBy(SortType.ALPABET)}
              >
                Sort alphabetically
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
