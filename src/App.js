import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
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
    goods: goodsFromServer,
    start: false,
    minGoodsLength: 1,
  }

  showGoodsList = () => {
    this.setState({ start: true });
  };

  getReverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  getSortAlphabeticallyList = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => (
        a.localeCompare(b)
      )),
    }));
  }

  resetList = () => {
    this.setState({
      goods: goodsFromServer,
      minGoodsLength: 1,
    });
  }

  getSortByLengthList = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => (
        a.length - b.length
      )),
    }));
  }

  getSelectedLength = ({ target }) => {
    this.setState({ minGoodsLength: target.value });
  }

  render() {
    const { goods, start, minGoodsLength } = this.state;
    const goodsLengthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
      <div className="App">
        <h1>Goods:</h1>

        <button
          type="button"
          className={start
            ? 'hover'
            : null}
          onClick={this.showGoodsList}
        >
          Start
        </button>

        {start
          && (
            <div className="listWrapper">
              <GoodsList
                goods={goods}
                minGoodsLength={minGoodsLength}
              />

              <div className="btnWrapper">
                <button
                  type="button"
                  onClick={this.getReverseList}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  onClick={this.getSortAlphabeticallyList}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  onClick={this.resetList}
                >
                  Reset
                </button>

                <button
                  type="button"
                  onClick={this.getSortByLengthList}
                >
                  Sort by length
                </button>

                <label>
                  Select goods name length:
                  <select
                    value={minGoodsLength}
                    onChange={this.getSelectedLength}
                  >
                    {goodsLengthArray.map(goodslength => (
                      <option
                        key={goodslength}
                        value={goodslength}
                      >
                        {goodslength}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default App;
