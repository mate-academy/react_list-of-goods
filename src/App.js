import React from 'react';
import './App.scss';
import classname from 'classnames';
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
  sortBy: null,
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
          return a.localeCompare(b);
        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsByCriteria.reverse();
    }

    return (
      <div className="App">
        <button
          type="button"
          className={classname('start', {
            show: isStartScript,
            hide: !isStartScript,
          })}
          onClick={this.startSript}
        >
          Start
        </button>
        <div
          className={classname({ hide: isStartScript })}
        >
          <GoodsList goods={goodsByCriteria} />
          <div className="actions">
            <button
              type="button"
              className="actions__btn"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              className="actions__btn"
              onClick={this.sortAlphabetically}
            >
              Sort A..Z
            </button>
            <button
              type="button"
              className="actions__btn"
              onClick={this.reset}
            >
              Reset
            </button>
            <button
              type="button"
              className="actions__btn"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
