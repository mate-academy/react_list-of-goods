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
const selectElem = (arr, n) => [...arr.slice(n, 10)];

class App extends React.Component {
  state = {
    isLoaded: false,
    visiblegoods: [...goodsFromServer],
    valueChange: 0,
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

  checkBy = (event) => {
    const { value } = event.target;
    this.setState(prevGood => ({
      valueChange: value,
      visiblegoods: selectElem(prevGood.visiblegoods, value),
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
            <form action="select1.php" method="post">
              <p>
                <select
                  value={this.state.valueChange}
                  onChange={this.checkBy}
                  multiple
                  name="hero[]"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </p>
            </form>
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
