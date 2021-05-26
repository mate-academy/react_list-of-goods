import React from 'react';
import './App.css';
import { GoodsList } from './components';

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
    goods: [],
    isReversed: false,
    sortBy: '',
  };

  start = () => {
    this.setState({
      goods: [...goodsFromServer],
    });
  };

  sortByName = () => {
    this.setState({ sortBy: 'name' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  render() {
    const { goods, sortBy, isReversed } = this.state;
    const visibleGoods = [...goods];

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {goods.length
          ? (
            <>
              <button type="button" onClick={this.reverse}>Reverse</button>
              <button type="button" onClick={this.reset}>Reset</button>
              <p>Sort by:</p>
              <button type="button" onClick={this.sortByName}>Name</button>
              <button type="button" onClick={this.sortByLength}>Length</button>
              <GoodsList goods={visibleGoods} />
            </>
          )
          : (
            <button type="button" onClick={this.start}>Start</button>
          )
        }
      </div>
    );
  }
}

export default App;
