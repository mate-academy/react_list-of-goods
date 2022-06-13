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
  goods: string[];
  isVisible: boolean;
  isReversed: boolean;
  length: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isVisible: false,
    isReversed: false,
    length: 1,
  };

  start = () => {
    this.setState({ isVisible: true });
  };

  reverse = () => {
    this.setState((state) => (
      { isReversed: !state.isReversed }
    ));
  };

  render() {
    const {
      goods,
      isVisible,
      isReversed,
      length,
    } = this.state;

    const visibleGoods = [...goods].filter(good => good.length >= length);

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="app">
        <h1 className="app__title">Goods</h1>

        {!isVisible && (
          <button
            type="button"
            className="app__start-btn"
            onClick={this.start}
          >
            Start
          </button>
        )}

        <div className="app__reverse-btn">
          {isVisible && (
            <div>
              <div className="app__reverse-btn">
                <button
                  type="button"
                  className="app__reverse-btn"
                  onClick={this.reverse}
                >
                  Reverse
                </button>
              </div>

              <ul className="visible">
                {visibleGoods.map((good) => (
                  <li key={good} className="visible__goods">
                    {good}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
