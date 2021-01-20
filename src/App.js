import React from 'react';
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
    isVissible: false,
    isReversed: false,
    sortBy: '',
  };

  showList = () => {
    this.setState({ isVissible: true });
  };

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAsString = () => {
    this.setState({ sortBy: 'string' });
  }

  sortAsNumber = () => {
    this.setState({ sortBy: 'number' });
  }

  resetList = () => {
    this.setState({
      goods: goodsFromServer,
      isReversed: false,
      sortBy: '',
    });
  }

  render() {
    const { isVissible, goods, isReversed, sortBy } = this.state;
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
        {isVissible || (
          <button type="button" onClick={this.showList}>
            Start
          </button>
        )}
        {isVissible && (
          <>
            <ul>
              {newGoods.map(good => (<li key={good}>{good}</li>))}
            </ul>

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

          </>
        )}
      </div>
    );
  }
}

export default App;
