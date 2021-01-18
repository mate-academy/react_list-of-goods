import React from 'react';
import './App.css';
import { GoodsList } from './GoodsList';

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
    sortedBy: '',
    isReversed: false,
    listVisible: false,
    goods: goodsFromServer,

  }

  listIsVisible = () => {
    this.setState({ listVisible: true });
  }

  listIsInvisible = () => {
    this.setState({ listVisible: false });
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortAlphabetically = () => {
    this.setState({ sortedBy: 'name' });
  }

  sortByLength = () => {
    this.setState({ sortedBy: 'length' });
  }

  reset = () => {
    this.setState({
      sortedBy: '',
      isReversed: false,
    });
  }

  render() {
    const { goods, listVisible, isReversed, sortedBy } = this.state;
    const copyOfGoods = goods.slice();

    copyOfGoods.sort((good1, good2) => {
      switch (sortedBy) {
        case 'name':
          return good1.localeCompare(good2);

        case 'length':
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      copyOfGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>

        <button
          type="button"
          onClick={this.listIsVisible}
          className={listVisible ? 'hidden' : 'visible'}
        >
          Show List
        </button>

        <button type="button" onClick={this.listIsInvisible}>
          Hide List
        </button>

        <GoodsList goods={copyOfGoods} visibility={listVisible} />

        <button type="button" onClick={this.reverse}>
          Reverse
        </button>

        <button type="button" onClick={this.sortAlphabetically}>
          Sort alphabetically
        </button>

        <button type="button" onClick={this.sortByLength}>
          Sort by length
        </button>

        <button type="button" onClick={this.reset}>
          Reset
        </button>

      </div>
    );
  }
}

export default App;
