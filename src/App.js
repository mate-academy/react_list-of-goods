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

const options = Array(10).fill('').map((el, index) => index + 1);

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    newGoods: [...goodsFromServer],
    isGoodsShoven: false,
  }

  showGoods = () => {
    this.setState({ isGoodsShoven: true });
  }

  filter = (event) => {
    const valueForFilter = event.target.value;

    this.setState(state => ({ newGoods: state.goods
      .filter(el => el.length >= valueForFilter) }));
  }

  reverse = () => {
    this.setState(state => (
      {
        newGoods: [...state.newGoods].reverse(),
      }
    ));
  }

  reseting = () => {
    this.setState(state => ({ newGoods: state.goods }));
  }

  sortAlphabetically = () => {
    this.setState(state => (
      {
        newGoods: [...state.newGoods].sort((a, b) => a.localeCompare(b)),
      }
    ));
  }

  sortByLength = () => {
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
                  onClick={this.reverse}
                >
                  Reverse
                </button>
                <button
                  type="button"
                  className="buttons-box__button"
                  onClick={this.sortAlphabetically}
                >
                  Sort alphabetically
                </button>
                <button
                  type="button"
                  className="buttons-box__button"
                  onClick={this.reseting}
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="buttons-box__button"
                  onClick={this.sortByLength}
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
                  onChange={this.filter}
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
              onClick={this.showGoods}
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
