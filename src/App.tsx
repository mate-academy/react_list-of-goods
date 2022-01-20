import React from 'react';
import './App.css';

const goodsFromServer: Good[] = [
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
  goods: Good[],
  showList: boolean,
  isReversed: boolean,
  sortBy: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    showList: false,
    isReversed: false,
    sortBy: '',
  };

  showGoods = () => {
    this.setState(state => ({
      showList: !state.showList,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

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

  render(): React.ReactNode {
    const {
      goods,
      showList,
      isReversed,
      sortBy,
    } = this.state;
    const goodsToShow = [...goods];

    if (!showList) {
      return (
        <button
          type="button"
          onClick={this.showGoods}
        >
          Start
        </button>
      );
    }

    goodsToShow.sort((good1, good2) => {
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
      goodsToShow.reverse();
    }

    return (
      <div className="App box">
        <h1 className="title is-1">Goods</h1>

        <button
          type="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <br />
        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>

        <div>
          <span className="title is-4">Sort:</span>
          <button
            type="button"
            onClick={this.sortAlphabetically}
          >
            Alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
          >
            By length
          </button>
        </div>

        {goodsToShow.length !== 0 && (
          <ul>
            {goodsToShow.map(good => (
              <li key={good} className="listItem">{good}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
