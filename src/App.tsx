import React from 'react';
import './App.css';

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
  goods: string[],
  isShown: boolean,
  isReversed: boolean,
  sortBy: string,
  length: number,
};

export class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isShown: false,
    isReversed: false,
    sortBy: '',
    length: 1,
  };

  showGoods = () => {
    this.setState((state) => ({
      isShown: !state.isShown,
    }));
  };

  reverse = () => {
    this.setState(prevstate => ({
      isReversed: !prevstate.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({
      sortBy: 'alphabet',
      isReversed: false,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      isReversed: false,
    });
  };

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      isReversed: false,
      sortBy: '',
      length: 1,
    });
  };

  filterByLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    this.setState({
      length: +value,
    });
  };

  getList = () => {
    const {
      isReversed, sortBy, goods, length,
    } = this.state;

    const products = [...goods].filter(good => good.length >= length);

    if (isReversed) {
      return products.reverse();
    }

    if (sortBy) {
      products.sort((product1, product2) => {
        switch (sortBy) {
          case 'alphabet':
            return product1.localeCompare(product2);
          case 'length':
            return product1.length - product2.length;
          default:
            return 0;
        }
      });
    }

    return products;
  };

  render() {
    const { isShown } = this.state;
    const products = this.getList();

    return (
      <div className="App">
        {!isShown && (
          <button
            className="App__button"
            type="button"
            onClick={this.showGoods}
          >
            Start
          </button>
        )}

        {isShown && (
          <div className="App__container">
            <ul className="goods-list">
              {products.map(item => (
                <li
                  className="goods-list__item"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="goods-list__button-wrapper">
              <button
                className="goods-list__button"
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                className="goods-list__button"
                type="button"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>

              <button
                className="goods-list__button"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                className="goods-list__button"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
              <select
                className="goods-list__select"
                name="length"
                value={this.state.length}
                onChange={this.filterByLength}
              >
                <option className="goods-list__option" value="1" selected>1</option>
                <option className="goods-list__option" value="2">2</option>
                <option className="goods-list__option" value="3">3</option>
                <option className="goods-list__option" value="4">4</option>
                <option className="goods-list__option" value="5">5</option>
                <option className="goods-list__option" value="6">6</option>
                <option className="goods-list__option" value="7">7</option>
                <option className="goods-list__option" value="8">8</option>
                <option className="goods-list__option" value="9">9</option>
                <option className="goods-list__option" value="10">10</option>
              </select>
            </div>
          </div>
        )}
      </div>
    );
  }
}
