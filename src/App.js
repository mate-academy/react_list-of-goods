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
    defaultLength: 1,
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
      defaultLength: 1,
    }));
  }

  limit = (props) => {
    const { target } = props;

    this.setState(({
      defaultLength: target.value,
    }));
  }

  sortAlphabetically = () => {
    this.setState({ sortBy: 'name' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  render() {
    const { active, isReversed, sortBy, defaultLength } = this.state;

    const copyGoodsFromServer = [...goodsFromServer].filter(
      good => good.length >= defaultLength,
    );

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
          <select
            value={defaultLength}
            onChange={this.limit}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>

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
