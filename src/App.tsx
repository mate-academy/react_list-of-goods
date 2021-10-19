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
  goods: string[];
  isReversed: boolean;
  sortBy: string | null;
  isRun: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isReversed: false,
    sortBy: null,
    isRun: false,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  start = () => {
    this.setState((state) => ({
      isRun: !state.isRun,
    }));
  };

  sortByABC = () => {
    this.setState({
      sortBy: 'abc',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      isReversed: false,
      sortBy: null,
    });
  };

  render() {
    const {
      goods,
      isReversed,
      sortBy,
      isRun,
    } = this.state;
    const goodsForApp = [...goods];

    if (sortBy) {
      goodsForApp.sort((a, b) => {
        switch (sortBy) {
          case 'abc':
            return a.localeCompare(b);
          case 'length':
            return a.length - b.length;
          default:
            return 0;
        }
      });
    }

    if (isReversed) {
      goodsForApp.reverse();
    }

    return (
      <div className="app">
        <h1 className="app__title">Goods</h1>

        <button
          type="button"
          className="app__start-reset"
          onClick={() => {
            if (!isRun) {
              this.start();
            } else {
              this.reset();
            }
          }}
        >
          {!isRun ? 'Start' : 'Reset'}
        </button>

        <div className="app__buttons">
          <input
            type="button"
            className="app__btn"
            onClick={() => this.setState({ sortBy: 'abc' })}
            value="Sort alphabetically"
          />
          <input
            type="button"
            className="app__btn"
            onClick={() => this.setState({ sortBy: 'length' })}
            value="Sort by length"
          />
          <input
            type="button"
            className="app__btn"
            onClick={this.reverse}
            value="Reverse"
          />
        </div>
        <ul className={!isRun ? 'app__list--none' : 'app__list'}>
          {goodsForApp.map((good) => (
            <li className="app__item" key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
