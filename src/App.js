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

const options = Array.from({ length: 10 }, (_, i) => i + 1);

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    newGoods: [...goodsFromServer],
    isGoodsShoven: false,
  }

  showGoodsHandler = () => {
    this.setState({ isGoodsShoven: true });
  }

  filterHandler = (event) => {
    const valueForFilter = event.target.value;

    this.setState(state => (
      {
        newGoods: state.goods.filter(good => good.length >= valueForFilter),
      }
    ));
  }

  reverseHandler = () => {
    this.setState(state => (
      {
        newGoods: [...state.newGoods].reverse(),
      }
    ));
  }

  resetingHandler = () => {
    this.setState(state => ({ newGoods: state.goods }));
  }

  sortAlphabeticallyHandler = () => {
    this.setState(state => (
      {
        newGoods: [...state.newGoods].sort((a, b) => a.localeCompare(b)),
      }
    ));
  }

  sortByLengthHandler = () => {
    this.setState(state => (
      {
        newGoods: [...state.newGoods].sort((a, b) => a.length - b.length),
      }
    ));
  }

  render() {
    const { isGoodsShoven, newGoods } = this.state;

    return (
      <div className="App">

        {isGoodsShoven
          ? (
            <>
              <div
                className="App__buttons buttons-box"
              >
                <button
                  type="button"
                  className="buttons-box__button"
                  onClick={this.reverseHandler}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  className="buttons-box__button"
                  onClick={this.sortAlphabeticallyHandler}
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  className="buttons-box__button"
                  onClick={this.resetingHandler}
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="buttons-box__button"
                  onClick={this.sortByLengthHandler}
                >
                  Sort by length
                </button>
                <span
                  className="button-box__select-description"
                >
                  { 'good-size more than '}
                </span>
                <select
                  className="button-box__select"
                  onChange={this.filterHandler}
                >
                  {options.map(option => (
                    <option
                      key={option}
                    >
                      {option}
                    </option>
                  ))
                  }
                </select>

              </div>

              <ul
                className="App__list"
              >
                {newGoods.map(good => (
                  <li
                    key={good}
                    className="App__item"
                  >
                    {`${good} (${good.length})`}
                  </li>
                ))}
              </ul>
            </>
          )
          : (
            <button
              type="button"
              onClick={this.showGoodsHandler}
              className="App__button--show-goods"
            >
              SHOW GOODS
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
