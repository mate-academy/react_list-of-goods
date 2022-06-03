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
  isVisible: boolean,
  goods: string[],
  initialGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
    goods: [...goodsFromServer],
    initialGoods: [...goodsFromServer],
  };

  render() {
    const { isVisible, goods } = this.state;

    return (
      <div className="App">
        <h1 className="title">Goods</h1>
        {!isVisible
          ? (
            <button
              className="start-button btn btn-warning"
              type="button"
              onClick={() => {
                this.setState({ isVisible: true });
              }}
            >
              Start
            </button>
          ) : (
            <div>
              <div
                className="buttons btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  className="btn btn-warning"
                  type="button"
                  onClick={() => {
                    this.setState((state) => ({
                      goods: [...state.goods].reverse(),
                    }));
                  }}
                >
                  Reverse
                </button>

                <button
                  className="btn btn-warning"
                  type="button"
                  onClick={() => {
                    this.setState((state) => ({
                      goods: [...state.goods]
                        .sort((goodA, goodB) => (goodA.localeCompare(goodB))),
                    }));
                  }}
                >
                  Sort alphabetically
                </button>

                <button
                  className="btn btn-warning"
                  type="button"
                  onClick={() => {
                    this.setState((state) => ({
                      goods: state.initialGoods,
                    }));
                  }}
                >
                  Reset
                </button>
                <button
                  className="btn btn-warning"
                  type="button"
                  onClick={() => {
                    this.setState((state) => ({
                      goods: [...state.goods]
                        .sort((goodA, goodB) => goodA.length - goodB.length),
                    }));
                  }}
                >
                  Sort by length
                </button>
              </div>

              <ul className="goods-list">
                {goods.map(good => (
                  <li key={good}>
                    {good}
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
