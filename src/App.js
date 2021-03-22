import React from 'react';
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
].map((name, index) => ({
  name,
  id: index + 1,
  length: name.length,
}));

class App extends React.Component {
  state = {
    active: false,
    isReversed: false,
    sortBy: 'id',
  };

  showList = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  }

  reverse = () => {
    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
    }));
  }

  reset = () => {
    this.setState(({
      isReversed: false,
      sortBy: 'id',
    }));
  }

  sortAlphabetically = () => {
    this.setState({ sortBy: 'name' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  render() {
    const { active, isReversed, sortBy } = this.state;

    const copyGoodsFromServer = [...goodsFromServer];

    copyGoodsFromServer.sort((prev, next) => {
      switch (sortBy) {
        case 'id':
        case 'length':
          return prev[sortBy] - next[sortBy];
        case 'name':
          return prev[sortBy].localeCompare(next[sortBy]);
        default:
          return 0;
      }
    });

    if (isReversed) {
      copyGoodsFromServer.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <button type="button" onClick={this.showList}>
          Show list
        </button>

        <div className={`${active ? '' : 'active'}`}>
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

        <ul className={`${active ? '' : 'active'}`}>
          {copyGoodsFromServer.map(good => (
            <li key={good.id}>
              {good.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
