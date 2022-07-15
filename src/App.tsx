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

enum SortType {
  NONE = 'NONE',
  ALPHABET = 'ALPHABET',
  LENGTH = 'LENGTH',
}

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case 'ALPHABET':
        return good1.localeCompare(good2);

      case 'LENGTH':
        return good1.length - good2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
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

  start = () => {
    this.setState({ isStarted: true });
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  reverseGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render(): React.ReactNode {
    const { isStarted, isReversed, sortType } = this.state;

    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
    );

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            className="button is-primary button-start"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <div className="box">
              <ul className="Goods">
                {visibleGoods.map(good => (
                  <li
                    className="Goods__item"
                    key={good}
                  >
                    {good}
                  </li>
                ))}
              </ul>

              <div className="buttons">
                <button
                  type="button"
                  className="button is-primary"
                  onClick={this.sortByAlphabet}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button is-primary"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="button is-primary"
                  onClick={this.reverseGoods}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="button is-primary"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
