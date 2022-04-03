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

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isVisible: false,
  };

  showGoods = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sort = (sortBy: string) => {
    const sortedGoods = [...this.state.goods];

    sortedGoods.sort((goodA, goodB) => {
      switch (sortBy) {
        case 'alpha':
          return goodA.localeCompare(goodB);

        case 'length':
          return goodA.length - goodB.length;

        default:
          return 0;
      }
    });

    return (
      this.setState({
        goods: [...sortedGoods],
      })
    );
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  };

  render() {
    const { goods, isVisible } = this.state;

    return (
      <div className="app">
        <h1>List of Goods</h1>
        { !isVisible
          ? (
            <button
              type="button"
              onClick={this.showGoods}
            >
              Start
            </button>
          )
          : (
            <>
              <div className="wrapper">
                <div className="buttons">
                  <button
                    type="button"
                    className="button"
                    onClick={this.reverse}
                  >
                    Reverse
                  </button>
                  <button
                    type="button"
                    className="button"
                    onClick={() => this.sort('alpha')}
                  >
                    Sort alphabetically
                  </button>
                  <button
                    type="button"
                    className="button"
                    onClick={() => this.sort('length')}
                  >
                    Sort by length
                  </button>
                  <button
                    type="button"
                    className="button"
                    onClick={this.reset}
                  >
                    Reset
                  </button>
                </div>
                <ul>
                  {goods.map(good => (
                    <li key={good}>
                      {good}
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

type State = {
  goods: string[],
  isVisible: boolean,
};

export default App;
