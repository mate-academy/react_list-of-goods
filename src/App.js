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
    reversed: false,
    sortBy: '', // length / alphabet / null
    minProductNameLength: '1',
  }

  startHandler = () => {
    this.setState(state => ({
      started: !state.started,
    }));
  }

  changeReverseStatus = () => {
    this.setState(state => ({
      ...state,
      reversed: !state.reversed,
    }));
  }

  setSortBy = (query) => {
    this.setState({ sortBy: query });
  }

  resetHandler = () => {
    this.setSortBy('');
    this.setState({
      reversed: false,
      minProductNameLength: '1',
    });
  }

  lengthFilterHandler = ({ value }) => {
    this.setState({ minProductNameLength: value });
  }

  prepareGoods = () => {
    const { goods, reversed, sortBy, minProductNameLength } = this.state;

    let preparedGoods = [...goods];

    switch (sortBy) {
      case 'length':
        preparedGoods = preparedGoods.sort((prod1, prod2) => (
          prod1.length - prod2.length
        ));
        break;

      case 'alphabetical':
        preparedGoods = preparedGoods.sort((prod1, prod2) => (
          prod1.localeCompare(prod2)
        ));
        break;

      default:
        break;
    }

    preparedGoods = preparedGoods.filter(
      product => product.length >= minProductNameLength,
    );

    if (reversed) {
      preparedGoods = preparedGoods.reverse();
    }

    return preparedGoods;
  }

  render() {
    const {
      started,
      minProductNameLength,
    } = this.state;

    const productNameLength = [...Array(10).keys()].map(i => i + 1);
    const preparedGoods = this.prepareGoods();

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        { started ? (
          <>
            <GoodsList preparedGoods={preparedGoods} />

            <select
              name="productNameLength"
              id="productNameLength"
              className="App__select"
              value={minProductNameLength}
              onChange={({ target }) => {
                this.lengthFilterHandler(target);
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
                onClick={this.changeReverseStatus}
              >
                Reverse
              </button>
              <button
                type="button"
                className="App__btn"
                onClick={() => {
                  this.setSortBy('alphabetical');
                }}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                className="App__btn"
                onClick={() => {
                  this.setSortBy('length');
                }}
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
