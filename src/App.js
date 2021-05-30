import React from 'react';
import { GoodsList } from './Components/GoodsList';

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
    started: false,
    minProductNameLength: '1',
  }

  startHandler = () => {
    this.setState(state => ({
      started: !state.started,
    }));
  }

  reverseHandler = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  alphabeticSortHandler = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((prod1, prod2) => (
        prod1.localeCompare(prod2)
      )),
    }));
  }

  lengthSortHandler = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((prod1, prod2) => (
        prod1.length - prod2.length
      )),
    }));
  }

  resetHandler = () => {
    this.setState(state => ({
      goods: goodsFromServer,
      minProductNameLength: '1',
    }));
  }

  lengthFilterHandler = ({ target }) => {
    this.setState({ minProductNameLength: target.value });

    this.setState(state => ({
      goods: [...goodsFromServer].filter(
        product => product.length >= state.minProductNameLength,
      ),
    }));
  }

  render() {
    const {
      goods,
      started,
      minProductNameLength,
    } = this.state;

    const productNameLength = [...Array(10).keys()].map(i => i + 1);

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        { started ? (
          <>
            <GoodsList preparedGoods={goods} />

            <select
              name="productNameLength"
              id="productNameLength"
              className="App__select"
              value={minProductNameLength}
              onChange={(event) => {
                this.lengthFilterHandler(event);
              }}
            >
              {productNameLength.map(length => (
                <option
                  key={length}
                >
                  {length}
                </option>
              ))}
            </select>

            <div className="App__btnsWrapper">
              <button
                type="button"
                className="App__btn"
                onClick={this.reverseHandler}
              >
                Reverse
              </button>
              <button
                type="button"
                className="App__btn"
                onClick={this.alphabeticSortHandler}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                className="App__btn"
                onClick={this.lengthSortHandler}
              >
                Sort by length
              </button>
              <button
                type="button"
                className="App__btn"
                onClick={this.resetHandler}
              >
                Reset
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={this.startHandler}
            type="button"
          >
            Start
          </button>
        )}
      </div>
    );
  }
}

export default App;
