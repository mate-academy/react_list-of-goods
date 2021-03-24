import React from 'react';
import './App.css';
import { GoodsList } from './Components/GoodsList';

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
  }

  showGoods = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
      goods: state.goods,
    }));
  }

  reverseGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByNameOfGood = () => {
    this.setState({ sortBy: 'name' });
  }

  sortByNameLength = () => {
    this.setState({ sortBy: 'length' });
  }

  resetHandler = () => {
    this.setState({
      sortBy: '', isReversed: false,
    });
  }

  render() {
    const { goods, isVisible, isReversed, sortBy } = this.state;

    const visibleGoods = [...goods];

    visibleGoods.sort((previousGood, nextGood) => {
      switch (sortBy) {
        case 'name':
          return previousGood.localeCompare(nextGood);

        case 'length':
          return previousGood.length - nextGood.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        {!isVisible && (
        <button
          type="button"
          onClick={this.showGoods}
        >
          Start
        </button>
        )}

        {isVisible && (
        <>
          <h1>Goods List</h1>

          <GoodsList goods={visibleGoods} />

          <button
            type="button"
            onClick={this.reverseGoods}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.sortByNameOfGood}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByNameLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.resetHandler}
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
