import React from 'react';
import { List } from './components/List/List';
import { Button } from './components/Button/Button';
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

class App extends React.PureComponent {
  state = {
    goods: goodsFromServer,
    isListVisible: false,
    isListReversed: false,
    sortBy: null,
  }

  showList = () => {
    this.setState(state => ({
      isListVisible: !state.isListVisible,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      isListReversed: !state.isListReversed,
    }));
  }

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alphabet',
      isListReversed: false,
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      isListReversed: false,
    });
  }

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      isListReversed: false,
      sortBy: null,
    });
  }

  render() {
    const { goods, isListVisible, isListReversed, sortBy } = this.state;
    const goodsCopy = [...goods];

    if (isListVisible === false) {
      return (
        <Button showList={this.showList} />
      );
    }

    goodsCopy.sort((p1, p2) => {
      switch (sortBy) {
        case 'alphabet':
          return p1.localeCompare(p2);

        case 'length':
          return p2.length - p1.length;

        default:
          return 0;
      }
    });

    if (isListReversed) {
      goodsCopy.reverse();
    }

    return (
      <>
        <div className="App">
          <List goods={goodsCopy} />

          <button
            type="button"
            className="button is-primary"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            className="button is-primary"
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button is-warning"
            onClick={this.reset}
          >
            Reset
          </button>

          <button
            type="button"
            className="button is-primary"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </div>
      </>
    );
  }
}

export default App;
