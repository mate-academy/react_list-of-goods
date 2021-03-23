import React from 'react';
import GoodsList from './components/GoodsList';
import './App.css';

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
    generalArray: goodsFromServer,
    usingArray: goodsFromServer,
    listIsPublished: false,
  }

  publish = () => {
    this.setState(state => ({
      listIsPublished: !state.listIsPublished,
    }));
  }

  reversed = () => {
    this.setState(state => ({
      usingArray: [...state.usingArray].reverse(),
    }));
  }

  sortedByLength = () => {
    this.setState(state => ({
      usingArray: [...state.usingArray].sort(
        (prev, next) => prev.length - next.length,
      ),
    }));
  }

  sortByAlphabeth = () => {
    this.setState(state => ({
      usingArray: [...state.usingArray].sort(),
    }));
  }

  reset = () => {
    this.setState(state => ({
      usingArray: [...state.generalArray],
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        {goodsFromServer.length}
        {
          !this.state.listIsPublished && (
            <button
              type="button"
              onClick={this.publish}
            >
              Publish
            </button>
          )
        }
        {
          this.state.listIsPublished && (
            <>
              <GoodsList
                dataForRender={this.state.usingArray}
              />

              <button
                type="button"
                onClick={this.reversed}
              >
                Reverse order
              </button>

              <button
                type="button"
                onClick={this.sortedByLength}
              >
                Sort By Length
              </button>

              <button
                type="button"
                onClick={this.sortByAlphabeth}
              >
                Sort By Alphabeth
              </button>

              <button
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </>
          )
        }
      </div>
    );
  }
}

export default App;
