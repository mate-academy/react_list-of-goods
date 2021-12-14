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
  goods: string[],
  start: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    start: false,
  };

  showList = () => {
    this.setState({
      start: true,
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
    const { goods, start } = this.state;

    return (
      <div className="App">
        {!start ? (
          <button
            type="button"
            className="App__button App__button--start"
            onClick={this.showList}
          >
            Start
          </button>
        ) : (
          <div className="App__good">
            <h1 className="App__title">
              Goods
            </h1>

            <div className="App__buttons">
              <button
                type="button"
                className="App__button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                className="App__button"
                onClick={this.sort}
              >
                Sort by alphabet
              </button>

              <button
                type="button"
                className="App__button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="App__button"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>

            <ul className="GoodsList__item">
              {
                goods.map(good => (
                  <li key={good} className="GoodsList__list">
                    {good}
                  </li>
                ))
              }
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;
