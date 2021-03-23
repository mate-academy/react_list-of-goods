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
    goods: [...goodsFromServer],
    active: false,
    defaultLength: 1,
    selectValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  showList = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  }

  resetList = () => {
    this.setState(({
      goods: [...goodsFromServer],
    }));
  }

  limitLengthListItem = (props) => {
    const { target } = props;

    this.setState(({
      defaultLength: target.value,
      goods: goodsFromServer.filter(good => good.length >= target.value),
    }));
  }

  sortAlphabetically = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((prev, next) => (
        prev.name.localeCompare(next.name)
      )),
    }));
  }

  sortByLength = () => {
    this.setState(prevState => ({
      goods: prevState.goods.sort((prev, next) => (
        prev.length - next.length
      )),
    }));
  }

  reverseList = () => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }));
  }

  render() {
    const {
      goods,
      active,
      defaultLength,
      selectValues,
    } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        <button type="button" onClick={this.showList}>
          {`${active ? 'Close list' : 'Show list'}`}
        </button>

        <div className={`${active ? '' : 'active'}`}>
          <select
            value={defaultLength}
            onChange={this.limitLengthListItem}
          >
            {selectValues.map(value => (
              <option>
                {value}
              </option>
            ))}
          </select>

          <button type="button" onClick={this.reverseList}>
            Reverse
          </button>

          <button type="button" onClick={this.sortAlphabetically}>
            Sort alphabetically
          </button>

          <button type="button" onClick={this.sortByLength}>
            Sort by length
          </button>

          <button type="button" onClick={this.resetList}>
            Reset
          </button>
        </div>

        <ul className={`${active ? '' : 'active'}`}>
          {goods.map(good => (
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
