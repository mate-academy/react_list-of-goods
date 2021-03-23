import React from 'react';
import './App.css';
import { Buttons } from './components/Buttons';

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

export class App extends React.PureComponent {
  state = {
    friends: goodsFromServer,
    isStarted: false,
    isSort: false,
    isReset: false,
    isReverse: false,
    sortBy: 'alphabetically',
  }

  getStarted = () => {
    this.setState(prevState => ({
      isStarted: !prevState.isStarted,
    }));
  }

  reverseGood = () => {
    this.setState(prevState => ({
      isReverse: !prevState.isReverse,
    }));
  }

  sortByAlphabet = () => {
    this.setState(prevState => ({
      isSort: !prevState.isSort,
      sortBy: 'alphabetically',
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      isSort: !prevState.isSort,
      sortBy: 'length',
    }));
  }

  resetGood = () => {
    this.setState(prevState => ({
      isReverse: false,
      isSort: false,
      isReset: !prevState.isReset,
      sortBy: 'alphabetically',
    }));
  }

  render() {
    const {
      friends,
      isStarted,
      sortBy,
      isSort,
      isReverse,
    } = this.state;

    let copiedArray = [...friends];

    if (isReverse) {
      copiedArray.reverse();
    }

    if (isSort) {
      switch (sortBy) {
        case 'alphabetically':
          copiedArray = [...friends].sort((f1, f2) => f1.localeCompare(f2));
          break;
        case 'length':
          copiedArray = [...friends].sort((f1, f2) => f1.length - f2.length);
          break;
        default:
          break;
      }
    }

    return (
      <>
        <h1>Goods</h1>
        {!isStarted && (
          <button
            type="button"
            onClick={this.getStarted}
          >
            Start
          </button>
        )}

        <button
          type="button"
          onClick={this.reverseGood}
        >
          reverse
        </button>

        <button
          type="button"
          onClick={this.sortByAlphabet}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort By Length
        </button>

        <button
          type="button"
          onClick={this.resetGood}
        >
          Reset
        </button>

        {isStarted && (
          <Buttons friends={copiedArray} />
        )}
      </>
    );
  }
}

export default App;
