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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    isReversed: false,
    isVisible: false,
    sortBy: '',
  };

  start = () => {
    this.setState({ isVisible: true });
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  reset = () => {
    this.setState({
      sortBy: '',
      isReversed: false,
    });
  }

  copyGoodsList = () => {
    const { goods, isReversed, sortBy } = this.state;

    const visibleGoods = [...goods];

    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'alphabet':
          return g1.localeCompare(g2);
        case 'length':
          return g1.length - g2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  }

  render() {
    const visibleGoods = this.copyGoodsList();

    return (
      <div className="app">
        {this.state.isVisible ? (
          <>
            <h1>Goods</h1>
            <GoodsList goods={visibleGoods} />
            <button
              type="button"
              onClick={this.reverse}
            >
              reverse
            </button>
            <button
              type="button"
              onClick={this.sortByAlphabet}
            >
              alphabet
            </button>
            <button
              type="button"
              onClick={this.sortByLength}
            >
              length
            </button>
            <button
              type="button"
              onClick={this.reset}
            >
              reset
            </button>
          </>
        ) : (<button type="button" onClick={this.start}>Start</button>
        )}
      </div>
    );
  }
}

export default App;
