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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    showList: false,
  };

  startHandler = () => {
    this.setState({
      showList: true,
    });
  }

  reverseHandler = () => {
    this.setState((state) => {
      const reversedGoods = [...state.goods].reverse();

      return { goods: reversedGoods };
    });
  }

  sortAlphHandler = () => {
    this.setState((state) => {
      const sortedGoods = [...state.goods].sort((a, b) => a.localeCompare(b));

      return { goods: sortedGoods };
    });
  }

  resetHandler = () => {
    this.setState(state => ({
      goods: [...goodsFromServer],
    }));
  }

  sortByLengthHandler = () => {
    this.setState((state) => {
      const sortedGoods = [...state.goods].sort((a, b) => b.length - a.length);

      return { goods: sortedGoods };
    });
  }

  render() {
    const { showList, goods } = this.state;

    return (
      <div className="App">
        {showList
          ? (
            <section className="goods-section">
              <h1>Goods</h1>
              <ul className="goods-list">
                {goods.map(good => (
                  <li
                    key={good}
                    className="goods-list__item"
                  >
                    {good}
                  </li>
                ))}
              </ul>
              <div className="button-section">
                <button
                  type="button"
                  onClick={this.reverseHandler}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  onClick={this.sortAlphHandler}
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  onClick={this.resetHandler}
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={this.sortByLengthHandler}
                >
                  Sort by length
                </button>
              </div>
            </section>
          )
          : (
            <button
              type="button"
              className="start-button"
              onClick={this.startHandler}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
