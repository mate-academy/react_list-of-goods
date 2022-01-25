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

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isListVisible: false,
    sortBy: '',
    isReversed: false,
  };

  reverse = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alphabetically',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  reset = () => {
    this.setState(
      {
        isReversed: false,
        sortBy: '',
      },
    );
  };

  prepareGoods = () => {
    const { goods, sortBy, isReversed } = this.state;
    const goodsCopy = [...goods];

    goodsCopy.sort((g1, g2) => {
      switch (sortBy) {
        case 'alphabetically':
          return g1.localeCompare(g2);
        case 'length':
          return g1.length - g2.length;
        default:
          return 0;
      }
    });
    if (isReversed) {
      goodsCopy.reverse();
    }

    return goodsCopy;
  };

  render() {
    const { isListVisible } = this.state;
    const preparedGoods = this.prepareGoods();

    return (
      <div className="App">
        {!isListVisible && (
          <div className="start">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                this.setState(({ isListVisible: true }));
              }}
            >
              Start
            </button>
          </div>
        )}

        {isListVisible && (
          <div className="goods">
            <h1>Goods</h1>
            <ul className="list-group">
              {preparedGoods.map(good => (
                <li key={good} className="list-group-item">
                  {good}
                </li>
              ))}
            </ul>

            <div className="buttons">
              <button
                type="button"
                onClick={this.sortByLength}
                className="btn btn-dark sort-btn"
              >
                Sort by length
              </button>
              <button
                type="button"
                onClick={this.sortByAlphabet}
                className="btn btn-dark sort-btn"
              >
                Sort by name
              </button>
              <button
                type="button"
                onClick={this.reverse}
                className="btn btn-dark sort-btn"
              >
                Revers
              </button>
              <button
                type="button"
                onClick={this.reset}
                className="btn btn-dark"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
