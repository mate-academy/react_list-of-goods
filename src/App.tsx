import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

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

enum SortBy {
  alphabetical = 'abc',
  length = 'length',
}

type State = {
  started: boolean;
  goods: string[];
  visibleGoods: string[]
};

class App extends React.Component<{}, State> {
  state = {
    started: false,
    goods: goodsFromServer,
    visibleGoods: goodsFromServer,
  };

  start = () => {
    this.setState({ started: true });
  };

  reverse = () => {
    this.setState(
      state => ({ visibleGoods: [...state.visibleGoods].reverse() }),
    );
  };

  reset = () => {
    this.setState(
      state => ({ visibleGoods: state.goods }),
    );
  };

  sort = (sortType: SortBy) => {
    this.setState(
      state => ({
        visibleGoods: [...state.goods].sort((current, next) => {
          switch (sortType) {
            case SortBy.alphabetical:
              return current.localeCompare(next);
            case SortBy.length:
              return current.length - next.length;
            default: return 0;
          }
        }),
      }),
    );
  };

  render() {
    const { goods, visibleGoods, started } = this.state;

    return (
      <div className="App">
        <div className="level">
          <h1
            className="
              title
              has-text-centered"
          >
            Goods
          </h1>
          { !started && (
            <button
              type="button"
              className="button is-success"
              onClick={this.start}
            >
              Start
            </button>
          )}
        </div>
        { started && (
          <>
            <GoodsList
              goods={visibleGoods}
            />
            <button
              type="button"
              className="button is-success"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              className="button is-success"
              onClick={() => this.sort(SortBy.alphabetical)}
            >
              Sort Alphabetically
            </button>
            <button
              type="button"
              className="button is-success"
              onClick={() => this.sort(SortBy.length)}
            >
              Sort by length
            </button>
            {goods !== visibleGoods && (
              <button
                type="button"
                className="button is-danger"
                onClick={this.reset}
              >
                Reset
              </button>
            )}
          </>
        )}
      </div>
    );
  }
}

export default App;
