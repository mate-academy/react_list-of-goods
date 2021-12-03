import React from 'react';
import { GoodsList } from './components/GoodsList';
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
              <GoodsList goods={this.state.goods} />

              <div>
                <button
                  className="Goods__button"
                  type="button"
                  onClick={this.reverse}
                >
                  Reverse
                </button>

                <button
                  className="Goods__button"
                  type="button"
                  onClick={this.sortByAplhabet}
                >
                  Sort by aplhabet
                </button>

                <button
                  className="Goods__button"
                  type="button"
                  onClick={this.sortByLength}
                >
                  Sort by words length
                </button>
                <button
                  className="Goods__button"
                  type="button"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>
            </section>
          )
          : (
            <div>
              <button
                className="Goods__button"
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
