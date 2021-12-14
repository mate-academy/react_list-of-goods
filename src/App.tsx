import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isVisible: false,
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  render() {
    const { isVisible, goods } = this.state;

    return (
      <div className="App">
        <div className="container">
          {!isVisible
            ? (
              <button
                type="button"
                className="btn"
                onClick={() => this.setState({ isVisible: true })}
              >
                Start
              </button>
            )
            : (
              <>
                <h1>Goods</h1>
                <GoodsList goods={goods} />
                <button type="button" onClick={this.reverse}>
                  Reverse
                </button>
                <button type="button" onClick={this.sortAlphabetically}>
                  Sort alphabetically
                </button>
                <button type="button" onClick={this.reset}>
                  Reset
                </button>
                <button type="button" onClick={this.sortByLength}>
                  Sort by length
                </button>
              </>
            )}
        </div>
      </div>
    );
  }
}

export default App;
