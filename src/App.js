import React from 'react';
import GoodsList from './components/GoodsList/GoodsList';
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
    visibleList: false,
    goodsList: goodsFromServer,
    isReversed: false,
    sortBy: null,
  };

  showGoods = () => {
    this.setState({
      visibleList: true,
    });
  };

  reverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      goodsList: goodsFromServer,
      isReversed: false,
      sortBy: null,
    });
  };

  sortAlphabetically = () => {
    this.setState({
      sortBy: 'alphabetically',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  render() {
    const { visibleList, goodsList } = this.state;
    const goodsCopy = [...goodsList];

    goodsCopy.sort((good1, good2) => {
      switch (this.state.sortBy) {
        case 'alphabetically':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (this.state.isReversed) {
      goodsCopy.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <p>{goodsCopy.length}</p>
        {!visibleList && (
          <button
            onClick={this.showGoods}
            type="button"
          >
            Start
          </button>
        )}

        {visibleList && (
          <div>
            <GoodsList goods={goodsCopy} />
            <button
              onClick={this.reverse}
              type="button"
            >
              Reverse
            </button>
            <button
              onClick={this.sortAlphabetically}
              type="button"
            >
              Sort alphabetically
            </button>
            <button
              onClick={this.sortByLength}
              type="button"
            >
              Sort by length
            </button>
            <button
              onClick={this.reset}
              type="button"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
