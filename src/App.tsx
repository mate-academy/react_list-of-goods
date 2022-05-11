import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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

type State = {
  goodsList: string[],
  isVisible: boolean,
  isReversed: boolean,
  sortBy: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    goodsList: goodsFromServer,
    isVisible: false,
    isReversed: false,
    sortBy: '',
  };

  showGoods = () => {
    this.setState({ isVisible: true });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
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

  render() {
    const {
      goodsList,
      isVisible,
      isReversed,
      sortBy,
    } = this.state;

    const visibleGoods = [...goodsList];

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

    return isVisible
      ? (
        <div className="App">
          <h1>Goods</h1>
          <button
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.sortByName}
          >
            Sort by Name
          </button>
          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort by Length
          </button>
          <button
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
          <GoodsList goods={visibleGoods} />
        </div>
      )
      : (
        <button
          type="button"
          onClick={this.showGoods}
        >
          Start
        </button>
      );
  }
}

export default App;
