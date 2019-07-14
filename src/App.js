import React from 'react';
import GoodsList from './components/GoodsList';

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

const copyOfGoods = [...goodsFromServer];

class App extends React.Component {
  state = {
    goods: [],
    isLoaded: false,
    isLoading: false,
    selectVal: '1',
  };

  handleClick = () => {
    this.setState({
      isLoading: true,
    });

    setTimeout(() => {
      this.setState({
        goods: copyOfGoods,
        isLoaded: true,
        isLoading: false,
      });
    }, 1000);
  };

  handleReverse = () => {
    this.setState({
      goods: copyOfGoods.reverse(),
    });
  };

  handleSortAlphabetically = () => {
    this.setState({
      goods: copyOfGoods.sort(),
    });
  };

  handleSortByLength = () => {
    this.setState({
      goods: copyOfGoods.sort((a, b) => a.length - b.length),
    });
  };

  handleClear = () => {
    this.setState({
      goods: goodsFromServer,
      selectVal: '1',
    });
  };

  filterByLength = (event) => {
    this.setState({
      selectVal: event.target.value,
      goods: copyOfGoods.filter(a => a.length >= event.target.value),
    });
  };

  render() {
    return (
      <main>
        { this.state.isLoaded ? (
          <GoodsList
            allGoods={this.state.goods}
            handleReverse={this.handleReverse}
            handleSortAlphabetically={this.handleSortAlphabetically}
            handleSortByLength={this.handleSortByLength}
            handleClear={this.handleClear}
            filterByLength={this.filterByLength}
            selectValue={this.state.selectVal}
          />
        ) : (
          <button
            type="button"
            className="loadData"
            onClick={this.handleClick}
          >
            {this.state.isLoading ? 'Loading...' : 'Load' }
          </button>
        )}
      </main>
    );
  }
}

export default App;
