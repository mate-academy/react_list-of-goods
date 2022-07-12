import React from 'react';
import classNames from 'classnames';

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

interface State {
  showGoods: boolean,
  goods: string[],
  isReversed: boolean,
  isSorted: boolean,
  sortBy: string,
  minLength: number,
}

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    showGoods: false,
    goods: goodsFromServer,
    isReversed: false,
    isSorted: false,
    sortBy: '',
    minLength: 1,
  };

  handleGoodsList = () => {
    this.setState({ showGoods: true });
  };

  handleSortAlphabetically = () => {
    this.setState({ isSorted: true, sortBy: 'alphabet' });
  };

  handleSortByLength = () => {
    this.setState({ isSorted: true, sortBy: 'length' });
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      isSorted: false,
      sortBy: '',
      minLength: 1,
    });
  };

  handleReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  handleMinLength = (value: number) => {
    this.setState({ minLength: value });
  };

  render() {
    const {
      showGoods,
      goods,
      isReversed,
      isSorted,
      sortBy,
      minLength,
    } = this.state;

    const {
      handleGoodsList,
      handleReverse,
      handleSortAlphabetically,
      handleSortByLength,
      handleReset,
      handleMinLength,
    } = this;

    const visibleGoods = goods.filter(
      singleGoods => singleGoods.length >= minLength,
    );

    if (isSorted) {
      switch (sortBy) {
        case 'alphabet':
          visibleGoods.sort((firstProduct, secondProduct) => {
            return firstProduct.localeCompare(secondProduct);
          });
          break;

        case 'length':
          visibleGoods.sort((firstProduct, secondProduct) => {
            return firstProduct.length - secondProduct.length;
          });
          break;

        default:
          return 0;
      }
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="app">
        <div className="container">
          <h1>Goods</h1>

          {!showGoods && (
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleGoodsList}
            >
              Start
            </button>
          )}

          {showGoods && (
            <>
              <ul className="list-group">
                {visibleGoods.map((singleGoods) => (
                  <li key={singleGoods} className="list-group-item">
                    {singleGoods}
                  </li>
                ))}
              </ul>

              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={handleReverse}
                >
                  Reverse
                </button>

                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>

              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  onClick={handleSortAlphabetically}
                  className={classNames(
                    'btn',
                    {
                      'btn-primary': sortBy === 'alphabet',
                      'btn-outline-primary': sortBy !== 'alphabet',
                    },
                  )}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  onClick={handleSortByLength}
                  className={classNames(
                    'btn',
                    {
                      'btn-primary': sortBy === 'length',
                      'btn-outline-primary': sortBy !== 'length',
                    },
                  )}
                >
                  Sort by length
                </button>
              </div>

              <select
                className="form-select"
                aria-label="Default select example"
                value={minLength}
                onChange={({ target }) => {
                  handleMinLength(Number(target.value));
                }}
              >
                { Array.from(Array(11).keys()).slice(1).map(num => (
                  <option
                    key={num}
                    value={num}
                  >
                    {num}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
