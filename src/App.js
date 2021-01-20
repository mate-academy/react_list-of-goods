import React from 'react';
import './App.css';
import GoodsList from './Components/GoodsList';

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
    goodsDatas: goodsFromServer,
    start: true,
    isReversed: false,
    sortBy: 'alphabet',
  }

  start = () => {
    this.setState({ start: false });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({
      sortBy: 'alphabet',
      isReversed: false,
    });
  };

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      isReversed: false,
    });
  };

  render() {
    const { goodsDatas, start, isReversed, sortBy } = this.state;

    const goodsCopy = [...goodsDatas];

    goodsCopy.sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsCopy.reverse();
    }

    return (
      <div className="App">
        <button
          className={start
            ? 'button__start-visible'
            : 'button__start-unvisible'
          }
          type="button"
          onClick={this.start}
        >
          Start
        </button>
        <div
          className={start
            ? 'filter-unvisible'
            : 'filter-visible'
          }
        >
          <h1>Goods:</h1>
          <GoodsList
            goods={goodsCopy}
          />

          <button
            className="button__reverse"
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            className="button__reverse"
            type="button"
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            className="button__reverse"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>

          <button
            className="button__reverse"
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>
      </div>
    );
  }
}

export default App;
