import React from 'react';
import classNames from 'classnames';
import './App.scss';

interface Good {
  id: number;
  name: string;
  price: number;
}

const goodsFromServer: Good[] = [
  { id: 1, name: 'Dumplings', price: 11 },
  { id: 2, name: 'Carrot', price: 2 },
  { id: 3, name: 'Eggs', price: 7 },
  { id: 4, name: 'Ice cream', price: 4 },
  { id: 5, name: 'Apple', price: 3 },
  { id: 6, name: 'Bread', price: 4 },
  { id: 7, name: 'Fish', price: 4 },
  { id: 8, name: 'Honey', price: 14 },
  { id: 9, name: 'Jam', price: 12 },
  { id: 10, name: 'Garlic', price: 1 },
];

const largestPrice: number = Math.max(...goodsFromServer.map(good => good.price));

interface State {
  goods: Good[];
  isStarted: boolean;
  isReversed: boolean;
  sortBy: string;
  maxPrice: number;
}

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isStarted: false,
    isReversed: false,
    sortBy: '',
    maxPrice: largestPrice,
  };

  start = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByName = () => {
    this.setState({ sortBy: 'name' });
  };

  sortByPrice = () => {
    this.setState({ sortBy: 'price' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      maxPrice: largestPrice,
    });
  };

  render() {
    const {
      isStarted, goods, maxPrice, isReversed, sortBy,
    } = this.state;

    const visibleGoods = goods.filter(good => good.price <= maxPrice);

    if (sortBy) {
      visibleGoods.sort((a, b) => {
        switch (sortBy) {
          case 'name':
            return a.name.localeCompare(b.name);

          case 'price':
            return a.price - b.price;

          default:
            return 1;
        }
      });
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    const prices = goods.map((good: Good) => good.price);

    return (
      <div className="App">
        <h1 className="App__heading">Goods</h1>
        {isStarted || (
          <button
            className="App__button"
            type="button"
            onClick={this.start}
          >
            start
          </button>
        )}
        {isStarted && (
          <div className="App">

            <div className="App__buttons">
              <button
                className={classNames(
                  'App__button',
                  { 'App__button--active': isReversed },
                )}
                type="button"
                onClick={this.reverse}
              >
                reverse
              </button>
              <button
                className={classNames(
                  'App__button',
                  { 'App__button--active': sortBy === 'name' },
                )}
                type="button"
                onClick={this.sortByName}
              >
                sort alphabetically
              </button>
              <button
                className={classNames(
                  'App__button',
                  { 'App__button--active': sortBy === 'price' },
                )}
                type="button"
                onClick={this.sortByPrice}
              >
                sort by price
              </button>
              <button
                className="App__button"
                type="button"
                onClick={this.reset}
              >
                reset
              </button>
            </div>
            <div className="App__price-filter">
              <input
                className="App__max-price"
                type="range"
                name="maxPrice"
                step={1}
                min={
                  Math.min(
                    ...prices,
                  )
                }
                max={
                  Math.max(
                    ...prices,
                  )
                }
                value={maxPrice}
                onChange={(event) => {
                  const { name, value } = event.target;

                  this.setState(state => ({
                    ...state,
                    [name]: value,
                  }));
                }}
              />
              <span>
                {`Max price: ${maxPrice}`}
              </span>
            </div>
            <ul className="App__list">
              {visibleGoods.map(good => (
                <li
                  key="good.id"
                  className="App__item"
                >
                  <h2 className="App__good-name">{good.name}</h2>
                  <p className="App__good-price">{`price: ${good.price}`}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;
