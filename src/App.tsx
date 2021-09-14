import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodList';

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
  visibleGoods: string[],
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    visibleGoods: [...goodsFromServer],
    isVisible: false,
  };

  visible = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }
    ));
  };

  reverse = () => {
    this.setState(state => ({
      visibleGoods: state.visibleGoods.reverse(),
    }));
  };

  sortByAlphabet = () => {
    this.setState(state => ({
      visibleGoods: state.visibleGoods.sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      visibleGoods: state.visibleGoods.sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState(() => ({
      visibleGoods: [...goodsFromServer],
    }));
  };

  render() {
    const {
      isVisible,
      visibleGoods,
    } = this.state;

    return (
      <div className="App">
        {!isVisible && (
          <button
            type="button"
            onClick={this.visible}
            className="app__button"
          >
            START
          </button>
        )}

        {isVisible && (
          <div className="app__body">
            <button
              type="button"
              onClick={this.reverse}
              className="app__button"
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortByAlphabet}
              className="app__button"
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
              className="app__button"
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={this.reset}
              className="app__button"
            >
              Reset
            </button>

            <ul>
              {isVisible && <GoodsList goods={visibleGoods} />}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;
