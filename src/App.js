import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
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
    goods: [...goodsFromServer],
    isListShown: false,
  };

  showList= () => {
    this.setState(state => ({
      isListShown: !state.isListShown,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: [...goodsFromServer],
    }));
  }

  render() {
    const { isListShown, goods } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          onClick={this.showList}
          style={(isListShown)
            ? { visibility: 'hidden' }
            : { visibility: 'visible' }
          }
        >
          Start
        </button>
        {(!isListShown)
          ? ''
          : (
            <>
              <h1>
                Goods:
              </h1>
              <GoodsList goods={goods} />
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
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
