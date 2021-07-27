import React from 'react';
import './App.css';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    isVisible: false,
    isReverse: false,
    sortBy: '',
    goods: goodsFromServer,
  }

  reverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  }

  start = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  }

  reset = () => {
    this.setState({
      sortBy: '',
    });
  }

  render() {
    const { goods, isReverse, sortBy } = this.state;
    const copyGoods = [...goods];

    copyGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'length':
          return g1.length - g2.length;
        case 'alphabet':
          return g1.localeCompare(g2);

        default:
          return 0;
      }
    });
    if (isReverse) {
      copyGoods.reverse();
    }

    return (
      <div className="App position-absolute top-50 start-50 translate-middle">
        {
          this.state.isVisible
            ? (
              <>
                <h1>Goods</h1>
                <ul className="list-group list-group-flush">
                  {copyGoods.map(good => (
                    <li key={good} className="list-group-item">
                      {good}
                    </li>
                  ))}
                </ul>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={this.reverse}
                  >
                    Reverse
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={this.sortByAlphabet}
                  >
                    Sort alphabetically
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={this.reset}
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={this.sortByLength}
                  >
                    Sort by length
                  </button>
                </div>
              </>
            )
            : (
              <button
                type="button"
                className="btn btn-success"
                onClick={this.start}
              >
                Start
              </button>
            )
        }
      </div>
    );
  }
}

export default App;
