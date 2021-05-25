import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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

const INITIAL_CRITERIA = {
  isStartScript: true,
  isReversed: false,
  sortBy: 'alphabetically',
};

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    ...INITIAL_CRITERIA,
  };

  startSript = () => this.setState({ isStartScript: false });

  sortAlphabetically = () => this.setState({ sortBy: 'alphabetically' });

  sortByLength = () => this.setState({ sortBy: 'byLength' });

  reset = () => {
    this.setState(state => ({
      ...state,
      ...INITIAL_CRITERIA,
      isStartScript: false,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  render() {
    const { isStartScript, goods, isReversed, sortBy } = this.state;
    const goodsByCriteria = [...goods];

    goodsByCriteria.sort((a, b) => {
      switch (sortBy) {
        case 'byLength':
          return a.length - b.length;
        case 'alphabetically':
        default:
          return a.localeCompare(b);
      }
    });

    if (isReversed) {
      goodsByCriteria.reverse();
    }

    return (
      <>
        <button
          type="button"
          className={isStartScript ? 'show btn' : 'hide btn'}
          onClick={this.startSript}
        >
          Start
        </button>
        <div
          className={isStartScript ? 'hide' : ''}
        >
          <GoodsList goods={goodsByCriteria} />
          <div>
            <button
              type="button"
              className="btn"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              className="btn"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              className="btn"
              onClick={this.reset}
            >
              Reset
            </button>
            <button
              type="button"
              className="btn"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
