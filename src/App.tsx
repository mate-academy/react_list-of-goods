import React from 'react';
import './App.css';
import { Goods } from './Goods';

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
  visible: boolean;
  goods: string[];
  minWordsLength: number;
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    visible: true,
    minWordsLength: 0,
  };

  notVisible = () => {
    this.setState({
      visible: false,
    });
  };

  reverseGood = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortedByAlphabetic = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortedByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  };

  render() {
    const { visible, goods, minWordsLength } = this.state;

    const renderList = goods.filter((good: string) => {
      return good.length >= minWordsLength;
    });

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {visible && (
          <button
            className="App__button"
            type="button"
            onClick={this.notVisible}
          >
            Start
          </button>
        )}
        <div className="App__block">
          {
            !visible && (
              <>
                <button onClick={this.reverseGood} type="button">
                  Reverse
                </button>
                <button onClick={this.sortedByAlphabetic} type="button">
                  Sort alphabetically
                </button>
                <button onClick={this.sortedByLength} type="button">
                  Sort by length
                </button>
                <button onClick={this.reset} type="button">
                  Reset
                </button>
                <select onChange={(event) => (
                  this.setState({ minWordsLength: +event.target.value }))}
                >
                  {
                    Array.from({ length: 10 }, (_, i) => i + 1).map(good => (
                      <option value={good} key={good}>
                        {good}
                      </option>
                    ))
                  }
                </select>
                <Goods goods={renderList} />
              </>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
