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
    isListVisible: false,
    isReversed: false,
    sortBy: '',
  }

  makeListVisible = () => (
    this.setState(state => ({
      isListVisible: !state.isListVisible,
    }))
  )

  makeReversed = () => (
    this.setState(state => ({
      isReversed: !state.isReversed,
    }))
  )

  sortByGoodName = () => {
    this.setState({ sortBy: 'goodName' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  resetList = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  }

  render() {
    const { isListVisible, isReversed, sortBy } = this.state;
    const goodsFromServerCopy = [...goodsFromServer];

    goodsFromServerCopy.sort((currGood, nextGood) => {
      switch (sortBy) {
        case 'goodName':
          return currGood.localeCompare(nextGood);

        case 'length':
          return currGood.length - nextGood.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsFromServerCopy.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isListVisible && (
          <button
            type="button"
            onClick={this.makeListVisible}
          >
            Start
          </button>
        )}
        {isListVisible && (
          <>
            <ul>
              {goodsFromServerCopy.map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={this.makeReversed}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sortByGoodName}
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
              onClick={this.resetList}
            >
              Reset
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
