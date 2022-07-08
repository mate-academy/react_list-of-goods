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

  showGoodsList = () => {
    this.setState({ showGoods: true });
  };

  sortAlphabetically = () => {
    this.setState({ isSorted: true, sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ isSorted: true, sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      isSorted: false,
      sortBy: '',
      minLength: 1,
    });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  setMinLength = (value: number) => {
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
      showGoodsList,
      reverse,
      sortAlphabetically,
      sortByLength,
      reset,
      setMinLength,
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
              onClick={showGoodsList}
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
                  onClick={reverse}
                >
                  Reverse
                </button>

                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={reset}
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
                  onClick={sortAlphabetically}
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
                  onClick={sortByLength}
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
                  setMinLength(Number(target.value));
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
