import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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

type State = {
  isHidden: boolean,
  isReverse: boolean,
  goods: string[],
  sortBy: string,
  selectedValue: number,
};

export class App extends React.PureComponent<{}, State> {
  state = {
    isHidden: true,
    isReverse: false,
    goods: goodsFromServer,
    sortBy: '',
    selectedValue: 1,
  };

  showList = () => {
    this.setState(state => ({
      isHidden: !state.isHidden,
    }));
  };

  sortByName = () => {
    this.setState(() => ({
      sortBy: 'name',
      isReverse: false,
    }));
  };

  sortByLength = () => {
    this.setState(() => ({
      sortBy: 'length',
      isReverse: false,
    }));
  };

  shouldReverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  };

  reset = () => {
    this.setState((state) => ({
      goods: state.goods,
      isReverse: false,
      sortBy: '',
      selectedValue: 0,
    }));
  };

  render() {
    const {
      sortBy,
      isHidden,
      isReverse,
      goods,
      selectedValue,
    } = this.state;

    const products = [...goods]
      .sort((productOne, productTwo) => {
        switch (sortBy) {
          case 'name':
            return productOne.localeCompare(productTwo);

          case 'length':
            return productOne.length - productTwo.length;

          default:
            return 0;
        }
      })
      .filter(product => product.length >= selectedValue);

    if (isReverse) {
      products.reverse();
    }

    return (
      <div className="App">
        {isHidden
          ? (
            <button
              type="button"
              className="App__button App__button--start"
              onClick={this.showList}
            >
              Start
            </button>
          )
          : (
            <>
              <div className="App__button-panel">
                <button
                  className="App__button"
                  type="button"
                  onClick={this.sortByName}
                >
                  Sort by name
                </button>

                <button
                  type="button"
                  className="App__button"
                  onClick={this.sortByLength}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="App__button"
                  onClick={this.shouldReverse}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="App__button App__button--reset"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>

              <ul className="App__list">
                {products.map(product => (
                  <li className="App__card" key={product}>
                    {product}
                  </li>
                ))}
              </ul>

              <select
                className="App__word-length-selector"
                value={selectedValue}
                onChange={
                  ({ target }) => (
                    this.setState({
                      selectedValue: +target.value,
                    }))
                }
              >
                {goods.map((_, index) => (
                  <option value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </>
          )}
      </div>
    );
  }
}
