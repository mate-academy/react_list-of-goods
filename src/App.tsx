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

interface State {
  goods: string[]
  isVisible: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
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

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((goodOne, goodTwo) => goodOne.length - goodTwo.length),
    }));
  };

  sortByAplhabet = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((goodOne, goodTwo) => goodOne.localeCompare(goodTwo)),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">List of Goods</h1>
        {this.state.isVisible
          ? (
            <section className="Goods">
              <ul className="Goods__list">
                {this.state.goods.map(good => (
                  <li key="good" className="Goods__item">
                    {good}
                  </li>
                ))}
              </ul>

              <div className="Goods__buttonList">
                <button
                  className="Goods__button Goods__button--reverse"
                  type="button"
                  onClick={this.reverse}
                >
                  Reverse
                </button>

                <button
                  className="Goods__button Goods__button--sortname"
                  type="button"
                  onClick={this.sortByAplhabet}
                >
                  Sort by aplhabet
                </button>

                <button
                  className="Goods__button Goods__button--sortlength"
                  type="button"
                  onClick={this.sortByLength}
                >
                  Sort by words length
                </button>
                <button
                  className="Goods__button Goods__button--reset"
                  type="button"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>
            </section>
          )
          : (
            <div className="Goods__buttonList">
              <button
                className="Goods__button Goods__button--show"
                type="button"
                onClick={this.showGoods}
              >
                Start
              </button>
            </div>
          )}
      </div>
    );
  }
}

export default App;
