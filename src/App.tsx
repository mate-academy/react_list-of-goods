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
  isListVisible: boolean;
  goods: string[];
  isReversed: boolean;
  sortBy: string;
  isReset: boolean;
  goodsLength: number;
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isListVisible: false,
    isReversed: false,
    sortBy: '',
    isReset: true,
    goodsLength: 1,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      isReset: false,
    }));
  };

  sortBy = (criterion: string) => {
    this.setState({
      sortBy: criterion,
      isReset: false,
    });
  };

  goodsLengthSwitcher = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const value = target.valueAsNumber;

    this.setState({ goodsLength: value });
  };

  render() {
    const {
      isListVisible,
      isReversed,
      goods,
      isReset,
      sortBy,
      goodsLength,
    } = this.state;

    const visibleGoods = [...goods].filter(good => good.length >= goodsLength);

    if (!isReset) {
      visibleGoods.sort((g1, g2) => {
        switch (sortBy) {
          case 'length':
            return g1.length - g2.length;

          case 'alphabet':
            return g1.localeCompare(g2);

          default:
            return 0;
        }
      });

      if (isReversed) {
        visibleGoods.reverse();
      }
    }

    return (
      <div className="App">
        <h1>
          React list of goods
        </h1>

        {!isListVisible && (
          <button
            type="button"
            onClick={() => this.setState({ isListVisible: true })}
          >
            Start
          </button>
        )}

        {isListVisible && (
          <>
            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={() => this.sortBy('alphabet')}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={() => this.sortBy('length')}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={() => this.setState({
                isReset: true,
                isReversed: false,
                goodsLength: 1,
              })}
            >
              Reset
            </button>

            <form action="#">
              <label htmlFor="goodsLength">
                {'Selected goods length: '}
                <output htmlFor="goodsLength">{goodsLength}</output>
                <input
                  id="goodsLength"
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={goodsLength}
                  onChange={this.goodsLengthSwitcher}
                />
              </label>
            </form>

            <ul>

              {visibleGoods.map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}

            </ul>
          </>
        )}
      </div>
    );
  }
}

export default App;
