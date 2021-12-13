import React from 'react';
import './App.scss';

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
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isVisible: false,
  };

  showGoods = () => {
    this.setState({
      isVisible: true,
    });
  };

  reverse = () => {
    this.setState((state) => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sort = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort(),
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort(
        (a, b) => a.length - b.length,
      ),
    }));
  };

  reset = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
    }));
  };

  render() {
    const { goods, isVisible } = this.state;

    return (
      <div className="App">
        {!isVisible ? (
          <button
            className="App__button App__button--start"
            type="button"
            onClick={this.showGoods}
          >
            Start
          </button>
        ) : (
          <div className="App__goods">
            <h1 className="App__title">
              Goods
            </h1>
            <ul className="App__list">
              {goods.map((good) => (
                <li key={good} className="App__listItem">
                  {good}
                </li>
              ))}
            </ul>

            <div className="App__buttons">
              <button
                className="App__button"
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                className="App__button"
                type="button"
                onClick={this.sort}
              >
                Sort
              </button>
              <button
                className="App__button"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
              <button
                className="App__button"
                type="button"
                onClick={this.reset}
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
