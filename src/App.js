import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    startList: goodsFromServer,
    currentList: goodsFromServer,
    isShowed: false,
  }

  reset = () => {
    this.setState(state => ({
      currentList: state.startList,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      currentList: [...state.currentList].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      currentList: [...state.currentList].sort(),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      currentList: [...state.currentList].sort((a, b) => a.length - b.length),
    }));
  }

  showList = () => {
    this.setState(() => ({
      isShowed: true,
    }));
  }

  render() {
    const { currentList, isShowed } = this.state;

    return (
      <div className="App">
        {
          isShowed
            ? (
              <>
                <GoodsList goods={currentList} />

                <button
                  type="button"
                  className="button"
                  onClick={this.reverse}
                >
                  Reverse!
                </button>

                <button
                  type="button"
                  className="button"
                  onClick={this.sortByAlphabet}
                >
                  ABC sort!
                </button>

                <button
                  type="button"
                  className="button"
                  onClick={this.reset}
                >
                  Reset!
                </button>

                <button
                  type="button"
                  className="button"
                  onClick={this.sortByLength}
                >
                  Sort by length!
                </button>
              </>
            )
            : (
              <button
                type="button"
                className="start-button"
                onClick={this.showList}
              >
                Start!
              </button>
            )
        }
      </div>
    );
  }
}

export default App;
