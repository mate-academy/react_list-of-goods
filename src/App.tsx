import React from 'react';
import './App.scss';
import { GoodList } from './Components/GoodsList';

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
  state = {
    goods: [...goodsFromServer],
    isVisible: true,
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

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { isVisible, goods } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">Goods</h1>
        {isVisible
          ? (
            <button
              type="button"
              onClick={() => this.setState({ isVisible: !isVisible })}
              className="app__button"
            >
              Start
            </button>
          )
          : (
            <div className="app__list-n-buttons">
              <div className="app__list">
                <GoodList goods={goods} />
              </div>
              <div>
                <button
                  type="button"
                  onClick={this.reverse}
                  className="app__button"
                >
                  Reverse
                </button>
                <button
                  type="button"
                  onClick={this.sortAlphabetically}
                  className="app__button"
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  onClick={this.reset}
                  className="app__button"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={this.sortByLength}
                  className="app__button"
                >
                  Sort by length
                </button>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default App;
