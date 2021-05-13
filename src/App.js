/* eslint-disable no-unreachable */
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
];

class App extends React.Component {
  state = {
    visibleList: false,
    goods: goodsFromServer,
    mutableGoods: [...goodsFromServer],
    filterByLength: 1,
  }

  reset = () => {
    this.setState(state => ({
      mutableGoods: [...state.goods],
      filterByLength: 1,
    }));
  }

  reverse = () => {
    this.setState(state => ({ mutableGoods: state.mutableGoods.reverse() }));
  }

  sortArr = (sort) => {
    this.setState(state => ({ mutableGoods: state.mutableGoods
      .sort((good1, good2) => {
        switch (sort) {
          case 'byAlphabetically':
            return good1.localeCompare(good2);

            break;
          case 'byLength':
            return good1.length - good2.length;

            break;
          default:
            return 0;
        }
      }) }));
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState(state => ({
      [name]: parseFloat(value),
    }));
  }

  render() {
    const selectOptionArr = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 10; i++) {
      selectOptionArr.push(i);
    }

    const { visibleList, filterByLength, mutableGoods } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {!visibleList
          ? (
            <button
              type="submit"
              onClick={() => {
                this.setState({ visibleList: true });
              }}
            >
              Start
            </button>
          )
          : (
            <ol className="list">
              {mutableGoods.filter(good => good.length <= filterByLength)
                .map(good => (
                  <li key={good}>
                    {good}
                  </li>
                ))}
            </ol>
          )
        }
        {visibleList
          && (
          <div className="buttons">
            <button
              type="submit"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="submit"
              onClick={() => {
                this.sortArr('byAlphabetically');
              }}
            >
              Sort alphabetically
            </button>
            <button
              type="submit"
              onClick={() => {
                this.sortArr('byLength');
              }}
            >
              Sort by length
            </button>
            <button
              type="submit"
              onClick={this.reset}
            >
              Reset
            </button>
            <div className="box">
              <select
                name="filterByLength"
                value={filterByLength}
                onChange={this.handleChange}
              >
                {selectOptionArr.map(option => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          )
        }
      </div>
    );
  }
}

export default App;
