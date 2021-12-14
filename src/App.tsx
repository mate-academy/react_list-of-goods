import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
import './App.css';

const goodsFromServer: string[] = [
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

interface State {
  goods: string[],
  goodsVisible: boolean,
  reversed: boolean,
  sortBy: string,
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    goodsVisible: false,
    reversed: false,
    sortBy: '',
  };

  toggleGoods = () => (this.setState(state => ({
    goodsVisible: !state.goodsVisible,
  })));

  reverseList = () => {
    this.setState(state => ({
      reversed: !state.reversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => (this.setState({
    goods: goodsFromServer,
    sortBy: '',
  }));

  render() {
    const {
      goods,
      goodsVisible,
      reversed,
      sortBy,
    } = this.state;
    const sortedGoods = [...goods];

    switch (sortBy) {
      case 'alphabet':
        sortedGoods.sort();
        break;
      case 'length':
        sortedGoods.sort((good1, good2) => good1.length - good2.length);
        break;
      default:
        break;
    }

    if (reversed) {
      sortedGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        <button
          type="button"
          onClick={this.toggleGoods}
          className="App__button-title"
        >
          {goodsVisible ? 'Hide Goods' : 'Show Goods'}
        </button>
        {goodsVisible && (
          <div className="App__list">
            <button
              type="button"
              onClick={this.reverseList}
              className="App__list--button"
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortAlphabetically}
              className="App__list--button"
            >
              Sort
            </button>

            <button
              type="button"
              onClick={this.reset}
              className="App__list--button"
            >
              Reset
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
              className="App__list--button"
            >
              Sort by length
            </button>

            <GoodsList goods={sortedGoods} />
          </div>
        )}
      </div>
    );
  }
}
