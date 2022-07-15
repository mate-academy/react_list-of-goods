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
  hideList: boolean,
  isRevers: boolean,
  sortBy: string,
};

class App extends React.Component<{}, State> {
  state = {
    hideList: true,
    isRevers: false,
    sortBy: '',
  };

  show = () => {
    this.setState({ hideList: false });
  };

  reverse = () => {
    this.setState(state => ({
      isRevers: !state.isRevers,
    }));
  };

  sortByAbc = () => {
    this.setState({ sortBy: 'abc' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({ isRevers: false, sortBy: '' });
  };

  render() {
    const {
      isRevers, sortBy, hideList,
    } = this.state;

    const copyGoods = [...goodsFromServer];

    copyGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'length':
          return good1.length - good2.length;
        case 'abc':
          return good1.localeCompare(good2);

        default:
          return 0;
      }
    });

    if (isRevers) {
      copyGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {hideList && (
          <button
            className="btn"
            type="button"
            onClick={this.show}
          >
            Start
          </button>
        )}
        {!hideList && (
          <div>
            <ul className="list">
              {copyGoods.map(good => (
                <li
                  className="list__item"
                  key={good}
                >
                  {good}
                </li>
              ))}
            </ul>
            <button
              className="btn"
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              className="btn"
              type="button"
              onClick={this.sortByAbc}
            >
              Sort alphabetically
            </button>
            <button
              className="btn"
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <button
              className="btn"
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
