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

class App extends React.PureComponent {
  state = {
    goods: goodsFromServer,
    isStarted: false,
    isReversed: false,
    sortBy: 'standart',
  };

  render() {
    const {
      goods,
      isStarted,
      isReversed,
      sortBy,
    } = this.state;

    const goodsCopy = [...goods];

    switch (sortBy) {
      case 'alphabet':
        goodsCopy.sort((g1, g2) => g1.localeCompare(g2));
        break;
      case 'length':
        goodsCopy.sort((g1, g2) => (g1.length - g2.length));
        break;
      default: break;
    }

    if (isReversed) {
      goodsCopy.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>

        {!isStarted && (
          <button
            type="button"
            onClick={() => {
              this.setState({ isStarted: true });
            }}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <button
              type="button"
              onClick={() => this.setState({ isReversed: !isReversed })}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={() => this.setState({ sortBy: 'alphabet' })}
            >
              Sort alphabetically
            </button>
            <button
              type="button"
              onClick={() => this.setState({ sortBy: 'length' })}
            >
              Sort by length
            </button>
            <button
              type="button"
              onClick={() => {
                this.setState({ sortBy: 'standart', isReversed: false });
              }}
            >
              Reset
            </button>
            <ul>
              {goodsCopy.map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default App;
