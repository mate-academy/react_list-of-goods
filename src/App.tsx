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

type State = {
  goods: string[];
  isVisible: boolean;
  isReversed: boolean;
  length: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isVisible: false,
    isReversed: false,
    length: 1,
  };

  start = () => {
    this.setState({ isVisible: true });
  };

  reverse = () => {
    this.setState((state) => (
      { isReversed: !state.isReversed }
    ));
  };

  sortByName = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((good1, good2) => (
        (good1).localeCompare(good2)
      )),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((good1, good2) => (
        good1.length - good2.length
      )),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      isReversed: false,
      length: 1,
    });
  };

  render() {
    const {
      goods,
      isVisible,
      isReversed,
      length,
    } = this.state;

    const visibleGoods = [...goods].filter(good => good.length >= length);

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div>
        <h1>Goods</h1>

        {!isVisible && (
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}

        <div>
          {isVisible && (
            <div>
              <div>
                <button
                  type="button"
                  onClick={this.reverse}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  onClick={() => this.sortByName()}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  onClick={() => this.sortByLength()}
                >
                  Sort Sort by length
                </button>

                <button
                  type="button"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>

              <ul>
                {visibleGoods.map((good) => (
                  <li key={good}>
                    {good}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
