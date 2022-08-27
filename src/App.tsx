/* eslint-disable @typescript-eslint/no-unused-vars */
import { PureComponent } from 'react';
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
  ALPHABET,
  LENGTH,
}

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  // Not to mutate the original array
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  // ...
  visibleGoods.sort((firstGood, secondGood) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return firstGood.localeCompare(secondGood);

      case SortType.LENGTH:
        return firstGood.length - secondGood.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
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

export class App extends PureComponent<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  showGoods = () => {
    this.setState({
      isStarted: true,
    });
  };

  sortbyAlpabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  sortbyLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  sortbNone = () => {
    this.setState({
      sortType: SortType.NONE,
    });
  };

  sortRevers = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  sortReset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
    );

    return (
      <div className="container">
        {!isStarted
          ? (
            <button
              type="button"
              className="button"
              onClick={this.showGoods}
            >
              Start
            </button>
          ) : (
            <>
              <div className="App">
                <div className="App__buttons">
                  <button
                    type="button"
                    className="button"
                    onClick={this.sortbyAlpabet}
                  >
                    Sort alphabetically
                  </button>

                  <button
                    type="button"
                    className="button"
                    onClick={this.sortbyLength}
                  >
                    Sort by length
                  </button>

                  <button
                    type="button"
                    className="button"
                    onClick={this.sortRevers}
                  >
                    Reverse
                  </button>

                  <button
                    type="button"
                    className="button"
                    onClick={this.sortReset}
                  >
                    Reset
                  </button>
                </div>

                <ul className="Goods">
                  {visibleGoods.map(item => (
                    <li className="Goods__item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            </>
          )}
      </div>
    );
  }
}
