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
    reverse: false,
    filterByLength: 1,
    sort: '',
  }

  reset = () => {
    this.setState({
      visibleList: true,
      goods: goodsFromServer,
      reverse: false,
      filterByLength: 1,
      sort: '',
    });
  }

  reverse = () => {
    this.setState(state => ({ reverse: !state.reverse }));
  }

  sortByAlph = () => {
    this.setState(state => ({ sort: 'byAlph' }));
  }

  sortByLength = () => {
    this.setState(state => ({ sort: 'byLength' }));
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: parseFloat(value) });
  }

  render() {
    const selectOptionArr = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 10; i++) {
      selectOptionArr.push(i);
    }

    const { visibleList, goods, reverse, filterByLength, sort } = this.state;
    const renderedArr = [...goods]
      .filter(good => good.length <= filterByLength);

    renderedArr.sort((good1, good2) => {
      switch (sort) {
        case 'byAlph':
          return good1.localeCompare(good2);

          break;
        case 'byLength':
          return good1.length - good2.length;

          break;
        default:
          return 0;
      }
    });
    if (reverse) {
      renderedArr.reverse();
    }

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
              {renderedArr.map(good => (
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
              onClick={this.sortByAlph}
            >
              Sort alphabetically
            </button>
            <button
              type="submit"
              onClick={this.sortByLength}
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
