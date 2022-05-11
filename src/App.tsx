import React from 'react';
import './App.scss';

interface State {
  goods: string[],
  isVisible: boolean,
}

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

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isVisible: false,
  };

  reverse = () => {
    this.setState(({ goods }) => ({
      goods: goods.reverse(),
    }));
  };

  sortAlph = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortLength = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
    }));
  };

  showList = () => {
    this.setState({ isVisible: true });
  };

  hideList = () => {
    this.setState({ isVisible: false });
  };

  render() {
    const { goods, isVisible } = this.state;

    return isVisible
      ? (
        <div className="App">
          <div className="App__buttons">
            <button
              type="button"
              className="App__btn"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              className="App__btn"
              onClick={this.sortAlph}
            >
              Sort by alphabet
            </button>

            <button
              type="button"
              className="App__btn"
              onClick={this.sortLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className="App__btn"
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
          <h1 className="App__title">
            Goods
          </h1>
          <ul className="App__list">
            {
              goods.map(good => (
                <li key={good} className="App__list-item">
                  {good}
                </li>
              ))
            }
          </ul>
          <button
            type="button"
            className="App__btn App__btn--hide"
            onClick={this.hideList}
          >
            Hide list
          </button>
        </div>
      )
      : (
        <div className="center">
          <button
            type="button"
            className="button-start"
            onClick={this.showList}
          >
            Show list
          </button>
        </div>
      );
  }
}

export default App;
