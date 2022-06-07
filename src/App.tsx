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
  isGoodsVisible: boolean;
  goods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    isGoodsVisible: false,
    goods: [...goodsFromServer],
  };

  showList = () => {
    this.setState((state) => ({
      isGoodsVisible: !state.isGoodsVisible,
    }));
  };

  reverse = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortByAbc = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods]
        .sort((pr1, pr2) => pr1.length - pr2.length),
    }));
  };

  render() {
    const {
      isGoodsVisible,
      goods,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>

        <button
          type="button"
          onClick={this.showList}
        >
          Start
        </button>

        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.sortByAbc}
        >
          Sort alphavetically
        </button>

        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>

        {isGoodsVisible && (
          <ul>
            {goods.map(good => (
              <li key={good}>
                {good}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
