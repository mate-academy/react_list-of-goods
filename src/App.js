import React from 'react';
import GoodsList from './GoodsList';

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

const sortForGoodsReverse = arr => [...arr].reverse();
const alphabeticallySort = arr => [...arr].sort((a, b) => a.localeCompare(b));
const sortByLenght = arr => [...arr].sort((a, b) => a.length - b.length);

class App extends React.Component {
  state = {
    isLoaded: false,
    visiblegoods: [...goodsFromServer],
  };

  sortByReverse = () => {
    this.setState(prevGood => ({
      visiblegoods: sortForGoodsReverse(prevGood.visiblegoods),
    }));
  };

  sortByAlphabetically = () => {
    this.setState(prevGood => ({
      visiblegoods: alphabeticallySort(prevGood.visiblegoods),
    }));
  };

  sortByReset = () => {
    this.setState(prevGood => ({
      visiblegoods: [...goodsFromServer],
    }));
  };

  sortByLength = () => {
    this.setState(prevGood => ({
      visiblegoods: sortByLenght(prevGood.visiblegoods),
    }));
  };

  loadClick = () => {
    this.setState({
      isLoaded: true,
      visiblegoods: [...goodsFromServer],
    });
  };

  render() {
    return (
      <div className="App">
        { this.state.isLoaded ? (
          <div className="App__wrapp">
            <h1>Goods</h1>
            <button type="button" onClick={this.sortByReverse}>Reverse</button>
            <button
              type="button"
              onClick={this.sortByAlphabetically}
            >
                Alphabetically
            </button>
            <button type="button" onClick={this.sortByReset}>Reset</button>
            <button type="button" onClick={this.sortByLength}>byLength</button>
            <GoodsList goods={this.state.visiblegoods} />
          </div>
        ) : (
          <div>
            <button type="button" onClick={this.loadClick}>
              Start
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
