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
    firstTime: true,
    isReversed: false,
    sortBy: 'default',
  }

  start = () => {
    this.setState({ firstTime: false });
  }

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  }

  sortByLetter = () => {
    this.setState({ sortBy: 'letter' });
  }

  reset = () => {
    this.setState({ sortBy: 'default' });
    this.setState({ isReversed: false });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  render() {
    const formattedGoods = [...goodsFromServer];

    const { sortBy } = this.state;

    if (sortBy.localeCompare('default' !== 0)) {
      switch (sortBy) {
        case 'letter':
          formattedGoods.sort();
          break;

        case 'length':
          formattedGoods.sort(
            (firsGood, secondGood) => firsGood.length - secondGood.length,
          );
          break;
        default:
      }
    }

    if (this.state.isReversed) {
      formattedGoods.reverse();
    }

    return (
      <div className="App">
        {
        this.state.firstTime ? (
          <button type="button" onClick={this.start}>start</button>
        ) : (
          <>
            <h1>Goods</h1>
            <button type="button" onClick={this.reverse}>Reverse</button>
            <button
              type="button"
              onClick={this.sortByLetter}
            >
              Sort alphabetically
            </button>
            <button type="button" onClick={this.reset}>Reset</button>
            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            {formattedGoods.map(good => (
              <li key={good}>{good}</li>
            ))}
          </>
        )
        }
      </div>
    );
  }
}

export default App;
