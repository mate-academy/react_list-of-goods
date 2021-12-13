import React from 'react';
import './App.css';
import { GoodList } from './components/GoodList';

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
  isShown: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isShown: false,
  };

  sortAlphabetically = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((goodA, goodB) => goodA.localeCompare(goodB)),
    }));
  };

  SortByLength = () => {
    this.setState((state) => ({
      goods: [...state.goods].sort((goodA, goodB) => goodA.length - goodB.length),
    }));
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  reset = () => {
    this.setState({ goods: goodsFromServer });
  };

  render() {
    const { goods, isShown } = this.state;

    return (
      <div className="App">
        <div className="goods">
          {isShown
          && (
            <>
              <GoodList goods={goods} />
              <div className="btn-wrap">
                <button
                  type="button"
                  className="btn-reverse btn"
                  onClick={this.reverse}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  className="btn-sortAlpha btn"
                  onClick={this.sortAlphabetically}
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  className="btn-reset btn"
                  onClick={this.reset}
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="btn-sortByLen btn"
                  onClick={this.SortByLength}
                >
                  Sort by length
                </button>
              </div>
            </>
          )}
          {!isShown && (
            <button
              type="button"
              className="btn-start btn"
              onClick={() => this.setState({ isShown: true })}
            >
              Start your groccery journey
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
