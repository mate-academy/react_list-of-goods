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
  goods: string[];
  listVisibility: boolean;
  isReversed: boolean;
  sortBy: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    listVisibility: false,
    isReversed: false,
    sortBy: '',
  };

  start = () => {
    this.setState({ listVisibility: true });
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const {
      goods,
      listVisibility,
      isReversed,
      sortBy,
    } = this.state;
    const goodsCopy = [...goods];

    goodsCopy.sort((g1, g2) => {
      switch (sortBy) {
        case 'alphabet':
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

    return (
      <div className="App">
        {!listVisibility && (
          <button
            type="button"
            className="button is-link"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {listVisibility && (
          <div>
            <h1 className="title">Goods</h1>

            <ul>
              {goodsCopy.map(good => (
                <li key={good}>{good}</li>
              ))}
            </ul>

            <button
              type="button"
              className="button is-link"
              onClick={this.sortAlphabetically}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className="button is-link"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>

            <button
              type="button"
              className="button is-link"
              onClick={this.reverse}
            >
              Reverse
            </button>

            <br />

            <button
              type="button"
              className="button is-link"
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
