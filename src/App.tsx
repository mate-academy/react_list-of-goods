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
  visible: boolean,
  goods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    visible: true,
    goods: goodsFromServer,
  };

  start = () => {
    this.setState({ visible: false });
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortByAlphabhet = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState({ goods: goodsFromServer });
  };

  render() {
    const { visible } = this.state;

    return (
      <div className="App">
        {visible && (
          <button
            className="App__button"
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}
        <div className="App__block">
          {
            !visible && (
              <>
                <h1 className="App__title">Goods</h1>
                <div className="App__body">
                  <button
                    className="App__button-menu"
                    onClick={this.reverse}
                    type="button"
                  >
                    Reverse
                  </button>
                  <button
                    className="App__button-menu"
                    onClick={this.sortByAlphabhet}
                    type="button"
                  >
                    Sort alphabetically
                  </button>
                  <button
                    onClick={this.sortByLength}
                    type="button"
                    className="App__button-menu"
                  >
                    Sort by length
                  </button>
                  <button
                    onClick={this.reset}
                    type="button"
                    className="App__button-menu"
                  >
                    Reset
                  </button>
                </div>
                <ul className="App__list">
                  {this.state.goods.map(good => (
                    <li key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
