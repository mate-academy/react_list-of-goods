import React from 'react';
import './App.css';
import GoodList from './components/GoodList';

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
    isVisible: false,
  };

  visibleToggle = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  reverse = () => {
    this.setState(state => (
      { goods: [...state.goods].reverse() }
    ));
  };

  sortByAlphabet = () => {
    this.setState(state => (
      { goods: [...state.goods].sort((a, b) => a.localeCompare(b)) }
    ));
  };

  sortByLength = () => {
    this.setState(state => (
      { goods: [...state.goods].sort((a, b) => a.length - b.length) }
    ));
  };

  reset = () => {
    this.setState({ goods: [...goodsFromServer] });
  };

  render() {
    const { isVisible, goods } = this.state;

    return (
      <div className="App">
        {isVisible
          && (
            <>
              <h1>Good List</h1>
              <GoodList goods={goods} />

              <div className="buttons">
                <button
                  type="button"
                  onClick={this.reverse}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  onClick={this.sortByAlphabet}
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  onClick={this.reset}
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>
              </div>
            </>
          )}
        <button
          type="button"
          onClick={this.visibleToggle}
          className="toggle-button"
        >
          {isVisible ? 'Hide' : 'Start'}
        </button>
      </div>
    );
  }
}

export default App;
