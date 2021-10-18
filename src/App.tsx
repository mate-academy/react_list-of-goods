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

interface State {
  allGoods: string[],
  isReversed: boolean,
  start: boolean,
  sortBy: string,
}

class App extends React.Component<{}, State> {
  state: State = {
    allGoods: goodsFromServer,
    isReversed: false,
    start: false,
    sortBy: '',
  };

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  sortyByName = () => {
    this.setState(() => ({
      sortBy: 'alphabet',
    }));
  };

  sortyByLength = () => {
    this.setState(() => ({
      sortBy: 'length',
    }));
  };

  reset = () => {
    this.setState({
      allGoods: [...goodsFromServer],
      isReversed: true,
    });
  };

  render() {
    const {
      allGoods,
      isReversed,
      sortBy,
      start,
    } = this.state;
    const goods = [...allGoods];

    goods.sort((f1, f2) => {
      switch (sortBy) {
        case 'alphabet':
          return f1.localeCompare(f2);

        case 'length':
          return f2.length - f1.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="App">
        {!start && (
          <button
            type="button"
            onClick={() => {
              this.setState({ start: true });
            }}
          >
            START
          </button>
        )}
        {start && (
          <>
            <h1>Goods</h1>

            <ul className="list">
              {goods.map(good => (
                <li key={good}>{good}</li>
              ))}
            </ul>

            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortyByName}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>

            <button
              type="button"
              onClick={this.sortyByLength}
            >
              Sort by length
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
