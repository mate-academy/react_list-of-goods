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

type Sorted = 'alphabet' | 'length';

type State = {
  goods: string[],
  start: boolean,
  isReverse: boolean,
  sortBy: null | Sorted,
};

export default class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    start: false,
    isReverse: false,
    sortBy: null,
  };

  reverse = () => this.setState((state) => ({ isReverse: !state.isReverse }));

  sortAlphab = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  reset = () => {
    this.setState({
      isReverse: false,
      sortBy: null,
    });
  };

  render() {
    const {
      goods,
      isReverse,
      sortBy,
      start,
    } = this.state;

    const goodsCopy = [...goods];

    switch (sortBy) {
      case 'alphabet':
        goodsCopy.sort((good1, good2) => good1.localeCompare(good2));
        break;
      case 'length':
        goodsCopy.sort((good1, good2) => (good1.length - good2.length));
        break;
      default: break;
    }

    if (isReverse) {
      goodsCopy.reverse();
    }

    return (
      <div>
        <h1 className="App__title">Goods</h1>

        {!start && (
          <button
            type="button"
            onClick={() => {
              this.setState({ start: true });
            }}
          >
            Start
          </button>
        )}

        {start && (
          <>
            <ul>
              {goodsCopy.map(good => <li key={good}>{good}</li>)}
            </ul>
            <button onClick={this.reverse} type="button">Reverse</button>
            <button onClick={this.sortAlphab} type="button">Sort alphabetically</button>
            <button onClick={this.sortByLength} type="button">Sort by length</button>
            <button onClick={this.reset} type="button">Reset</button>
          </>
        )}
      </div>

    );
  }
}
