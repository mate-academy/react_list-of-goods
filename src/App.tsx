import React from 'react';

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
  goodsFromServer: string[],
  jsx: JSX.Element[],
};

class App extends React.Component<{}, State> {
  state = {
    goodsFromServer,
    jsx: [],
  };

  showGoods = () => {
    this.setState(state => ({
      jsx: state.goodsFromServer.map(good => (
        <li>
          {good}
        </li>
      )),
    }
    ));
  };

  reverseGoods = () => {
    this.setState(state => {
      const jsxCopy = [...state.jsx];

      jsxCopy.reverse();

      return ({
        jsx: jsxCopy,
      });
    });
  };

  sortAlphabetically = () => {
    this.setState(state => {
      const goodsCopy = [...state.goodsFromServer];

      goodsCopy.sort(
        (a, b) => a.localeCompare(b),
      );

      return ({
        jsx: goodsCopy.map(good => (
          <li>
            {good}
          </li>
        )),
      });
    });
  };

  reset = () => {
    this.showGoods();
  };

  sortByNameLength = () => {
    this.setState(state => {
      const goodsCopy = [...state.goodsFromServer];

      goodsCopy.sort(
        (a, b) => a.length - b.length,
      );

      return ({
        jsx: goodsCopy.map(good => (
          <li>
            {good}
          </li>
        )),
      });
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>Goods</h1>
          {
            this.state.jsx.length === 0
              ? <button type="button" onClick={this.showGoods}>Start</button>
              : (
                <div>
                  <button type="button" onClick={this.reverseGoods}>
                    Reverse
                  </button>
                  <button type="button" onClick={this.sortAlphabetically}>
                    Sort alphabetically
                  </button>
                  <button type="button" onClick={this.reset}>Reset</button>
                  <button type="button" onClick={this.sortByNameLength}>
                    Sort by length
                  </button>
                  {this.state.jsx}
                </div>
              )
          }
        </div>
      </>
    );
  }
}

export default App;
