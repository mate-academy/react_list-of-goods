import React from 'react';
import { GoodList } from './components/GoodList';
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
    isVisible: false,
    isReversed: false,
    sortBy: '',
  };

  showList = () => {
    this.setState({ isVisible: true });
  };

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAsString = () => {
    this.setState({
      sortBy: 'string',
      isReversed: false,
    });
  };

  sortAsNumber = () => {
    this.setState({
      sortBy: 'number',
      isReversed: false,
    });
  };

  resetList = () => {
    this.setState({
      goods: goodsFromServer,
      isReversed: false,
      sortBy: '',
    });
  }

  render() {
    const { isVisible, goods, isReversed, sortBy } = this.state;
    const newGoods = [...goods];

    newGoods.sort((prevGood, nextGood) => {
      switch (sortBy) {
        case 'string':
          return prevGood.localeCompare(nextGood);

        case 'number':
          return prevGood.length - nextGood.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      newGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {isVisible || (
          <button type="button" onClick={this.showList}>
            Start
          </button>
        )}
        {isVisible && (
          <>
            <button type="button" onClick={this.reverseList}>
              Reverse
            </button>

            <button type="button" onClick={this.sortAsString}>
              Sort A-Z
            </button>

            <button type="button" onClick={this.sortAsNumber}>
              Sort 0-9
            </button>

            <button type="button" onClick={this.resetList}>
              Reset
            </button>

            <GoodList goods={newGoods} />
          </>
        )}
      </div>
    );
  }
}

export default App;
