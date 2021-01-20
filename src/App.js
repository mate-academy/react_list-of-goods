import React from 'react';
import { GoodsList } from './components/GoodsList';
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

export class App extends React.Component {
  state = {
    goods: goodsFromServer,
    isStarted: false,
    isReversed: false,
    sortedBy: '',
  }

  startShow = () => {
    this.setState({ isStarted: true });
  }

  reverseIt = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  lengthSort = () => {
    this.setState({ sortedBy: 'length' });
  }

  alphabetSort = () => {
    this.setState({ sortedBy: 'alphabet' });
  }

  resetIt = () => {
    this.setState({
      sortedBy: '',
      isReversed: false,
    });
  }

  render() {
    const { goods, isStarted, isReversed, sortedBy } = this.state;

    const newGoods = [...goods];

    if (sortedBy === 'alphabet') {
      newGoods.sort();
    }

    if (sortedBy === 'length') {
      newGoods.sort((g1, g2) => g2.length - g1.length);
    }

    if (isReversed) {
      newGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        { isStarted ? (
          <>
            <GoodsList goods={newGoods} />

            <button
              type="button"
              onClick={this.reverseIt}
            >
              Reverse it!
            </button>

            <button
              type="button"
              onClick={this.alphabetSort}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.resetIt}
            >
              Reset
            </button>

            <button
              type="button"
              onClick={this.lengthSort}
            >
              Sort by length
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={this.startShow}
          >
            Start
          </button>
        )
        }
      </div>
    );
  }
}

export default App;
