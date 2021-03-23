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
    goods: goodsFromServer,
    listIsPublished: false,
  }

  publish = () => {
    this.setState(state => ({
      listIsPublished: !state.listIsPublished,
    }));
  }

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (prev, next) => prev.length - next.length,
      ),
    }));
  }

  sortByAlphabeth = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: [...goodsFromServer],
    }));
  }

  render() {
    return (
      <div className="App">
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
                dataForRender={this.state.goods}
              />

              <button
                type="button"
                onClick={this.reverseList}
              >
                Reverse order
              </button>

              <button
                type="button"
                onClick={this.sortByLength}
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
