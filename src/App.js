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
    goods: goodsFromServer,
    isReversed: false,
    isVisible: false,
    sortBy: '',
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  start = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  }

  render() {
    const { isVisible, isReversed, goods, sortBy } = this.state;
    const { start, reverse, sortAlphabetically, reset, sortByLength } = this;
    const visibleGoods = [...goods];

    visibleGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabet':
          return good1.localeCompare(good2);

        case 'length':
          return good1.length - good2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>

        {isVisible
          ? (
            <>
              <button type="button" onClick={start}>
                End
              </button>
              <ol>
                {visibleGoods.map(good => (
                  <li key={good}>{good}</li>
                ))}
              </ol>
              <button type="button" onClick={() => reverse()}>
                Reverse
              </button>
              <button type="button" onClick={() => sortAlphabetically()}>
                Sort alphabetically
              </button>
              <button type="button" onClick={() => reset()}>
                Reset
              </button>
              <button type="button" onClick={() => sortByLength()}>
                Sort by length
              </button>
            </>
          )
          : (
            <button type="button" onClick={this.start}>
              Start
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
